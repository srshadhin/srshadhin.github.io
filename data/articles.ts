export type Article = {
  title: string;
  category: string;
  teaser: string;
};

// Engineering Notes — placeholders. No fabricated publish dates, read times or
// external links until real write-ups exist. Replace freely.
export const articles: Article[] = [
  {
    title: "Designing reliable asynchronous workflows",
    category: "Distributed Systems",
    teaser: "Retries, idempotency and dead-letter handling for queue-based processing.",
  },
  {
    title: "PostgreSQL persistence patterns for transactional systems",
    category: "Database",
    teaser: "Keeping a single source of truth clear when caches and services multiply.",
  },
  {
    title: "Redis: caching vs. state management",
    category: "Backend",
    teaser: "Where Redis earns its place, and where it quietly becomes a liability.",
  },
  {
    title: "RabbitMQ retry strategies",
    category: "Distributed Systems",
    teaser: "Centralizing retry logic instead of repeating it per integration.",
  },
  {
    title: "Notes on service boundaries during a monolith split",
    category: "Architecture",
    teaser: "Aligning boundaries with business domains, not technical layers.",
  },
];
