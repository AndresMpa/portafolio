import { skills } from "../../data/skills";
import { site } from "../../data/site";

export const GET = () =>
  Response.json({
    version: site.version,
    updated: site.updated,
    data: skills,
  });
