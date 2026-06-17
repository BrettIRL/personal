import { renderContact } from "./contact";
import { renderExperience } from "./experience";
import { renderAbout } from "./about";
import { renderProjects } from "./projects";
import type { SceneId, SceneMeta } from "./types";

export const SCENES: SceneMeta[] = [
  { id: "about", label: "about", key: "1", render: renderAbout },
  { id: "experience", label: "experience", key: "2", render: renderExperience },
  { id: "projects", label: "projects", key: "3", render: renderProjects },
  { id: "links", label: "links", key: "4", render: renderContact },
];

export const SCENE_KEYS: Record<string, SceneId> = Object.fromEntries(
  SCENES.map((s) => [s.key, s.id]),
);

export * from "./types";
