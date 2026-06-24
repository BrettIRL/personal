export type ProjectImageKey =
  | "personal"
  | "candidateTracker"
  | "greaseTraps"
  | "riftCompanion";

export interface Project {
  imageKey: ProjectImageKey;
  name: string;
  link?: string;
  description: string;
  note?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    imageKey: "personal",
    name: "Personal Website, MCP Server, and TUI",
    link: "https://cocking.dev",
    description:
      "My personal website alonside some fun I had creating an MCP server for my professional portfolio (mcp.cocking.dev) and a TUI that can be accessed vs SSH `ssh cli.cocking.dev`.",
    technologies: ["Astro", "TypeScript", "Tailwind", "MCP", "OpenTUI"],
  },
  {
    imageKey: "candidateTracker",
    name: "Edge Candidate Tracker",
    link: "https://github.com/BrettIRL/candidate-tracker",
    description:
      "Job candidate assessment and tracking system. Designed to handle the unique challenges faced by a field marketing company when hiring en-masse",
    technologies: ["NextJS", "Tailwind", "Drizzle ORM", "PostgresQL"],
  },
  {
    imageKey: "greaseTraps",
    name: "Grease Traps",
    link: "https://greasetraps.co.za",
    description:
      "Bespoke website and e-commerce platform created from the ground up to showcase their extensive product range and deliver a seamless shopping experience for customers.",
    technologies: ["Vue", "Laravel", "SCSS", "MySQL"],
  },
  {
    imageKey: "riftCompanion",
    name: "Rift Companion",
    description:
      "Companion app for League of Legends: view ranks, match history, statistics, and live game information for multiple profiles. Achieved over 10,000 users within two days of release.",
    note: "Discontinued due to Riot API Changes.",
    technologies: ["Swift", "Node.js", "Express", "Redis"],
  },
];
