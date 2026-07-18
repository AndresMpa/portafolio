// src/routes/index.md.ts
// Markdown twin of the homepage. The homepage itself is composed of many
// UI components rather than one content-collection entry, so this pulls
// the same underlying data directly instead of converting rendered HTML.

import { getLocale } from "i18n:astro";
import { getCollection } from "astro:content";
import { person } from "../data/person";
import { getExperience } from "../lib/experience";

export async function GET() {
  const locale = getLocale();

  const projects = await getCollection(
    "projects",
    (p) => p.data.locale === locale && p.data.featured
  );
  const experience = (await getExperience(locale)).filter((e) => e.endDate === null);

  const lines = [
    `# ${person.name}`,
    "",
    `> ${person.description}`,
    "",
    `## Currently`,
    "",
    ...experience.map((e) => `- ${e.role} at ${e.company}`),
    "",
    `## Featured Projects`,
    "",
    ...projects.map((p) => `- [${p.data.title}](/${locale}/projects/${p.data.slug}) — ${p.data.description}`),
    "",
    `## More`,
    "",
    `- Full profile: /llms-full.md`,
    `- Resume (PDF): /AndresMpa_CV.pdf`,
    `- API index: /api/knowledge.json`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
