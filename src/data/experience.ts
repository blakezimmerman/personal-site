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
        title: "Senior Front End Engineer",
        department: "Ecosystem",
        timeline: "Aug 2023 - Present",
        details: [
          "Founding engineer on Decibel, an onchain perpetual futures DEX on Aptos — took from zero to mainnet in under a year; owned the Next.js trading UI and @decibeltrade/sdk (TypeScript SDK). $4.6B+ cumulative volume, 260K+ users, 59 markets, ~$57M peak TVL in the first ~5 months post-launch.",
          "Architected and shipped Aptos' design system — a library of 30+ React components and utilities that unified UI across Aptos Labs' product suite and materially accelerated front-end delivery across teams.",
          "Built Geomi from scratch (Aptos' developer platform) — a Next.js app for full-node API keys, no-code indexing, and gas station (sponsored transactions), backed by a tRPC BFF I designed to unify multiple upstream microservices behind a single front-end API; onboarded additional engineers to own new feature areas as scope grew.",
          "Built Graffio from zero to one, a real-time collaborative drawing app backed by onchain state — architected and shipped the front-end for the one-day anniversary event that drew 330K users with zero major outages.",
          'Wrote and contributed a suite of headless components to @aptos-labs/wallet-adapter-react, making it easy for internal and ecosystem projects to integrate the Aptos wallet adapter with their own custom styling; authored the public "Build Your Own Wallet Selector" guide.',
        ],
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
          "Established the frontend engineering standard by creating a reusable application template and publishing shared internal NPM packages adopted across eight application teams.",
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
          "Led migration of the production JavaScript application to TypeScript, improving maintainability and reducing runtime defects.",
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
