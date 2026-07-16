// src/lib/writing.ts

import { getCollection } from "astro:content";

export async function getLatestWriting(locale: string, limit = 4) {
  const posts = await getCollection("writing", (e) => e.data.locale === locale);
  return posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, limit);
}

export async function getAllWriting(locale: string) {
  const posts = await getCollection("writing", (e) => e.data.locale === locale);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
