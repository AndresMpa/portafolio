export interface EducationMeta {
  slug: string;
  institution: string;
  url: string;
  year: string;
  icon: "chip" | "compass" | "layers";
}

export const education: EducationMeta[] = [
  { slug: "meng-ai", institution: "Universidad Tecnologica de Pereira", url: "https://ingenierias.utp.edu.co/maestria-ingenieria-en-sistemas-y-computacion/en/home/", year: "2025", icon: "chip" },
  { slug: "eng-software", institution: "Universidad Tecnologica de Pereira", url: "https://ingenierias.utp.edu.co/ingenieria-en-sistemas/", year: "2023", icon: "compass" },
  { slug: "tech-software", institution: "Universidad Tecnologica de Pereira", url: "https://utp.edu.co", year: "2021", icon: "layers" },
];
