// src/data/experience.ts

export interface ExperienceMeta {
  slug: string;
  company: string;
  startDate: string;
  endDate: string | null;
  stack: string[];
}

export const experience: ExperienceMeta[] = [
  { slug: "dailybot", company: "DailyBot", startDate: "2024-06", endDate: null,
    stack: ["AWS", "GNU/Linux", "Docker", "TypeScript", "Vue.js", "Python", "Django"] },
  { slug: "freelancer-dev", company: "Freelancer", startDate: "2023-01", endDate: null,
    stack: ["React.js", "Vue.js", "TypeScript", "GNU/Linux", "Docker"] },
  { slug: "freelancer-advisor", company: "Freelancer", startDate: "2023-06", endDate: "2023-12",
    stack: ["HTML5", "CSS", "GNU/Linux", "Docker"] },
  { slug: "delphi", company: "Delphi", startDate: "2022-01", endDate: "2023-01",
    stack: ["Django", "Vue.js", "React.js", "Python", "Docker"] },
  { slug: "pulsatrix", company: "Pulsatrix", startDate: "2021-01", endDate: "2022-01",
    stack: ["GNU/Linux", "Node.js", "Blockchain", "Docker", "Bash", "JavaScript"] },
  { slug: "woldev", company: "Woldev SAS", startDate: "2018-01", endDate: "2021-01",
    stack: ["C++", "Bootstrap", "CSS", "HTML", "JavaScript", "GNU/Linux"] },
  { slug: "he-gme", company: "H.E. GME", startDate: "2017-01", endDate: "2018-01",
    stack: ["Custom Software", "Databases", "Desktop Virtualization", "Microsoft Access", "SQL"] },
];
