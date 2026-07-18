// src/routes/projects/[...slug].md.ts
// Markdown twin of projects/[...slug].astro.

import { getLocalePlaceholder } from "i18n:astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const locale = getLocalePlaceholder();
  const projects = await getCollection(
    "projects",
    (project) => project.data.locale === locale
  );
  return projects.map((project) => ({
    params: { slug: project.data.slug },
    props: { project },
  }));
}

export async function GET({ props }: { props: { project: any } }) {
  const { project } = props;
  const d = project.data;

  const lines = [
    `# ${d.title}`,
    "",
    `> ${d.description}`,
    "",
    project.body,
    "",
  ];

  if (d.skills?.length) {
    lines.push(`## Skills`, "", d.skills.map((s: string) => `- ${s}`).join("\n"), "");
  }
  if (d.aiTopics?.length) {
    lines.push(`## Knowledge Areas`, "", d.aiTopics.map((t: string) => `- ${t}`).join("\n"), "");
  }
  if (d.repository?.length) {
    lines.push(`## Links`, "", d.repository.map((r: string) => `- ${r}`).join("\n"), "");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
