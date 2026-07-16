// src/data/skills.ts
export const skills = {
  languages: [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Python", icon: "python" },
    { name: "Bash", icon: "bash" },
    { name: "SQL", icon: "sql" },
  ],
  backend: [
    { name: "Node.js", icon: "node" },
    { name: "Django", icon: "django" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Redis", icon: "redis" },
  ],
  frontend: [
    { name: "Vue.js", icon: "vuejs" },
    { name: "Astro", icon: "astro" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "HTML/CSS", icon: "html" },
  ],
  ai: [
    { name: "LLMs", icon: "llms" },
    { name: "RAG", icon: "rag" },
    { name: "Agents", icon: "agents" },
    { name: "Multi-Modal", icon: "multimodal" },
    { name: "Prompt Engineering", icon: "prompt" },
  ],
  infrastructure: [
    { name: "Docker", icon: "docker" },
    { name: "Linux", icon: "linux" },
    { name: "AWS", icon: "aws" },
    { name: "GitHub Actions", icon: "ghActions" },
    { name: "NGINX", icon: "nginx" },
  ],
} as const;
