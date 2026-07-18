// src/routes/faq.md.ts
// Markdown twin of faq.astro.

import { getLocale } from "i18n:astro";
import { getCollection } from "astro:content";

export async function GET() {
  const locale = getLocale();
  const page = (await getCollection("faq")).find(
    (entry) => entry.data.locale === locale
  );

  if (!page) {
    return new Response("Not found", { status: 404 });
  }

  const { title, description, items } = page.data;

  const body = items
    .map((item) => `### ${item.question}\n\n${item.answer}`)
    .join("\n\n");

  const out = [
    `# ${title}`,
    description ? `\n> ${description}` : "",
    "",
    body,
    "",
  ].join("\n");

  return new Response(out, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
