import { site, person } from "../../data";

export const GET = () =>
  Response.json({
    version: site.version,
    updated: site.updated,

    name: person.name,
    title: person.jobTitle,

    description: person.description,

    resources: {
      person: "/api/person.json",
      projects: "/api/projects.json",
      experience: "/api/experience.json",
      skills: "/api/skills.json",
      organizations: "/api/organizations.json",

      about: "/about",
      resume: "/resume",

      llms: "/llms.txt",
      llmsFull: "/llms-full.md",
    },
  });
