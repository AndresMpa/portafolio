interface HeaderBtnProps {
  icon: any;
  alt: string;
}

interface DockRouteProps {
  name: string;
  ref: string;
}

interface ProjectDescriptionProps {
  title: string;
  context: string;
  authors?: {
    link: string;
    user: string;
  }[];
}

interface ProjectLinkProps {
  url: string;
  image: any;
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

export type {
  HeaderBtnProps,
  DockRouteProps,
  ProjectProps,
  ProjectDescriptionProps,
  ProjectLinkProps,
  ReferenceProps,
  TableItemProps,
  TableHeadersProps,
};
