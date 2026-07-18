// src/routes/experience.md.ts
// Markdown twin of experience/index.astro.

import { getLocale } from "i18n:astro";
import { getExperience } from "../lib/experience";
import { person } from "../data/person";

export async function GET() {
  const locale = getLocale();
  const entries = await getExperience(locale);

  const lines = [`# ${person.name} — Experience`, ""];

  for (const entry of entries) {
    const dates = entry.endDate ? `${entry.startDate} – ${entry.endDate}` : `${entry.startDate} – present`;
    lines.push(`## ${entry.role} — ${entry.company}`);
    lines.push(`*${dates}*`);
    lines.push("");
    lines.push(entry.description);
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
