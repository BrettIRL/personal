import { projects as projectData } from "@personal/data";
import type { Project as SharedProject, ProjectImageKey } from "@personal/data";

import type { ImageMetadata } from "astro";
import candidateTracker from "../../assets/images/candidate_tracker.webp";
import greaseTraps from "../../assets/images/grease_traps.webp";
import riftCompanion from "../../assets/images/rift_companion.webp";
import personal from "../../assets/images/personal.webp";

interface Project extends SharedProject {
  image: ImageMetadata;
}

const images: Record<ProjectImageKey, ImageMetadata> = {
  personal: personal,
  candidateTracker: candidateTracker,
  greaseTraps: greaseTraps,
  riftCompanion: riftCompanion,
};

export const projects: Project[] = projectData.map((p) => ({
  ...p,
  image: images[p.imageKey],
}));
