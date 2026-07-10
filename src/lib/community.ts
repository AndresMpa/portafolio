// src/lib/community.ts
import { getCollection } from "astro:content";
import { community as communityMeta } from "../data/community";

export async function getCommunity(locale: string) {
  const entries = await getCollection("community", (e) => e.data.locale === locale);
  return communityMeta.map((meta) => ({
    ...meta,
    ...entries.find((e) => e.data.slug === meta.slug)?.data,
  }));
}
