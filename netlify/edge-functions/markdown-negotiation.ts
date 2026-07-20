// netlify/edge-functions/markdown-negotiation.ts
//
// Performs HTTP content negotiation for AI agents: when a request's Accept
// header prefers text/markdown over text/html, this serves the Markdown
// twin of the requested page instead of the normal HTML response. Browsers
// (which send Accept: text/html) are completely unaffected — this function
// isn't even invoked for them, since the `header` condition in `config`
// below gates on the Accept header before Netlify runs it.
//
// The Markdown twins themselves are generated at build time — see
// src/routes/*.md.ts and src/routes/projects/[...slug].md.astro. This
// function only maps an HTML URL to its Markdown counterpart and returns
// it with the right headers. If a page has no twin (yet), or anything
// goes wrong, this falls back to the normal HTML response.
//
// To add Markdown support for a new route: create its `<route>.md.ts` twin
// under src/routes (see about.md.ts for the pattern). This function picks
// it up automatically — no changes needed here.
//
// Test locally:
//   netlify dev
//   curl -sD - -H "Accept: text/markdown" http://localhost:8888/en/about -o /dev/null
//
// Test in production:
//   curl -sD - -H "Accept: text/markdown" https://andresmpa.netlify.app/en/about -o /dev/null
//   (look for `content-type: text/markdown` and `x-markdown-tokens` in the response headers)

import type { Config, Context } from "@netlify/edge-functions";

// Cloudflare's Markdown for Agents uses the same ~4 bytes/token heuristic
// for its x-markdown-tokens header — see
// https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
function estimateTokens(byteLength: number): number {
  return Math.ceil(byteLength / 4);
}

// Maps an HTML page path to its prebuilt Markdown twin path.
//   /en            -> /en/index.md
//   /en/about      -> /en/about.md
//   /en/projects/lyra -> /en/projects/lyra.md
// Returns null for paths outside the localized content routes (e.g. /api/*),
// which this function should never see anyway due to `excludedPath` below.
function getMarkdownTwin(pathname: string): string | null {
  const match = pathname.match(/^\/(en|es)(\/.*)?$/);
  if (!match) return null;

  const [, locale, rest = ""] = match;

  if (rest === "" || rest === "/") {
    return `/${locale}/index.md`;
  }

  return `/${locale}${rest.replace(/\/$/, "")}.md`;
}

export default async function markdownNegotiation(
  request: Request,
  context: Context,
): Promise<Response | undefined> {
  const url = new URL(request.url);
  const { pathname } = url;

  // Already requesting the .md file directly — nothing to negotiate.
  if (pathname.toLowerCase().endsWith(".md")) {
    return context.next();
  }

  const twinPath = getMarkdownTwin(pathname);
  if (!twinPath) {
    return context.next();
  }

  try {
    // Request the twin through context.next() (not fetch()) so this same
    // edge function doesn't run again on the internal request — see
    // https://docs.netlify.com/build/edge-functions/declarations/#processing-order-caveats
    const innerHeaders = new Headers(request.headers);
    innerHeaders.set("accept", "*/*");

    const upstream = await context.next(
      new Request(new URL(twinPath, url.origin).toString(), {
        method: request.method,
        headers: innerHeaders,
        redirect: "manual",
      }),
    );

    // No twin exists for this route yet (or something else went wrong) —
    // fall back to serving the normal HTML response.
    if (!upstream.ok) {
      return context.next(request);
    }

    const text = await upstream.text();
    const body = new TextEncoder().encode(text);

    const headers = new Headers(upstream.headers);
    headers.set("content-type", "text/markdown; charset=utf-8");
    headers.set("vary", "accept");
    headers.set("content-length", String(body.byteLength));
    headers.set("x-markdown-tokens", String(estimateTokens(body.byteLength)));
    headers.set("content-signal", "ai-train=yes, search=yes, ai-input=yes");
    headers.delete("transfer-encoding");

    return new Response(body, { status: upstream.status, headers });
  } catch (error) {
    console.error("markdown-negotiation: falling back to HTML", error);
    return context.next(request);
  }
}

export const config: Config = {
  path: "/*",
  excludedPath: [
    "/api/*",
    "/_astro/*",
    "/*.xml",
    "/*.txt",
    "/*.pdf",
    "/*.png",
    "/*.jpg",
    "/*.jpeg",
    "/*.svg",
    "/*.ico",
    "/*.md",
  ],
  // Gates on the Accept header so this only runs for requests that actually
  // prefer Markdown — regular browser traffic never invokes this function.
  header: { accept: "text/markdown" },
};
