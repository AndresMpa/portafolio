// src/pages/api/experience.json.ts

import { site, experience } from "../../data";

export const GET = () =>
  Response.json({
    version: site.version,
    updated: site.updated,
    data: experience,
  });
