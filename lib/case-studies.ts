export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  technologies: string[];
  pilotSignals: { label: string; value: string }[];
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
    pilotSignals: [
      { label: "Policy validation", value: "YAML-driven" },
      { label: "Transit latency", value: "<120ms" },
      { label: "Routing pipeline", value: "3 Tiers" },
    ],
    summary:
      "Sovereign LLM verification layer for real-time input/output compliance, PII screening, and policy enforcement in controlled environments.",
    challenge:
      "Regulated architectures require strict local data residency controls, citation-backed claims, and custom compliance check rules to safely deploy generative models.",
    solution:
      "VeriShield functions as a FastAPI-powered policy check proxy, executing YAML-configured policy graphs, semantic database scans, and fallback review agents at the integration boundary.",
    outcomes: [
      "Configured YAML policy enforcement graphs and successfully verified them in a controlled private sandbox",
      "Structured local compliance logging and audit trails to align with data minimization principles",
      "Tested a three-tier routing workflow against simulated input injection attempts using regex, semantic embeddings, and agent logic",
    ],
    demoHref: "/live-demo",
  },
  {
    slug: "aetherai-training",
    title: "AetherAI Workforce Training",
    subtitle: "Role-Based AI Adoption & Upskilling Platform",
    industry: "Enterprise",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Recharts"],
    pilotSignals: [
      { label: "Safety protocols", value: "Core covered" },
      { label: "Dilemma cases", value: "12 scenarios" },
      { label: "Reporting boards", value: "Recharts active" },
    ],
    summary:
      "Interactive role-based AI literacy, safety practice tracking, and manager enablement dashboards.",
    challenge:
      "Organizations adopt AI tools rapidly but lack formal safety pathways, upskilling benchmarks, role-based usage guidelines, or management visibility.",
    solution:
      "AetherAI maps role-specific learning paths, safety blocks, instant feedback progress quizzes, and controlled prompt testing laboratories.",
    outcomes: [
      "Designed and simulated safety dilemma scenarios in user testing pilots",
      "Built dynamic usage tracking charts and manager dashboards with Recharts rendering",
      "Validated an interactive prompt testing lab with structured user prompt exercises",
    ],
    demoHref: "/products/aetherai-training",
  },
  {
    slug: "mediflow",
    title: "MediFlow",
    subtitle: "Patient Onboarding & Clinic Operations Blueprint",
    industry: "Healthcare",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Celery", "Redis", "MinIO/S3"],
    pilotSignals: [
      { label: "Object storage", value: "Local MinIO" },
      { label: "Asynchronous task", value: "Celery queues" },
      { label: "AI intake layer", value: "Grounded logic" },
    ],
    summary:
      "AI-assisted patient onboarding and operational clinic workflow coordination.",
    challenge:
      "Healthcare operations require reducing admin burden during patient intake, document routing, and scheduling, while maintaining strict local storage boundaries.",
    solution:
      "MediFlow handles digital intake forms, controlled local document storage using MinIO arrays, and asynchronous background worker task queues.",
    outcomes: [
      "Structured secure intake uploads and validated local storage configurations with MinIO object stores",
      "Engineered background operations using Celery and Redis to process incoming registrations asynchronously",
      "Designed multi-role dashboards for patient registration, administrative staff reviews, and clinic operations oversight",
    ],
    demoHref: "/products/mediflow",
  },
  {
    slug: "govgig",
    title: "GovGig AI",
    subtitle: "Federal Contracting Compliance Intelligence",
    industry: "Government",
    technologies: ["FastAPI", "LangGraph", "pgvector", "RRF", "AWS", "Terraform"],
    pilotSignals: [
      { label: "Retrieval style", value: "RRF hybrid" },
      { label: "Clauses index", value: "Procurement rules" },
      { label: "Agent paths", value: "Query expansion" },
    ],
    summary:
      "Federal contracting compliance RAG assistant for dense regulation search and automated contract letter drafting.",
    challenge:
      "Contracting and proposal teams spend hours searching dense guidelines and drafting compliance-first letters, REAs, and responses.",
    solution:
      "GovGig AI runs dense vector and keyword hybrid search with Reciprocal Rank Fusion, query expansion routers, and drafting helper agents.",
    outcomes: [
      "Evaluated automated draft letter generators against typical proposal formats in a pilot sandbox",
      "Tested Reciprocal Rank Fusion hybrid search performance against standard compliance guidelines",
      "Validated service endpoints, access control logging, and background query latency profiles",
    ],
    demoHref: "/products/govgig",
  },
  {
    slug: "yojana-ai",
    title: "Yojana-AI",
    subtitle: "Government Scheme Discovery & Eligibility RAG",
    industry: "Government",
    technologies: ["FastAPI", "LangGraph", "Qdrant", "Ollama", "Groq", "Docker", "AWS"],
    pilotSignals: [
      { label: "Scheme database", value: "2,153 indexed" },
      { label: "Vector database", value: "Qdrant" },
      { label: "Self-healing RAG", value: "Corrective loop" },
    ],
    summary:
      "Government scheme matching and eligibility RAG architecture leveraging corrective loops and metadata-filtered retrieval.",
    challenge:
      "Citizens and support networks struggle to match individuals with complex, fragmented public welfare eligibility criteria and application guides.",
    solution:
      "Yojana-AI routes eligibility queries using structured logic, Qdrant metadata vector searches, and self-corrective retrieval loops.",
    outcomes: [
      "Validated self-corrective RAG retrieval loops against simulated eligibility profiles",
      "Indexed and triaged user query relevance against a comprehensive public scheme corpus",
      "Designed a hybrid inference model to fallback on local Ollama hosting to preserve responsiveness",
    ],
    demoHref: "/products/yojana-ai",
  },
  {
    slug: "claimlens",
    title: "ClaimLens AI",
    subtitle: "Multi-Modal Claims Fraud Intelligence",
    industry: "Insurance",
    technologies: ["FastAPI", "CatBoost", "OpenCV", "Neo4j", "Groq", "Streamlit"],
    pilotSignals: [
      { label: "Explainable signals", value: "145 ML features" },
      { label: "Relational maps", value: "Neo4j graphs" },
      { label: "Classification", value: "CatBoost model" },
    ],
    summary:
      "Multi-modal insurance claims risk scoring, document scans, and relational network graph triaging.",
    challenge:
      "Claims review adjusters need explainable risk scoring to quickly flag document discrepancies and coordinated claim anomalies.",
    solution:
      "ClaimLens integrates a CatBoost machine learning model, OpenCV document analysis, Neo4j network graphs, and plain-language explainability logs.",
    outcomes: [
      "Evaluated explainable claim scoring models on synthetic test files using CatBoost classification",
      "Simulated document scan verification for typical structured form anomalies using OpenCV libraries",
      "Mapped and analyzed simulated claims coordination rings inside a local relational graph database",
    ],
    demoHref: "/products/claimlens",
  },
  {
    slug: "desidesk-rag",
    title: "DesiDesk RAG",
    subtitle: "Multilingual Support & FAQ Assistant",
    industry: "Enterprise",
    technologies: ["FastAPI", "ChromaDB", "Redis", "Groq", "SQLite", "Prometheus"],
    pilotSignals: [
      { label: "Memory caching", value: "Redis active" },
      { label: "Session store", value: "SQLite cache" },
      { label: "Grounding search", value: "ChromaDB" },
    ],
    summary:
      "Bilingual support FAQ assistant microservice with conversation memory and high-speed caching filters.",
    challenge:
      "Enterprise helpdesks require highly reliable, low-latency, bilingual support answers while preserving context across dialogue steps.",
    solution:
      "DesiDesk deploys multilingual embeddings, ChromaDB vector matching, SQLite session storage, and high-speed Redis caching.",
    outcomes: [
      "Monitored caching ratios and metrics under simulated support load profiles",
      "Preserved conversational context and threads successfully across active sessions",
      "Validated bilingual routing accuracy against template knowledge base articles",
    ],
    demoHref: "/products/desidesk-rag",
  },
  {
    slug: "flowsight",
    title: "FlowSight AI",
    subtitle: "Shipment Delay Prediction & Explainability",
    industry: "Supply Chain",
    technologies: ["CatBoost", "XGBoost", "LightGBM", "DuckDB", "FastAPI", "Streamlit"],
    pilotSignals: [
      { label: "Development phase", value: "Active" },
      { label: "Feature store", value: "DuckDB backend" },
      { label: "Predictor models", value: "Ensemble ML" },
    ],
    summary:
      "Ensemble ML classifier and feature store to predict and explain logistics delay reasons. (In Active Development).",
    challenge:
      "Supply-chain coordinators require early visibility into shipment delay risk, expected duration, and probable reasons to mitigate operational delays.",
    solution:
      "FlowSight AI utilizes DuckDB feature stores, ensemble machine learning classifiers (CatBoost, XGBoost, LightGBM), and dynamic risk explanation scripts.",
    outcomes: [
      "Constructed and tested delay estimation models using logistics dataset matrices",
      "Organized shipping and route features inside a structured DuckDB feature store blueprint",
      "Marked delay reason classification and explainability scripts as an active-development pilot blueprint",
    ],
    demoHref: "/products/flowsight",
  },
  {
    slug: "ai-readiness-studio",
    title: "AI Readiness Intelligence Studio",
    subtitle: "AI Opportunity Discovery & Roadmap Generator",
    industry: "Enterprise",
    technologies: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Ollama"],
    pilotSignals: [
      { label: "Orchestrator nodes", value: "Stateful Graph" },
      { label: "Export options", value: "PDF/DOCX/PPTX" },
      { label: "Opportunity map", value: "Readiness matrix" },
    ],
    summary:
      "AI opportunity discovery, technical feasibility matrices, and 90-day pilot roadmap generators.",
    challenge:
      "Consultants, opportunity leaders, and enterprise transformation stakeholders need to systematically map business documents to clear AI priorities.",
    solution:
      "This studio deploys a stateful multi-agent LangGraph workflow to compile prioritized bottlenecks, technical risk registers, and exportable PPT/PDF reports.",
    outcomes: [
      "Validated a multi-agent opportunity analysis workflow inside a private pilot sandbox",
      "Engineered automated export libraries to generate comprehensive report assets in PDF, DOCX, and PPTX formats",
      "Built and tested interactive opportunity mapping grids with discovery team stakeholders",
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
