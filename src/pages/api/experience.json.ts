import { experience } from "../../data/experience";
import { site } from "../../data/site";

export const GET = () =>
  Response.json({
    version: site.version,
    updated: site.updated,
    data: experience,
  });
