import { site, experience } from "../../data";

export const GET = () =>
  Response.json({
    version: site.version,
    updated: site.updated,
    data: experience,
  });
