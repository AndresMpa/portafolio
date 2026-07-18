// src/pages/api/knowledge.json.ts

import { site, person } from "../../data";

export const GET = () =>
  Response.json({
    version: site.version,
    updated: site.updated,

    name: person.name,
    title: person.jobTitle,

    description: person.description,

    resources: {
      projects: "/api/projects.json",
      experience: "/api/experience.json",
      skills: "/api/skills.json",

      about: "/about",
      resume: "/resume",
      faq: "/faq",

      llms: "/llms.txt",
      llmsFull: "/llms-full.md",
    },
  });
