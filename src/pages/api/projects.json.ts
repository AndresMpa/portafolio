// src/pages/api/projects.json.ts

import { getCollection } from "astro:content";
import { site } from "../../data/site";

export async function GET() {
  const projects = await getCollection("projects");

  return Response.json({
    version: site.version,
    updated: site.updated,

    data: projects.map(project => ({
      slug: project.data.slug,
      title: project.data.title,
      description: project.data.description,

      keywords: project.data.keywords,

      skills: project.data.skills,

      aiTopics: project.data.aiTopics,

      expertise: project.data.expertise,

      intent: project.data.intent,

      repository: project.data.repository,
    })),
  });
}
