// lib/education.ts
import { getCollection } from "astro:content";
import { education as educationMeta } from "../data/education";

export async function getEducation(locale: string) {
  const entries = await getCollection("education", (e) => e.data.locale === locale);
  return educationMeta.map((meta) => ({
    ...meta,
    ...entries.find((e) => e.data.slug === meta.slug)?.data,
  }));
}
