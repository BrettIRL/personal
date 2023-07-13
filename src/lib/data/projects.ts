import greaseTraps from "$lib/assets/grease_traps.webp";
import offerzen from "$lib/assets/offerzen.webp";
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
    image: greaseTraps,
    name: "Grease Traps",
    link: "https://greasetraps.co.za",
    description:
      "Bespoke website and e-commerce platform created from the ground up to showcase their extensive product range and deliver a seamless shopping experience for customers.",
    technologies: ["Vue", "Laravel", "SCSS", "MySQL"],
  },
  {
    image: offerzen,
    name: "Offerzen Make",
    description:
      "Marketing site and landing page for Offerzen's Make service, connecting companies to contract developers.",
    note: "Service since discontinued.",
    technologies: ["Ember", "Javascript", "SCSS", "Postgre"],
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
