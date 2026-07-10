// src/lib/projects.ts

import { getCollection } from "astro:content";
import { projects as projectsMeta } from "../data/projects";

export async function getProjects(locale: string) {
  const entries = await getCollection("projects", (e) => e.data.locale === locale);
  return projectsMeta.map((meta) => ({
    ...meta,
    ...entries.find((e) => e.data.slug === meta.slug)?.data,
  }));
}

export async function getFeaturedProjects(locale: string) {
  return (await getProjects(locale)).filter((p) => p.featured).slice(0, 3);
}
