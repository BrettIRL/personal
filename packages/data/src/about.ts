import type { Link } from "./types";

export type Segment = string | Link;

export type Paragraph = Segment[];

export const about: Paragraph[] = [
  [
    "It all started over a decade ago when I wanted to remove some padding on a web template I had. Little did I know that that simple act of tinkering would unlock a world of coding for me and set me on a journey in software engineering.",
  ],
  [
    "Throughout my career, I've had the opportunity to work with a diverse range of clients and companies, from individuals and small businesses to startups, larger B2B SaaS companies, and a company I co-founded. I've collaborated on projects spanning various industries, from ",
    { label: "film production", url: "https://hoopsprod.co.za" },
    " and ",
    { label: "recruitment", url: "https://offerzen.co.za" },
    " to ",
    { label: "e-commerce", url: "https://chaebanicecream.com" },
    ", ",
    { label: "sport", url: "https://playup.coach" },
    ", and ",
    { label: "fintech", url: "https://pleo.io" },
    ".",
  ],
  [
    "When I'm not working, I'm either on the golf course, following my football team, playing video games or playing around with a new language or framework.",
  ],
];
