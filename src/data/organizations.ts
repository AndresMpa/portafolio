// src/data/organizations.ts

export interface Organization {
  id: string;
  name: string;
  url: string;
  logo?: string;
  description: string;

  sameAs?: string[];

  role?: string;
}

export const organizations: Organization[] = [
  {
    id: "dailybot",
    name: "DailyBot",
    url: "https://www.dailybot.com",
    description:
      "AI-powered workplace automation platform.",

    role: "Senior Software Engineer",

    sameAs: [
      "https://www.linkedin.com/company/dailybot"
    ]
  },

  {
    id: "ubuntu-colombia",
    name: "Ubuntu Colombia",
    url: "https://ubuntu-co.com",
    description:
      "Official Ubuntu LoCo community for Colombia.",

    role: "Project Development Manager",

    sameAs: [
      "https://github.com/ubuntu-co"
    ]
  },

  {
    id: "forest",
    name: "Forest Software Community",
    url: "https://forestcommunity.org",
    description:
      "Open-source software community promoting collaborative development.",

    role: "Co-Founder"
  },

  {
    id: "delphi",
    name: "Delphi",

    url: "https://www.delphihq.com",

    description:
      "Software engineering consultancy.",

    role: "Software Engineer"
  },

  {
    id: "pulsatrix",

    name: "Pulsatrix",

    url: "https://pulsatrix.co",

    description:
      "Blockchain software company.",

    role: "Blockchain Developer"
  }
];
