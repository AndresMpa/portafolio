// netlify/edge-functions/markdown-negotiation.mjs
//
// Implements "Markdown Negotiation" for AI agents: browsers keep getting the
// normal HTML page; a request whose Accept header prefers text/markdown gets
// routed to the pre-rendered .md twin instead (see src/routes/*.md.ts).
//
// Registered in netlify.toml under [[edge_functions]].

export default async (request, context) => {
  const accept = request.headers.get("accept") ?? "";
  const firstType = accept.split(",")[0]?.trim() ?? "";
  const wantsMarkdown =
    accept.includes("text/markdown") && !firstType.includes("text/html");

  if (!wantsMarkdown) {
    return context.next();
  }

  const url = new URL(request.url);
  let path = url.pathname;

  // Don't touch things that already have their own extension
  // (JSON endpoints, well-known files, assets, etc.)
  if (/\.[a-zA-Z0-9]+$/.test(path)) {
    return context.next();
  }

  const mdPath = path.endsWith("/") ? `${path}index.md` : `${path}.md`;
  const mdUrl = new URL(mdPath, url.origin);

  const mdResponse = await context.next(new Request(mdUrl, request));

  if (mdResponse.status === 404) {
    // No markdown twin for this route (yet) — serve the normal HTML.
    return context.next();
  }

  const headers = new Headers(mdResponse.headers);
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  headers.set("Vary", "Accept");

  return new Response(mdResponse.body, {
    status: mdResponse.status,
    headers,
  });
};

export const config = { path: "/*" };
