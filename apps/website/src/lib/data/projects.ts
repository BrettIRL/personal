import { projects as projectData } from "@personal/data";
import type { Project as SharedProject, ProjectImageKey } from "@personal/data";

import type { ImageMetadata } from "astro";
import candidateTracker from "../../assets/images/candidate_tracker.webp";
import greaseTraps from "../../assets/images/grease_traps.webp";
import riftCompanion from "../../assets/images/rift_companion.webp";
import hoops from "../../assets/images/hoops_prod.webp";

interface Project extends SharedProject {
  image: ImageMetadata;
}

const images: Record<ProjectImageKey, ImageMetadata> = {
  candidateTracker: candidateTracker,
  greaseTraps: greaseTraps,
  riftCompanion: riftCompanion,
  hoops: hoops,
};

export const projects: Project[] = projectData.map((p) => ({
  ...p,
  image: images[p.imageKey],
}));
