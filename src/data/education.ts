export interface Education {
  school: string;
  logoHref: string;
  degree: string;
  field: string;
  timeline: string;
  extracurriculars: string[];
}

export const educationItems: Education[] = [
  {
    school: "Stevens Institute of Technology",
    logoHref: "/images/stevens",
    degree: "Bachelors of Engineering",
    field: "Software Engineering",
    timeline: "Aug 2014 - May 2019 ・ Co-op Program",
    extracurriculars: [
      "President and Co-Founder of Software Engineering Club",
      "Technology Director for Duckhacks Hackathon",
      "Alpha Phi Omega Service Fraternity",
    ],
  },
];
