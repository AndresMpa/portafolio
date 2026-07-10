// data/education.ts
export interface EducationMeta {
  slug: string;
  startDate: string;
  endDate: string | null;
}

export const education: EducationMeta[] = [
  { slug: "meng-ai", startDate: "2022-01", endDate: null },
  { slug: "eng-software", startDate: "2016-01", endDate: "2021-01" },
  { slug: "tech-software", startDate: "2013-01", endDate: "2016-01" },
];
