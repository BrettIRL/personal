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
    role: "Co-Founder & Lead Full Stack Engineer",
    link: "https://playup.coach",
    description:
      "Lead the end-to-end development process, including design and implementation of the architecture and infrastructure of the product. Design and execution of the product roadmap, prioritized features, and milestones. Ensured high-quality code, efficient workflows and adherence to best practices.",
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
    from: "2012",
    to: "2020",
    company: "Trademark Technology",
    role: "Full Stack Engineer",
    link: "https://trademarktechnology.co.za",
    description:
      "Worked as part of an agency with a range of small and large companies to improve, refine or bring their product ideas to life. Worked on over 30 projects, spanning different industries, technologies and platforms.",
    technologies: [
      "React",
      "Vue",
      "Swift",
      "Laravel",
      "Javascript",
      "Typescript",
      "SCSS",
      "MySQL",
      "Postgres",
    ],
  },
];
