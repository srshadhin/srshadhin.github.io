export type Tech = {
  name: string;
  description: string;
};

export type TechGroup = {
  group: string;
  items: Tech[];
};

// Technology constellation — grouped, with short contextual descriptions
// shown on hover/focus instead of skill percentages.
export const technologies: TechGroup[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", description: "Primary language for backend services and tooling." },
      { name: "Go", description: "Used for high-performance, concurrent services." },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Django", description: "Batteries-included framework for backend platforms." },
      { name: "DRF", description: "Toolkit for building REST APIs on top of Django." },
      { name: "FastAPI", description: "Async Python framework for typed, high-performance APIs." },
      { name: "REST", description: "Resource-oriented API design style." },
      { name: "gRPC", description: "High-performance RPC framework using Protocol Buffers." },
    ],
  },
  {
    group: "Data",
    items: [
      { name: "PostgreSQL", description: "Relational database used as the source of truth for transactional data." },
      { name: "Redis", description: "In-memory store for caching, rate-limiting and low-latency lookups." },
      { name: "Elasticsearch", description: "Search and analytics engine for full-text and log data." },
      { name: "Typesense", description: "Lightweight, fast engine for instant-search experiences." },
    ],
  },
  {
    group: "Messaging",
    items: [
      { name: "Kafka", description: "Distributed event streaming for high-throughput pipelines." },
      { name: "RabbitMQ", description: "Message broker for asynchronous, queue-based workflows." },
      { name: "Redis Streams", description: "Append-only log structure in Redis for lightweight event streaming." },
      { name: "Celery", description: "Distributed task queue for async and scheduled jobs in Python." },
    ],
  },
  {
    group: "Infrastructure",
    items: [
      { name: "Docker", description: "Containerization for consistent build and deploy environments." },
      { name: "Kubernetes", description: "Container orchestration for scaling and operating services." },
      { name: "AWS S3", description: "Object storage for files, backups and large payloads." },
      { name: "MinIO", description: "Self-hosted, S3-compatible object storage." },
    ],
  },
];
