export interface Experience {
  companyName: string;
  logoHref: string;
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
    companyName: "Wonder",
    logoHref: "/images/wonder.png",
    roles: [
      {
        title: "Senior Software Engineer II",
        department: "Culinary Technology",
        timeline: "June 2022 - Present",
        details: [
          "Led development for an application that managed kitchen tasks and operations to scale Wonder's culinary manufacturing process and capture feedback to validate their R&D formulas.",
        ],
      },
      {
        title: "Senior Software Engineer I",
        department: "Culinary Technology",
        timeline: "October 2020 - June 2022",
        details: [
          "Led front-end development for a tier 1 web application and implemented large features that improved the efficiency and accuracy of our food preparation process.",
          "Architected and developed a constraint-based design system containing shared React components and platform-agnostic design tokens.",
          "Created a front-end template repo and published internal NPM packages that encouraged uniform best practices and design patterns across our 8 application teams.",
        ],
      },
    ],
  },
  {
    companyName: "HealCo",
    logoHref: "/images/healco.png",
    roles: [
      {
        title: "Senior Software Engineer",
        department: "Consumer Web",
        timeline: "October 2020 - June 2022 ・ Freelance",
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
    logoHref: "/images/walmart.png",
    roles: [
      {
        title: "Software Engineer III",
        department: "Intelligent Retail Lab",
        timeline: "March 2018 - October 2020",
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
    logoHref: "/images/jet.png",
    roles: [
      {
        title: "Software Engineering Intern",
        department: "Order Management",
        timeline: "January 2017 - December 2017",
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
    logoHref: "/images/bae.png",
    roles: [
      {
        title: "Technical Intern II",
        department: "Electronic Systems",
        timeline: "January 2016 - August 2016",
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