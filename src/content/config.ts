import { defineCollection, z } from "astro:content";

const about = defineCollection({
  schema: z.object({
    locale: z.enum(["en", "es"]),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  about,
};
