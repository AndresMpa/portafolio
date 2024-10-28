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

export type { TableItemProps, TableHeadersProps };
