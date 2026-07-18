import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { CollectionEntry } from "astro:content";
import type { UpdateItem } from "../lib/talks";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  includeProjects?: boolean;
  includeOrganizations?: boolean;
  keywords?: string[];
  project?: CollectionEntry<"projects">;
}

interface ProjectDescriptionProps {
  title: string;
  context: string;
  authors?: { user: string; link: string }[];
  url?: string;
  flip?: boolean;
}

interface ProjectLinkProps {
  slug: string;
  image: string;
  topics: string;
  alt?: string;
  flip?: boolean;
}

interface ReferenceProps {
  icon: ImageMetadata;
  link: string;
  alt: string;
  width?: number;
  useSvg?: boolean;
  useAlt?: boolean;
  styledClass?: string;
  underline?: boolean;
}

interface HomeComponentsProps {
  order: number;
  id: string;
}

interface TalkContentProps {
  post: CollectionEntry<"talks">;
  Content: AstroComponentFactory;
}

interface TermTitleProps {
  order: number;
  title: string;
}

interface DownloadCVProps {
  buttonLabel: string;
}

interface TalksListProps {
  items: UpdateItem[];
  locale: string;
}

interface CommunityUpcomingProps {
  next: UpdateItem | null;
  locale: string;
}

interface TalkJsonLdProps {
  talk: CollectionEntry<"talks">;
}

interface WebPageJsonLdProps {
  title: string;
  description: string;
  canonical: string;
}

interface Crumb {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: Crumb[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQJsonLdProps {
  items: FAQItem[];
}

interface ExperienceEntry {
  role: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description?: string;
  stack?: string[];
}

interface ExperienceListProps {
  items: ExperienceEntry[];
}

interface ProjectJsonLdProps {
  project: CollectionEntry<"projects">;
}

export type {
  SEOProps,
  ProjectDescriptionProps,
  ProjectLinkProps,
  ReferenceProps,
  HomeComponentsProps,
  TalkContentProps,
  TermTitleProps,
  DownloadCVProps,
  TalksListProps,
  CommunityUpcomingProps,
  TalkJsonLdProps,
  WebPageJsonLdProps,
  Crumb,
  BreadcrumbJsonLdProps,
  FAQItem,
  FAQJsonLdProps,
  ExperienceEntry,
  ExperienceListProps,
  ProjectJsonLdProps,
};
