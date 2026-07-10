// src/data/community.ts

export interface CommunityMeta {
  slug: string;
  startDate: string;
  endDate: string | null;
}

export const community: CommunityMeta[] = [
  { slug: "ubuntu-colombia", startDate: "2019-01", endDate: null },
  { slug: "forest", startDate: "2022-01", endDate: null },
  { slug: "flisol", startDate: "2019-01", endDate: null },
];
