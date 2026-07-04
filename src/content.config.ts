import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const availableLanguages = ["en", "es"]

const about = defineCollection({
  schema: z.object({
    locale: z.enum(availableLanguages),
    title: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const experience = defineCollection({
  schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    company: z.string(),
    role: z.string(),
    description: z.string(),
  }),
});

const community = defineCollection({
  schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    organization: z.string(),
    description: z.string(),
  }),
});

const faq = defineCollection({
  schema: z.object({
    locale: z.enum(availableLanguages),
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  about,
  projects,
  experience,
  community,
  faq,
};
