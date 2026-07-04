import { projects } from "../../data/projects";
import { site } from "../../data/site";

export const GET = () =>
  Response.json({
    version: site.version,
    updated: site.updated,
    data: projects,
  });
