import candidateTracker from "$lib/assets/candidate_tracker.webp";
import greaseTraps from "$lib/assets/grease_traps.webp";
import riftCompanion from "$lib/assets/rift_companion.webp";
import hoops from "$lib/assets/hoops_prod.webp";

interface Project {
  image: string;
  name: string;
  link?: string;
  description: string;
  note?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    image: candidateTracker,
    name: "Edge Candidate Tracker",
    link: "https://github.com/BrettIRL/candidate-tracker",
    description:
      "Job candidate assessment and tracking system. Designed to handle the unique challenges faced by a field marketing company when hiring en-masse",
    technologies: ["NextJS", "Tailwind", "Drizzle ORM", "PostgresQL"],
  },
  {
    image: greaseTraps,
    name: "Grease Traps",
    link: "https://greasetraps.co.za",
    description:
      "Bespoke website and e-commerce platform created from the ground up to showcase their extensive product range and deliver a seamless shopping experience for customers.",
    technologies: ["Vue", "Laravel", "SCSS", "MySQL"],
  },
  {
    image: riftCompanion,
    name: "Rift Companion",
    description:
      "Companion app for League of Legends: view ranks, match history, statistics, and live game information for multiple profiles.",
    note: "Discontinued due to Riot API Changes.",
    technologies: ["Swift", "Cocoapods"],
  },
  {
    image: hoops,
    name: "Hoops Productions",
    link: "https://hoopsprod.co.za",
    description:
      "Portfolio website developed to showcase the incredible work of a South African film and photo production company.",
    technologies: ["Wordpress", "PHP", "Javascript", "MySQL"],
  },
];
