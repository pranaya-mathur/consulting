export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  demoHref: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "verishield",
    title: "VeriShield / Sovereign-AI",
    subtitle: "Policy-Driven LLM Guardrails & Verification Layer",
    industry: "Enterprise",
    technologies: ["FastAPI", "LangGraph", "policy YAML", "Docker", "Helm", "Ollama"],
    metrics: [
      { label: "YAML policies", value: "14 tests" },
      { label: "Edge latency", value: "<120ms" },
      { label: "Detection Tiers", value: "3 routing nodes" },
    ],
    summary:
      "Sovereign LLM verification layer for real-time input/output compliance, PII screening, and policy enforcement in controlled environments.",
    challenge:
      "Designed for multi-branch regulated architectures requiring strict local data residency, citation-backed claims, and custom compliance guard packs.",
    solution:
      "VeriShield sits as a FastAPI proxy, enforcing YAML policy graphs, semantic database lookups, and LangGraph fallback check agents at the edge.",
    outcomes: [
      "YAML-based policy enforcement graphs validated inside a simulated GCP sandbox",
      "Full DPDP-aligned local audit logs generated dynamically per request API load",
      "Three-tier routing tested against prompt-injection sets using regex, embeddings, and agents",
    ],
    demoHref: "/live-demo",
  },
  {
    slug: "aetherai-training",
    title: "AetherAI Workforce Training",
    subtitle: "Role-Based AI Adoption & Upskilling Platform",
    industry: "Enterprise",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Recharts"],
    metrics: [
      { label: "Safety modules", value: "100% mandatory" },
      { label: "Dilemma cases", value: "12 scenarios" },
      { label: "Manager reports", value: "Recharts active" },
    ],
    summary:
      "Interactive role-based AI literacy, safety practice tracking, and manager enablement dashboards.",
    challenge:
      "Designed for organizations adopting AI tools ad-hoc without formal safety guidelines, training tracking, or team productivity metrics.",
    solution:
      "AetherAI structures role-specific learning paths, safety blocks, instant feedback quizzes, and prompt sandboxes powered by Supabase.",
    outcomes: [
      "Interactive safety dilemma scenarios validated in mock trial user groups",
      "Manager usage tracking dashboards successfully rendered using Recharts dynamic charts",
      "Interactive prompt sandbox laboratory tested with simulated customer workflows",
    ],
    demoHref: "/products/aetherai-training",
  },
  {
    slug: "mediflow",
    title: "MediFlow",
    subtitle: "Patient Onboarding & Clinic Operations Blueprint",
    industry: "Healthcare",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Celery", "Redis", "MinIO/S3"],
    metrics: [
      { label: "MinIO files", value: "S3 compatible" },
      { label: "Background tasks", value: "Celery & Redis" },
      { label: "AI agents", value: "LangGraph / Groq" },
    ],
    summary:
      "AI-assisted patient onboarding and operational clinic workflow coordination.",
    challenge:
      "Healthcare-ready workflow patterns require reducing administrative burden during patient intake, document handling, and multi-role operations.",
    solution:
      "MediFlow structures patient intake questionnaires, controlled document storage via MinIO, and Celery asynchronous background tasks.",
    outcomes: [
      "Secure PDF handling validated in local MinIO arrays with controlled document storage patterns",
      "Background worker operations structured using Celery and Redis event queues",
      "Multi-role dashboards de-risked for patients, operational staff, and clinic administrators",
    ],
    demoHref: "/products/mediflow",
  },
  {
    slug: "govgig",
    title: "GovGig AI",
    subtitle: "Federal Contracting Compliance Intelligence",
    industry: "Government",
    technologies: ["FastAPI", "LangGraph", "pgvector", "RRF", "AWS", "Terraform"],
    metrics: [
      { label: "Search pipeline", value: "RRF hybrid" },
      { label: "Regulation corpora", value: "FAR/DFARS/EM" },
      { label: "Routing agents", value: "LangGraph" },
    ],
    summary:
      "Federal contracting compliance RAG assistant for dense regulation search and automated contract letter drafting.",
    challenge:
      "Contracting, proposal, and compliance teams need fast, grounded search across FAR, DFARS, EM 385-1-1 guidelines, clauses, and RFIs.",
    solution:
      "GovGig AI runs dense vector + keyword search with Reciprocal Rank Fusion, query expansion, and LangGraph document drafting.",
    outcomes: [
      "REA and RFI draft generators tested on mock contracting proposal templates",
      "RRF hybrid search validated on EM 385-1-1 safety regulation databases",
      "FastAPI backend rate-limiting, JWT authentication, and WebSocket telemetry verified",
    ],
    demoHref: "/products/govgig",
  },
  {
    slug: "yojana-ai",
    title: "Yojana-AI",
    subtitle: "Government Scheme Discovery & Eligibility RAG",
    industry: "Government",
    technologies: ["FastAPI", "LangGraph", "Qdrant", "Ollama", "Groq", "Docker", "AWS"],
    metrics: [
      { label: "Indexed schemes", value: "2,153 active" },
      { label: "Semantic chunks", value: "10,812 units" },
      { label: "Vector database", value: "Qdrant" },
    ],
    summary:
      "Government scheme matching and eligibility RAG architecture leveraging corrective loops and metadata-filtered retrieval.",
    challenge:
      "Citizens and service networks struggle to discover and match eligible welfare schemes across highly fragmented official documents.",
    solution:
      "Yojana-AI routes queries using LangGraph, Qdrant metadata filters, local Ollama, and Corrective RAG (CRAG) self-healing retrieval loops.",
    outcomes: [
      "Corrective RAG self-healing loop validated against mock citizen eligibility queries",
      "High-frequency matching tested on 2,153 indexed schemes and 10,812 semantic chunks",
      "Local-inference Ollama fallback successfully de-risked cloud latency during peak mock queries",
    ],
    demoHref: "/products/yojana-ai",
  },
  {
    slug: "claimlens",
    title: "ClaimLens AI",
    subtitle: "Multi-Modal Claims Fraud Intelligence",
    industry: "Insurance",
    technologies: ["FastAPI", "CatBoost", "OpenCV", "Neo4j", "Groq", "Streamlit"],
    metrics: [
      { label: "ML Features", value: "145 features" },
      { label: "Network graph", value: "Neo4j rings" },
      { label: "Verdict pipeline", value: "4 engines" },
    ],
    summary:
      "Multi-modal insurance fraud classification, document forgery CV scanning, and Neo4j network graph coordination.",
    challenge:
      "Insurance operators need explainable, multi-modal risk scoring to spot claim forgery and organized fraud coordination rings.",
    solution:
      "ClaimLens merges a CatBoost ML model, OpenCV document verification, Neo4j graph databases, and Groq plain-English explanation logs.",
    outcomes: [
      "ML fraud scoring tested on 145 explainable claim features using CatBoost classification",
      "PAN and Aadhaar document forgery scans simulated on clinical/identity files",
      "Organized fraud network coordination rings successfully mapped inside a Docker Neo4j graph",
    ],
    demoHref: "/products/claimlens",
  },
  {
    slug: "desidesk-rag",
    title: "DesiDesk RAG",
    subtitle: "Multilingual Support & FAQ Assistant",
    industry: "Enterprise",
    technologies: ["FastAPI", "LangGraph", "ChromaDB", "Redis", "Groq", "SQLite", "Prometheus"],
    metrics: [
      { label: "Caching", value: "Redis active" },
      { label: "Vector search", value: "ChromaDB" },
      { label: "Memory", value: "SQLite session" },
    ],
    summary:
      "Bilingual support FAQ assistant microservice with conversation memory and high-speed caching filters.",
    challenge:
      "Enterprise support pipelines require low-latency, bilingual FAQ answers in English and Hindi while preserving context.",
    solution:
      "DesiDesk structures English/Hindi embeddings, ChromaDB vector matching, SQLite session storage, and Redis caching microservices.",
    outcomes: [
      "Redis cache stats and Prometheus metric endpoints verified under simulated ticket load",
      "Conversational memory context successfully preserved across SQLite session instances",
      "Bilingual conditional routing de-risked on template customer support wikis",
    ],
    demoHref: "/products/desidesk-rag",
  },
  {
    slug: "flowsight",
    title: "FlowSight AI",
    subtitle: "Shipment Delay Prediction & Explainability",
    industry: "Supply Chain",
    technologies: ["CatBoost", "XGBoost", "LightGBM", "DuckDB", "FastAPI", "Streamlit"],
    metrics: [
      { label: "Binary accuracy", value: "84.7% (dev)" },
      { label: "Regression error", value: "1.24 MAE (dev)" },
      { label: "Reason classifier", value: "78.2% (dev)" },
    ],
    summary:
      "Ensemble ML classifier and DuckDB feature store to predict and explain logistics delay reasons. (In Active Development).",
    challenge:
      "Supply-chain coordinators require early visibility into shipment delay risk, expected duration, and probable reasons.",
    solution:
      "FlowSight AI uses DuckDB, CatBoost, XGBoost, and LightGBM ensemble models to process routes and generate plain-English summaries.",
    outcomes: [
      "Delay estimation algorithms tested on historical shipment route files",
      "DuckDB route features aggregated successfully in Streamlit dashboard prototypes",
      "Delay reasons classification marked as an in-development reference blueprint",
    ],
    demoHref: "/products/flowsight",
  },
  {
    slug: "ai-readiness-studio",
    title: "AI Readiness Intelligence Studio",
    subtitle: "AI Opportunity Discovery & Roadmap Generator",
    industry: "Enterprise",
    technologies: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Ollama"],
    metrics: [
      { label: "LangGraph nodes", value: "9 stateful" },
      { label: "Primary model", value: "Groq LLM" },
      { label: "Output formats", value: "PDF/DOCX/PPTX" },
    ],
    summary:
      "AI opportunity discovery, technical feasibility matrices, and 90-day pilot roadmap generators.",
    challenge:
      "Transformation teams, solution architects, and enterprise leaders need to parse business documents into opportunity prioritization roadmaps.",
    solution:
      "This studio deploys a 9-node stateful LangGraph agent team to compile bottleneck lists, prioritization grids, risk registers, and PPT/PDF reports.",
    outcomes: [
      "Multi-agent 9-node roadmap compilation validated inside a simulated GCP cloud perimeter",
      "Full PDF, DOCX, and PPTX report generation libraries successfully de-risked",
      "Interactive opportunity bottleneck dashboards verified by pilot evaluation stakeholders",
    ],
    demoHref: "/products/ai-readiness-studio",
  },
];

export const industries = [
  "All",
  ...Array.from(new Set(caseStudies.map((c) => c.industry))).sort(),
 ] as const;

export const technologies = [
  "All",
  ...Array.from(
    new Set(caseStudies.flatMap((c) => c.technologies)),
  ).sort(),
] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const productIds = caseStudies.map((c) => c.slug);
