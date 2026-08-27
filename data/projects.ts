export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  context: string;
  summary: string;
  flow: string[];
  tags: string[];
  problem: string;
  constraints: string[];
  architecture: string;
  decisions: string[];
  tradeoffs: string[];
  implementation: string;
  lessons: string[];
  links?: { label: string; href: string }[];
};

// Generalized engineering case studies. No confidential architecture, credentials,
// or internal company data — these describe the class of problem and the reasoning,
// not proprietary implementation details.
export const caseStudies: CaseStudy[] = [
  {
    slug: "merchant-payments-settlement",
    index: "01",
    title: "Merchant Payments & Settlement",
    context: "Fintech · Upay, a UCB Fintech Company · Nov 2021 – Mar 2025",
    summary:
      "QR-based merchant payments, micro-merchant onboarding and settlement-cycle workflows for a nationwide mobile financial services platform.",
    flow: [
      "Merchant",
      "Payment API",
      "Payment Services",
      "Transaction Processing",
      "Queue / Async Workers",
      "Settlement",
      "PostgreSQL / Redis",
    ],
    tags: ["Django REST Framework", "PostgreSQL", "Redis", "Celery", "Payment Gateways"],
    problem:
      "Micro-merchants needed a fast, reliable way to accept digital payments — but every new onboarding path (QR merchants, micro-merchants, personal retail accounts) had been layering its own rules on top of an aging codebase, making each new feature riskier to ship than the last.",
    constraints: [
      "Financial correctness is non-negotiable — a transaction can never be double-settled or silently dropped.",
      "Multiple onboarding paths needed to share logic instead of duplicating merchant-validation rules per type.",
      "Read-heavy verification checks had to stay fast even as merchant volume grew.",
      "Existing legacy code had accumulated enough complexity that small changes carried outsized regression risk.",
    ],
    architecture:
      "A payment API sits in front of a payment-services layer that validates merchant and transaction rules, hands transaction processing off to asynchronous workers for settlement bookkeeping, and treats PostgreSQL as the single source of truth — with Redis introduced only at specific read-heavy paths.",
    decisions: [
      "PostgreSQL remained the source of truth for transaction and settlement state; Redis was added only where low-latency reads mattered — merchant lookups, rate limiting — never as a stand-in for durable state.",
      "Settlement bookkeeping was moved to asynchronous processing so a merchant's payment confirmation didn't have to wait on downstream settlement work.",
      "The three onboarding paths were refactored onto a shared validation and service layer instead of forking logic per merchant type, which is what let a ~30% reduction in code complexity translate into faster delivery rather than more surface area to maintain.",
      "A caching layer was placed deliberately at the read paths most responsible for database load, cutting query volume by roughly half without touching the write path or transaction guarantees.",
    ],
    tradeoffs: [
      "Caching improves latency but introduces a consistency window — caches were scoped to data where slight staleness was acceptable (merchant profile lookups), and never used for balance or settlement state.",
      "A shared onboarding service layer costs more upfront design discipline than a merchant-type-specific shortcut would — that shortcut would have shipped faster once, then reintroduced the duplication problem on the next merchant type.",
    ],
    implementation:
      "The QR payment flow and settlement cycle were rebuilt around the shared service layer, with legacy branches migrated incrementally rather than rewritten wholesale — feature delivery speed increased as the shared layer absorbed more onboarding types over time.",
    lessons: [
      "In payment systems, keeping one clear source of truth pays for itself the first time a cache or downstream service disagrees with it.",
      "Removing duplication in onboarding logic mattered more than optimizing any single onboarding path — it's what made the system easier to extend, not just easier to read.",
    ],
  },
  {
    slug: "vendor-integration-resilience",
    index: "02",
    title: "Vendor Integration & Async Resilience",
    context: "Foodi Express Ltd. · Apr 2025 – Present",
    summary:
      "Fault-tolerant third-party vendor integrations with a centralized retry mechanism, plus Redis-optimized geospatial queries for location-based services.",
    flow: [
      "Vendor API",
      "Integration Service",
      "Message Queue (RabbitMQ)",
      "Retry / Dead-letter Handling",
      "Worker",
      "Downstream Service",
    ],
    tags: ["RabbitMQ", "Redis", "Python", "Redis GEO", "Docker"],
    problem:
      "Third-party vendor APIs fail in ways you don't control — timeouts, rate limits, intermittent outages — and a location-based service was slowing down as read/write volume on its geospatial queries grew, while a zone-wise offer module for resell products had become hard to scale and maintain.",
    constraints: [
      "Vendor APIs aren't owned, so retries have to be safe and idempotent, not just repeated.",
      "Message loss during a vendor outage wasn't acceptable — every request needed an auditable retry path.",
      "Geospatial lookups had to stay fast as location volume grew, without standing up a separate geospatial datastore.",
      "The offer module needed to scale without becoming harder to reason about.",
    ],
    architecture:
      "Vendor calls flow through an integration service into RabbitMQ, where workers apply backoff and centralized retry logic before handing off to downstream services — decoupling vendor instability from the rest of the system.",
    decisions: [
      "Instead of ad hoc retry logic scattered across each integration, a centralized retry mechanism was built once and reused, so message loss during vendor instability became the exception rather than something every integration had to solve on its own.",
      "Redis's native GEO commands replaced slower general-purpose queries for location matching, reducing read/write latency without introducing a separate geospatial system.",
      "The zone-wise offer module was redesigned around clearer zone boundaries and retrieval paths rather than special-cased logic, trading short-term migration effort for materially faster offer retrieval and easier maintenance.",
    ],
    tradeoffs: [
      "Centralizing retries adds a shared dependency that every integration now relies on — accepted because the alternative, each integration handling its own retries, was already causing message loss.",
      "Leaning on Redis GEO ties location queries to Redis's data model; that trade was worth it because the latency win mattered more than storage flexibility for this access pattern.",
    ],
    implementation:
      "The retry layer sits between the integration service and RabbitMQ consumers, tracking attempt counts and routing exhausted messages to a dead-letter path for inspection rather than dropping them silently.",
    lessons: [
      "Fault tolerance for third-party integrations is worth designing once, centrally — repeating it per integration is exactly where message loss creeps back in.",
      "A purpose-built data structure, used where the access pattern is narrow and well understood, can outperform a general-purpose query by a wide margin.",
    ],
  },
  {
    slug: "marketplace-service-backend",
    index: "03",
    title: "Marketplace & Service Backend",
    context: "Evaly Ltd. · Jan 2021 – Oct 2021",
    summary:
      "Backend microservices for an order-processing food-delivery platform (eFood) and a job-search service (eJobs), built during a shift toward service-oriented architecture.",
    flow: ["Client", "API", "Order / Job Service", "Microservices", "Database"],
    tags: ["Python", "Django", "Microservices", "PostgreSQL"],
    problem:
      "Order processing on the food-delivery side needed to be smoother and more predictable, while the job-search side needed better relevance and a way to notify candidates about openings — all while the platform was moving from a monolith toward microservices.",
    constraints: [
      "Order correctness had to hold up under real-world delivery variability.",
      "Splitting a monolith into services meant defining clear boundaries without breaking existing flows mid-migration.",
      "Job search needed relevance, not just a larger result set.",
    ],
    architecture:
      "Client requests reach domain-specific services (order service, job service) through a shared API layer, with each service progressively decoupled from the original monolith's database and logic.",
    decisions: [
      "Contributed to decomposing a monolith into backend microservices, aligning service boundaries with business domains — orders, jobs — rather than technical layers.",
      "Introduced a job-alert module as an asynchronous notification path so alerting didn't add latency to the core search flow.",
      "Refined job search to prioritize relevance over exhaustive matching.",
    ],
    tradeoffs: [
      "Decomposing into services mid-flight costs coordination overhead; it was justified because the monolith's coupling was already limiting how fast order-processing improvements could ship.",
      "Asynchronous alerts trade immediacy for reliability — acceptable for job alerts, but order status stayed synchronous, where immediacy mattered more.",
    ],
    implementation:
      "Order-processing improvements shipped incrementally alongside the service decomposition, rather than waiting for a full rewrite — reliability gains came from removing friction across the pipeline, not a single optimization.",
    lessons: [
      "Smoother order processing came less from one fix and more from steadily removing coupling across the order pipeline as services were carved out.",
      "Async notifications are a reliability tool, not a default — order status needed the opposite guarantee.",
    ],
  },
  {
    slug: "public-market-bd",
    index: "04",
    title: "Public Market BD — Payments-Enabled Marketplace",
    context: "Independent project · Django REST Framework",
    summary:
      "A marketplace backend with integrated local payment gateways (SSLCommerz, bKash, Nagad) and asynchronous task processing for everything off the critical path.",
    flow: [
      "Client",
      "DRF API",
      "Payment Gateway (SSL / bKash / Nagad)",
      "Celery Task Queue",
      "Redis",
      "PostgreSQL",
    ],
    tags: ["Django REST Framework", "Celery", "Redis", "Payment Gateway Integration"],
    problem:
      "A marketplace needed to accept multiple local payment methods and keep checkout reliable, even though each gateway has its own integration quirks, callback formats and failure modes.",
    constraints: [
      "A transaction can't be marked successful before the gateway actually confirms it.",
      "Each gateway needs its own callback handling without leaking gateway-specific logic into checkout.",
      "Task processing shouldn't block the API response.",
    ],
    architecture:
      "The DRF API issues orders and hands off to a common payment interface; gateway callbacks confirm payment asynchronously, with Celery and Redis handling everything that doesn't need to happen inline.",
    decisions: [
      "Integrated three distinct payment gateways behind a common internal interface, so checkout logic didn't need to know which gateway was in use.",
      "Used Celery with Redis as the broker to move gateway confirmation and post-payment processing off the request/response cycle.",
    ],
    tradeoffs: [
      "A unified gateway interface adds up-front abstraction that looks unnecessary for one integration — it paid off once a third gateway needed to be added without touching checkout logic.",
      "Async post-payment processing means accepting eventual consistency for anything that isn't the payment confirmation itself.",
    ],
    implementation:
      "Each gateway's callback verifies signatures and payment state before the internal interface marks an order paid, with Celery workers handling notifications and downstream bookkeeping.",
    lessons: [
      "The value of a common gateway interface only becomes obvious the second or third time you add a payment method — for a single integration, it can look like premature abstraction.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
