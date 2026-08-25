import { profile } from "./profile";

export type OSSProject = {
  name: string;
  description: string;
  technologies: string[];
  status: "case-study" | "planned";
  href: string;
};

// Manually curated — no fabricated repo stats or stars. "planned" entries are
// explicitly marked as not yet published rather than presented as finished work.
export const ossProjects: OSSProject[] = [
  {
    name: "Public Market BD",
    description:
      "Marketplace backend built with Django REST Framework — integrated local payment gateways and Celery-based async processing.",
    technologies: ["Django REST Framework", "Celery", "Redis"],
    status: "case-study",
    href: "/work/public-market-bd",
  },
  {
    name: "Subscription Management System",
    description:
      "A Go + PostgreSQL service for subscription lifecycles, invoice generation and timezone-aware scheduled billing. Planned open-source write-up — repository link to follow.",
    technologies: ["Go", "PostgreSQL", "GORM"],
    status: "planned",
    href: profile.links.github,
  },
];
