// src/lib/writing.ts
import { getCollection } from "astro:content";

const DEFAULT_LOCALE = "en";

export function localizeHref(path: string, locale: string) {
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
}

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

export async function getUpdates(locale: string): Promise<UpdateItem[]> {
  const posts = await getAllWriting(locale);

  return posts.map((post): UpdateItem => ({
    type: post.data.kind === "Talk" ? "event" : "writing",
    title: post.data.title,
    date: post.data.date,
    href: localizeHref(`/beyond-code/${post.data.slug}`, locale),
    place: post.data.location?.city,
    meta: post.data,
  }));
}

export function getNextUpcoming(items: UpdateItem[]): UpdateItem | null {
  const now = new Date();
  const future = items
    .filter((i) => i.date.valueOf() > now.valueOf())
    .sort((a, b) => a.date.valueOf() - b.date.valueOf());
  return future[0] ?? null;
}
