export type TimelineEntry = {
  company: string;
  companyNote?: string;
  role: string;
  period: string;
  location: string;
  focus: string;
  technologies: string[];
  current?: boolean;
};

// Career progression — kept concise and factual. Edit freely as roles change.
export const timeline: TimelineEntry[] = [
  {
    company: "TechnoNext Software Ltd.",
    companyNote: "A concern of US-Bangla Group",
    role: "Senior Software Engineer",
    period: "Apr 2025 — Present",
    location: "Dhaka, Bangladesh",
    focus:
      "Vendor integrations, a centralized async retry mechanism, and Redis-optimized geospatial location queries.",
    technologies: ["Python", "Redis", "RabbitMQ", "PostgreSQL", "Docker"],
    current: true,
  },
  {
    company: "Upay — UCB Fintech Company Ltd.",
    role: "Software Engineer",
    period: "Nov 2021 — Mar 2025",
    location: "Dhaka, Bangladesh",
    focus:
      "QR-based merchant payments, settlement-cycle workflows, and micro-merchant onboarding.",
    technologies: ["Django REST Framework", "PostgreSQL", "Redis", "Celery"],
  },
  {
    company: "Evaly Ltd.",
    role: "Backend Software Engineer",
    period: "Jan 2021 — Oct 2021",
    location: "Dhaka, Bangladesh",
    focus:
      "Order-processing reliability for eFood, and backend microservices for the eJobs platform.",
    technologies: ["Python", "Django", "Microservices"],
  },
  {
    company: "Leads Corporation Limited",
    role: "Software Engineer",
    period: "Aug 2018 — Jan 2021",
    location: "Dhaka, Bangladesh",
    focus: "Chatbot and NLP-based banking solutions integrated across social platforms.",
    technologies: ["Python", "NLP", "Chatbot Platforms"],
  },
];
