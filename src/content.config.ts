import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro:schema";

const availableLanguages = ["en", "es"];

const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    title: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    company: z.string(),
    role: z.string(),
    description: z.string(),
  }),
});

const community = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/community" }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    organization: z.string(),
    description: z.string(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { about, projects, experience, community, faq };
