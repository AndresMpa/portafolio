interface HeaderBtnProps {
  icon: any;
  alt: string;
}

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  includeProjects?: boolean;
  includeOrganizations?: boolean;
  keywords?: string[];
  project?: any;
}

interface DockRouteProps {
  name: string;
  ref: string;
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

interface ProjectProps {
  description: ProjectDescriptionProps;
  link: ProjectLinkProps;
}

interface ReferenceProps {
  icon: any;
  link: string;
  alt: string;
  width?: number;
  useSvg?: boolean;
  useAlt?: boolean;
  styledClass?: string;
  underline?: boolean;
}

interface TableItemProps {
  type: "chip" | "reference" | "title";
  ref: boolean;
  bolder: boolean;
  context: string;
}

interface TableHeadersProps {
  headers: string[];
  entries: Array<TableItemProps[]>;
}

interface TimelineProps {
  year: string;
  company: string;
  title: string;
  description: string;
  topics: string;
}

interface HomeComponentsProps {
  order: number;
  id: string;
}

export type {
  HeaderBtnProps,
  SEOProps,
  DockRouteProps,
  ProjectProps,
  ProjectDescriptionProps,
  ProjectLinkProps,
  ReferenceProps,
  TableItemProps,
  TableHeadersProps,
  TimelineProps,
  HomeComponentsProps,
};
