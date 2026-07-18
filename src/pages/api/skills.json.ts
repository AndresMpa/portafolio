// src/pages/api/skills.json.ts

import { site, skills } from "../../data";

export const GET = () =>
  Response.json({
    version: site.version,
    updated: site.updated,
    data: skills,
  });
