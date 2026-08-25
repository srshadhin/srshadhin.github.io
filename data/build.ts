export type BuildCard = {
  title: string;
  description: string;
  tags: string[];
};

// "What I Build" — replaces a generic skills list with the categories of
// systems work this covers.
export const whatIBuild: BuildCard[] = [
  {
    title: "Transaction Systems",
    description:
      "Payment flows, merchant systems, settlement workflows and transaction processing.",
    tags: ["Payments", "Settlement", "Merchant Onboarding"],
  },
  {
    title: "Backend Platforms",
    description: "Scalable APIs and services using Python, Go and microservice architectures.",
    tags: ["Django", "FastAPI", "Go", "Microservices"],
  },
  {
    title: "Distributed Systems",
    description:
      "Queues, workers, asynchronous processing, caching and event-driven workflows.",
    tags: ["RabbitMQ", "Kafka", "Celery", "Redis"],
  },
  {
    title: "Data Systems",
    description: "PostgreSQL, Redis, Elasticsearch, Typesense and data-processing pipelines.",
    tags: ["PostgreSQL", "Elasticsearch", "Typesense"],
  },
  {
    title: "Engineering Infrastructure",
    description:
      "Docker, Kubernetes, observability, deployment workflows and reliability-focused architecture.",
    tags: ["Docker", "Kubernetes", "Observability"],
  },
];
