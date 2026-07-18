// src/data/person.ts

export const stats = {
  yearsExperience: 10,
  projectsCount: 20,
  location: "Colombia",
} as const;

export const person = {
  id: "https://andresmpa.netlify.app/#person",

  name: "Andrés M. Prieto",
  alternateName: "AndresMpa",

  url: "https://andresmpa.netlify.app",

  image: "https://andresmpa.netlify.app/og-image.png",

  jobTitle: "Senior Software Engineer",

  description:
    "Senior software engineer specializing in AI infrastructure, GNU/Linux and fullstack development.",

  sameAs: [
    "https://github.com/AndresMpa",
    "https://www.linkedin.com/in/andresmpa/",
    "https://stackoverflow.com/users/15334340",
    "https://andresprieto-25116.medium.com/",
  ],

  knowsAbout: [
    "Artificial Intelligence",
    "LLMs",
    "Agent Engineering",
    "Python",
    "JavaScript",
    "TypeScript",
    "GNU/Linux",
    "Docker",
    "AWS",
    "Vue.js",
    "Astro",
    "Software Architecture",
    "Developer Experience",
    "RAG"
  ]
} as const;
