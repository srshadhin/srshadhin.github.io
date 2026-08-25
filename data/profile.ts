// Central profile configuration.
// Update personal details and external links here — every component reads from this file.

export const profile = {
  name: "Md Shahinur Rahman",
  displayName: "Shahinur Rahman",
  shortName: "Shahinur",
  role: "Backend Engineer",
  positioning: "Backend Engineer · Distributed Systems · APIs & Microservices",
  yearsExperience: "7+",
  location: "Dhaka, Bangladesh",

  tagline: "I build the systems behind digital transactions.",
  supportingLine:
    "Backend Engineer with 7+ years of experience designing APIs, microservices and transaction-driven systems using Python, Go and modern distributed-system technologies.",

  identityStack: ["Python", "Go", "PostgreSQL", "Redis", "Kafka", "Microservices"],

  // Toggle this off if between roles — keeps the hero honest rather than always-on.
  status: {
    active: true,
    label: "Currently building backend systems",
  },

  currentFocus:
    "Vendor integrations, asynchronous resilience and geospatial location services at TechnoNext Software Ltd.",

  about: {
    lede: "I'm a backend engineer who enjoys understanding how complex systems work beneath the surface.",
    body: "My work has largely revolved around APIs, payment systems, microservices, data processing and transaction-heavy platforms — the parts of a product most people never see, but notice immediately when they break.",
    interests: [
      "system architecture",
      "backend engineering",
      "distributed systems",
      "developer tooling",
      "learning new technologies",
    ],
    education: {
      institution: "Daffodil International University",
      degree: "B.Sc. in Computer Science & Engineering",
      period: "Apr 2014 — Oct 2018",
    },
  },

  links: {
    github: "https://github.com/srshadhin",
    linkedin: "https://www.linkedin.com/in/srshadhin/",
    email: "shadhin.int@gmail.com",
  },

  siteUrl: "https://srshadhin.github.io",
} as const;

export type Profile = typeof profile;
