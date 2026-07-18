// src/data/community.ts

interface CommunityMeta {
  slug: string;
  startDate: string;
  endDate: string | null;
}

export const community: CommunityMeta[] = [
  { slug: "ubuntu-colombia", startDate: "2019", endDate: null },
  { slug: "flisol", startDate: "2019", endDate: null },
  { slug: "arch-linux", startDate: "2019", endDate: null },
  { slug: "forest", startDate: "2022", endDate: null },
];
