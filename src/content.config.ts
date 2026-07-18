// src/content.config.ts

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const availableLanguages = ["en", "es"];

const about = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/about",
    generateId: ({ entry }) => entry.replace(/\.md$/, "")
  }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    whoami: z.object({
      role: z.string(),
      location: z.string(),
      focus: z.string(),
      passion: z.string(),
    }),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.replace(/\.md$/, "")
  }),
  schema: z.object({
    locale: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).default([]),
    projectType: z.string().optional(),
    status: z.string().optional(),
    featured: z.boolean().default(false),
    repository: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    aiTopics: z.array(z.string()).default([]),
    expertise: z.array(z.string()).default([]),
    intent: z.array(z.string()).default([]),
  }),
});

const experience = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/experience",
    generateId: ({ entry }) => entry.replace(/\.md$/, "")
  }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    role: z.string(),
    description: z.string(),
    company: z.string(),
  }),
});

const education = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/education",
    generateId: ({ entry }) => entry.replace(/\.md$/, "")
  }),
schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    degree: z.string(),
    tags: z.array(z.string()),
  }),
});

const community = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/community",
    generateId: ({ entry }) => entry.replace(/\.md$/, "")
  }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    company: z.string(),
    role: z.string(),
    description: z.string(),
  }),
});

const talks = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/talks",
    generateId: ({ entry }) => entry.replace(/\.md$/, "")
  }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    slug: z.string(),
    title: z.string(),
    kind: z.enum(["Blog", "Prize", "Paper", "Technical Writing", "Guide", "Talk"]).default("Talk"),
    topics: z.array(z.string()),
    date: z.date(),
    description: z.string(),
    authors: z.array(z.string()),
    event: z.string().optional(),
    attendees: z.number().optional(),
    references: z.array(z.object({
      label: z.string(),
      url: z.url(),
    })).optional(),
    keywords: z.array(z.string()).optional(),
    eventType: z.string().optional(),
    featured: z.boolean().optional(),
    location: z.object({
      city: z.string(),
      venue: z.string().optional(),
      country: z.string().optional(),
    }).optional(),
    skills: z.array(z.string()).optional(),
    expertise: z.array(z.string()).optional(),
    intent: z.array(z.string()).optional(),
  }),
});

const faq = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/faq",
    generateId: ({ entry }) => entry.replace(/\.md$/, "")
  }),
  schema: z.object({
    locale: z.enum(availableLanguages),
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { about, projects, experience, community, faq, talks, education };
