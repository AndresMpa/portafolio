// src/data/projects.ts

interface ProjectAuthor {
  user: string;
  link: string;
}

interface ProjectMeta {
  slug: string;
  image: string;
  repository?: string;
  website?: string;
  languages: string[];
  authors?: ProjectAuthor[];
  featured: boolean;
}

export const projects: ProjectMeta[] = [
  {
    slug: "lyra",
    image: "Lyra.png",
    repository: "https://github.com/lyra-ai-assistant",
    website: "https://github.com/lyra-ai-assistant",
    languages: ["AI", "JavaScript", "Python"],
    authors: [
      { user: "AndresMpa", link: "https://github.com/AndresMpa" },
      { user: "xcerock", link: "https://github.com/xcerock" },
    ],
    featured: true,
  },
  {
    slug: "writing-lab",
    image: "WritingLab.png",
    repository: "https://github.com/AndresMpa/writing-lab",
    website: "https://github.com/AndresMpa/writing-lab",
    languages: ["JavaScript", "Vuejs", "PostgresDB"],
    featured: true,
  },
  {
    slug: "dotfiles",
    image: "dotfiles.png",
    repository: "https://github.com/AndresMpa/dotfiles",
    website: "https://github.com/AndresMpa/dotfiles",
    languages: ["GNU/Linux", "Shell", "Dockerfile", "Python", "Lua", "C/C++"],
    featured: true,
  },
  {
    slug: "mu-vim",
    image: "muvim.png",
    repository: "https://github.com/AndresMpa/mu-vim",
    languages: ["GNU/Linux", "Shell", "Dockerfile", "JavaScript", "Lua"],
    featured: false,
  },
  {
    slug: "babylon",
    image: "babylon.jpg",
    repository: "https://github.com/AndresMpa/babylon",
    languages: ["JavaScript", "TypeScript", "HTML", "SCSS", "CSS", "Stylus", "Less"],
    featured: false,
  },
  {
    slug: "poc-driven-development",
    image: "pocdd.png",
    repository: "https://github.com/DailybotHQ/pocdd-skill",
    languages: ["Context Engineering", "Open Agent Skill", "Technical Lead", "AI Engineer", "Agentic Development"],
    authors: [
      { user: "AndresMpa", link: "https://github.com/AndresMpa" },
      { user: "DailybotHQ", link: "https://github.com/DailybotHQ" },
    ],
    featured: false,
  },
  {
    slug: "todo-app",
    image: "todo.png",
    repository: "https://github.com/AndresMpa/todo-app",
    languages: ["JavaScript", "Stylus", "HTML"],
    featured: false,
  },
  {
    slug: "magic-ball-workshop",
    image: "ball.png",
    repository: "https://github.com/AndresMpa/magic-ball-workshop",
    languages: ["JavaScript", "HTML", "CSS", "Web Speech API"],
    featured: false,
  },
  {
    slug: "rock-paper-scissors-spock-lizard",
    image: "game.png",
    repository: "https://github.com/AndresMpa/rock-paper-scissors-spock-lizard",
    languages: ["JavaScript", "SCSS", "HTML"],
    featured: false,
  },
  {
    slug: "euphoria",
    image: "euphoria.jpg",
    repository: "https://github.com/AndresMpa/Euphoria",
    languages: ["POO", "POE", "Python", "Pygame"],
    featured: false,
  },
  {
    slug: "advice-generator-app",
    image: "advice.png",
    repository: "https://github.com/AndresMpa/advice-generator-app",
    languages: ["JavaScript", "Less", "CSS", "HTML"],
    featured: false,
  },
  {
    slug: "nft-card-preview",
    image: "NFT.png",
    repository: "https://github.com/AndresMpa/NFT-card-preview",
    website: "https://andresmpa.github.io/NFT-card-preview/",
    languages: ["SCSS", "HTML"],
    featured: false,
  },
];
