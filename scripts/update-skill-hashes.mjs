// scripts/update-skill-hashes.mjs
// Run before build (see package.json "prebuild"). Keeps the sha256 digests
// in public/.well-known/agent-skills-index.json honest — if llms-full.md or
// the CV changes, the hash updates automatically instead of going stale.

import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const INDEX_PATH = "public/.well-known/agent-skills-index.json";

const FILES_BY_URI_SUFFIX = {
  "/llms-full.md": "public/llms-full.md",
  "/AndresMpa_CV.pdf": "public/AndresMpa_CV.pdf",
};

function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

const index = JSON.parse(readFileSync(INDEX_PATH, "utf-8"));

for (const skill of index.skills) {
  if (!skill.uri) continue;
  const match = Object.entries(FILES_BY_URI_SUFFIX).find(([suffix]) =>
    skill.uri.endsWith(suffix)
  );
  if (match) {
    const [, filePath] = match;
    skill.sha256 = sha256(filePath);
  }
}

writeFileSync(INDEX_PATH, `${JSON.stringify(index, null, 2)}\n`, "utf-8");
console.log("agent-skills-index.json hashes refreshed.");
