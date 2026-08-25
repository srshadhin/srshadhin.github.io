export type Principle = {
  title: string;
  description: string;
};

// "How I Think About Systems" — personal engineering principles, not generic quotes.
export const principles: Principle[] = [
  {
    title: "Keep the source of truth clear",
    description: "Choose where authoritative state lives and avoid unnecessary duplication.",
  },
  {
    title: "Prefer asynchronous when work doesn't need to block the request",
    description: "Use queues and workers when appropriate — not everything belongs inline.",
  },
  {
    title: "Design for failure",
    description:
      "Retries, idempotency, timeouts, dead-letter handling and observability are part of the architecture, not an afterthought.",
  },
  {
    title: "Optimize after understanding the bottleneck",
    description: "Measure first. Avoid premature optimization in either direction.",
  },
  {
    title: "Simple systems are easier to operate",
    description: "Don't introduce infrastructure merely because it's fashionable.",
  },
];
