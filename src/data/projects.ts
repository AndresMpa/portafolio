export interface Project {
  slug: string;

  name: string;
  description: string;

  repository?: string;
  website?: string;

  image: string;

  technologies: string[];

  license?: string;

  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "lyra",
    name: "Lyra",
    description:
      "AI-powered Linux desktop assistant written in Python.",

    repository: "https://github.com/lyra-ai-assistant",

    image: "/projects/lyra.png",

    technologies: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Bash"
    ],

    license: "MIT",

    featured: true
  },

  {
    slug: "dotfiles",

    name: "Dotfiles",

    description:
      "Linux desktop configuration and automation.",

    repository: "https://github.com/AndresMpa/dotfiles",

    image: "/projects/dotfiles.png",

    technologies: [
      "Shell"
    ],

    featured: true
  },

  {
    slug: "writinglab",

    name: "WritingLab",

    description:
      "Educational platform that helps teachers improve writing instruction.",

    repository:
      "https://github.com/AndresMpa/writing-lab",

    image: "/projects/WritingLab.png",

    technologies: [
      "TypeScript"
    ],

    featured: true
  }
];
