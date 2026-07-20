// src/routes/about.md.ts
// Markdown twin of about.astro — served via the markdown-negotiation edge
// function when a request's Accept header prefers text/markdown.

import { getLocale } from "i18n:astro";
import { getCollection } from "astro:content";

export async function GET() {
  const locale = getLocale();
  const page = (await getCollection("about")).find(
    (entry) => entry.data.locale === locale
  );

  if (!page) {
    return new Response("Not found", { status: 404 });
  }

  const frontmatter = [
    `# ${page.data.title}`,
    "",
    `> ${page.data.excerpt}`,
    "",
  ].join("\n");

  return new Response(`${frontmatter}\n${page.body}\n`, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
