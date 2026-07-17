// src/lib/writing.ts

import { getCollection } from "astro:content";

export type UpdateItem = {
  type: "writing" | "event";
  title: string;
  date: Date;
  href: string;
  place?: string;
  meta: Record<string, unknown>;
};

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

// TODO: cuando exista la colección "talks", reemplaza este stub por
// getCollection("talks", (e) => e.data.locale === locale)
async function getEvents(_locale: string): Promise<UpdateItem[]> {
  return [];
}

export async function getUpdates(locale: string): Promise<UpdateItem[]> {
  const writing = await getAllWriting(locale);
  const events = await getEvents(locale);

  const writingItems: UpdateItem[] = writing.map((post) => ({
    type: "writing",
    title: post.data.title,
    date: post.data.date,
    href: `/beyond-code/${locale}/${post.data.slug}`,
    meta: post.data,
  }));

  return [...writingItems, ...events].sort(
    (a, b) => b.date.valueOf() - a.date.valueOf()
  );
}

export function getNextUpcoming(items: UpdateItem[]): UpdateItem | null {
  const now = new Date();
  const future = items
    .filter((i) => i.date.valueOf() > now.valueOf())
    .sort((a, b) => a.date.valueOf() - b.date.valueOf());
  return future[0] ?? null;
}
