import { test } from "node:test";
import assert from "node:assert/strict";
import { projects } from "../src/data/projects.js";
import { projectArtwork } from "../src/data/projectArtwork.js";

test("every project has a distinct topic illustration", () => {
  const ids = projects.map((project) => project.id);
  assert.equal(new Set(ids).size, ids.length, "project IDs must be unique");
  assert.deepEqual(Object.keys(projectArtwork).sort(), [...ids].sort());
  const shapes = projects.map(({ id }) => {
    const artwork = projectArtwork[id];
    assert.ok(artwork.label && artwork.outline && artwork.detail, id);
    return `${artwork.outline}|${artwork.detail}`;
  });
  assert.equal(
    new Set(shapes).size,
    projects.length,
    "each illustration must be different",
  );
});

test("travel agent replaces SOC Analyst in the three featured projects", () => {
  assert.deepEqual(
    projects.filter((project) => project.featured).map((project) => project.id),
    ["travels-whatsapp-ai-agent", "ai-file-assistant", "ai-phishing-guard"],
  );
  assert.ok(projects.some((project) => project.id === "ai-soc-analyst"));
  assert.equal(
    projects[0].repoUrl,
    "https://github.com/Shoaib1515/Travels-WhatsApp-AI-Agent",
  );
});
