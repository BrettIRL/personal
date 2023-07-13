interface Job {
  from: string;
  to: string;
  company: string;
  role: string;
  link?: string;
  description: string;
  technologies: string[];
}

export const experience: Job[] = [
  {
    from: "2021",
    to: "present",
    company: "PlayUp",
    role: "Co-Founder & Lead Developer",
    link: "https://playup.coach",
    description:
      "Lead the end-to-end development process, including design and implementation of the architecture and infrastructure of the product. Design and execution of the product roadmap, prioritized features, and milestones. Ensured high-quality code, efficient workflows and adherences to best practises.",
    technologies: [
      "React",
      "Node",
      "SCSS",
      "MongoDB",
      "Javascript",
      "Typescript",
    ],
  },
  {
    from: "2020",
    to: "2021",
    company: "Chaeban Ice Cream",
    role: "Full Stack Engineer",
    link: "https://chaebanicecream.com",
    description:
      "Designed and developed new backend systems to streamline logistics and alleviate staff workload. Enhanced the aesthetics, functionality and UX of the user and staff-facing platforms.",
    technologies: ["React", "Node", "Javascript", "CSS", "Liquid"],
  },
  {
    from: "2016",
    to: "2020",
    company: "Freelance",
    role: "Full Stack Engineer",
    description:
      "Worked with a range of large and small agencies, start-ups and individuals to improve, refine or bring their product ideas to life. Worked on a variety of projects, spanning different industries, utilizing different technolgoies.",
    technologies: [
      "Vue",
      "React",
      "Laravel",
      "PHP",
      "Javascript",
      "Typescript",
      "SCSS",
      "MySQL",
      "Postgres",
    ],
  },
  {
    from: "2012",
    to: "2016",
    company: "Trademark Technology",
    role: "Developer",
    link: "https://trademarktechnology.co.za",
    description:
      "Worked closely with clients to create and maintain professional and functional websites for their needs. Building MVP products and marketing experiences for small businesses.",
    technologies: ["Wordpress", "PHP", "Javascript", "MySQL"],
  },
];
