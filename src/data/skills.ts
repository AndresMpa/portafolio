// src/data/skills.ts
export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "Bash", level: 70 },
    { name: "SQL", level: 65 },
  ],
  backend: [
    { name: "FastAPI", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Flask", level: 75 },
    { name: "PostgreSQL", level: 75 },
    { name: "Redis", level: 65 },
  ],
  frontend: [
    { name: "Vue.js", level: 80 },
    { name: "Astro", level: 85 },
    { name: "React", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML/CSS", level: 90 },
  ],
  ai: [
    { name: "LLMs", level: 85 },
    { name: "RAG", level: 75 },
    { name: "Agents", level: 80 },
    { name: "MCP", level: 70 },
    { name: "Prompt Engineering", level: 85 },
  ],
  infrastructure: [
    { name: "Docker", level: 80 },
    { name: "Linux", level: 95 },
    { name: "AWS", level: 65 },
    { name: "GitHub Actions", level: 75 },
    { name: "NGINX", level: 60 },
  ],
} as const;
