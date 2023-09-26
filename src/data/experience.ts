import { invertColorsWhenLight } from "../styles/helpers.css";

export interface Experience {
  companyName: string;
  logoHref: string;
  logoClassName?: string;
  roles: ExperienceRole[];
}

export interface ExperienceRole {
  title: string;
  department: string;
  timeline: string;
  details: string[];
}

export const experienceItems: Experience[] = [
  {
    companyName: "Aptos Labs",
    logoHref: "/images/aptos",
    logoClassName: invertColorsWhenLight,
    roles: [
      {
        title: "Front End Engineer",
        department: "Ecosystem",
        timeline: "Aug 2023 - Present",
        details: ["Currently building exciting web3 experiences."],
      },
    ],
  },
  {
    companyName: "Wonder",
    logoHref: "/images/wonder",
    roles: [
      {
        title: "Senior Software Engineer II",
        department: "Culinary Technology",
        timeline: "Jun 2022 - Aug 2023",
        details: [
          "Technical Lead for an application that managed kitchen tasks and operations to scale Wonder's culinary manufacturing process and capture feedback to validate their R&D recipes.",
        ],
      },
      {
        title: "Senior Software Engineer I",
        department: "Culinary Technology",
        timeline: "Oct 2020 - Jun 2022",
        details: [
          "Led front-end development for a tier 1 web application and implemented large features that improved the efficiency and accuracy of our food preparation process.",
          "Architected and developed a constraint-based design system containing shared React components and platform-agnostic design tokens.",
          "Created a front-end template repo and published internal NPM packages that encouraged uniform best practices and design patterns across 8 of our application teams.",
        ],
      },
    ],
  },
  {
    companyName: "HealCo",
    logoHref: "/images/healco",
    roles: [
      {
        title: "Senior Software Engineer",
        department: "Consumer Web",
        timeline: "Oct 2020 - Jun 2022 ・ Freelance",
        details: [
          "Integrated Stripe into the web application to enable payments by ACH debits and credit cards.",
          "Migrated the entire codebase from JavaScript to TypeScript to reduce bugs and improve maintainability.",
          "Consulted on technical design choices and implemented various key features.",
        ],
      },
    ],
  },
  {
    companyName: "Walmart",
    logoHref: "/images/walmart",
    roles: [
      {
        title: "Software Engineer III",
        department: "Intelligent Retail Lab",
        timeline: "Mar 2018 - Oct 2020",
        details: [
          "Implemented, tested, and maintained microservices and web applications to drive innovation at Walmart's in-store AI lab.",
          "Architected a comprehensive constraint-based design system to vastly improve the velocity of all front-end engineers at IRL.",
          "Developed a service to convert real-time RTSP video to HLS and serve it to the web client with only a 3 second delay.",
          "Designed an internal React library for sharing state between browser windows to enable multi-window web application capabilities.",
        ],
      },
    ],
  },
  {
    companyName: "Jet",
    logoHref: "/images/jet",
    roles: [
      {
        title: "Software Engineering Intern",
        department: "Order Management",
        timeline: "Jan 2017 - Dec 2017",
        details: [
          "Built a visualization tool for Jet's internal telemetry logging system using Typescript, React, and D3.",
          "Developed an Angular 4 front-end from the ground up for a new internal tool that shows divergence between Event Store clusters.",
          "Implemented real-time notifications in the catalog management web application using SignalR, RxJS Observables, and F# microservices.",
          "Rewrote the authentication system for the catalog management web application using Node.js and Passport.js.",
          "Built a micro-scale version of the Jet.com website to demonstrate system architecture for new hires (front-end in Angular 2, back-end in Web API 2.2 using F#).",
          "Developed and deployed production level features to customer service, order management, and catalog management web applications.",
        ],
      },
    ],
  },
  {
    companyName: "BAE Systems",
    logoHref: "/images/bae",
    roles: [
      {
        title: "Technical Intern II",
        department: "Electronic Systems",
        timeline: "Jan 2016 - Aug 2016",
        details: [
          "Developed a web-based interface for a codebase health and metrics tool.",
          "Implemented and tested embedded software for Software Defined Radios.",
          "Used scrum and continuous integration to improve projects.",
          "Set up, deployed, and maintained a server cabinet.",
        ],
      },
    ],
  },
];
