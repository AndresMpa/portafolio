// src/lib/experience.ts
import { getCollection } from "astro:content";
import { experience as experienceMeta } from "../data/experience";

export async function getExperience(locale: string) {
  const entries = await getCollection("experience", (e) => e.data.locale === locale);
  return experienceMeta.map((meta) => ({
    ...meta,
    ...entries.find((e) => e.data.slug === meta.slug)?.data,
  }));
}
