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
    slug: "yojana-ai",
    title: "YOJANA-AI — Multilingual Citizen RAG",
    subtitle: "Multi-agent Self-RAG + Corrective RAG on LangGraph DAG",
    industry: "Government / Public Services",
    technologies: ["FastAPI", "LangGraph", "Qdrant", "Ollama", "Groq", "AWS", "Terraform"],
    pilotSignals: [
      { label: "Answer quality without human-in-loop", value: "85%" },
      { label: "Full AWS operational cost", value: "$20-25/mo" },
      { label: "Avg latency (no correction loops)", value: "1.8-2.5s" },
    ],
    summary:
      "Intent-aware retrieval with metadata filtering eliminates irrelevant scheme contamination. Self-RAG + Corrective RAG loops auto-correct poor retrievals. Binary LLM-as-judge is cheaper and more consistent than score-based thresholds. Local Ollama handles 60% of LLM calls for free.",
    challenge:
      "2,153 government schemes with mixed English/Hindi content, varying query intents (discovery vs eligibility), and no tolerance for hallucinated eligibility advice.",
    solution:
      "Intent-aware retrieval with metadata filtering eliminates irrelevant scheme contamination. Self-RAG + Corrective RAG loops auto-correct poor retrievals. Binary LLM-as-judge is cheaper and more consistent than score-based thresholds. Local Ollama handles 60% of LLM calls for free.",
    outcomes: [
      "LangGraph 5-node DAG: Intent → Retrieve → Judge → [Self-RAG / Corrective RAG] → Generate",
      "Qdrant vector store with metadata-filtered retrieval (intent-aware top_k 5–10)",
      "Hybrid inference: Ollama local (classify/refine) + Groq cloud (generate/judge)",
      "BGE-M3 multilingual embeddings (1024-dim, open-source, $0 cost)",
      "AWS ECS Fargate auto-scale via Terraform IaC",
    ],
    demoHref: "/#book-slot",
  },
  {
    slug: "claimlens",
    title: "CLAIMLENS AI — Insurance Fraud Multi-Modal Pipeline",
    subtitle: "Multi-modal fusion: ML + CV + Graph + LLM verdict aggregation",
    industry: "Insurance / BFSI",
    technologies: ["FastAPI", "CatBoost", "OpenCV", "Neo4j", "Groq", "Streamlit"],
    pilotSignals: [
      { label: "ML inference latency (standalone)", value: "~80ms" },
      { label: "Full document analysis speed", value: "1-2s" },
      { label: "End-to-end latency per claim", value: "<2s" },
    ],
    summary:
      "Four independent engines (ML score, document authenticity, network graph, LLM explanation) provide defense-in-depth. Semantic aggregation produces a unified verdict. LLM explanations are customer-friendly, not just technical — supporting both STP automation and human escalation.",
    challenge:
      "Single-signal fraud rules miss sophisticated fraud networks and document forgeries. Investigators need explainable, auditable verdicts — not just probability scores.",
    solution:
      "Four independent engines (ML score, document authenticity, network graph, LLM explanation) provide defense-in-depth. Semantic aggregation produces a unified verdict. LLM explanations are customer-friendly, not just technical — supporting both STP automation and human escalation.",
    outcomes: [
      "CatBoost classifier: 145 features including text embeddings and behavioral signals",
      "ResNet50 + Error Level Analysis for document forgery detection",
      "Neo4j graph analytics for fraud network detection across shared documents",
      "Groq LLaMA for auditable English/Hinglish explanation generation",
      "FastAPI + Streamlit UI, <2s end-to-end with caching",
    ],
    demoHref: "/#book-slot",
  },
  {
    slug: "verishield",
    title: "VERISHIELD — LLM Safety Control Tower",
    subtitle: "3-tier deterministic safety layer with LangGraph audit agent",
    industry: "BFSI / Healthcare / Regulated Enterprise",
    technologies: ["FastAPI", "LangGraph", "LangChain", "Prometheus", "Helm", "Kubernetes"],
    pilotSignals: [
      { label: "Production-hardened release", value: "v4.1.0-LTS" },
      { label: "Adversarial CI bypass prevention", value: "Severity" },
      { label: "Air-gapped local boundary support", value: "100% Secure" },
    ],
    summary:
      "3-tier escalation routes 95%+ of requests through fast Tier 1 in milliseconds, escalating only ambiguous inputs to deep LangGraph reasoning. Redacted-by-default persistence and ADR documentation satisfy compliance evidence requirements.",
    challenge:
      "Regulated enterprises (banks, insurers) need deterministic, auditable LLM output control with India DPDP 2023 compliance and zero-trust posture — not just probabilistic moderation.",
    solution:
      "3-tier escalation routes 95%+ of requests through fast Tier 1 in milliseconds, escalating only ambiguous inputs to deep LangGraph reasoning. Redacted-by-default persistence and ADR documentation satisfy compliance evidence requirements.",
    outcomes: [
      "Tier 1: Regex/pattern checks (<5ms) — DPDP 2023 PII detection (Aadhaar, PAN, UPI)",
      "Tier 2: Embedding-based semantic signals for adversarial prompt detection",
      "Tier 3: LangGraph multi-step audit agent for complex policy reasoning",
      "Zero-trust auth: x-api-key + Bearer JWT middleware on all protected routes",
      "Helm chart + Kubernetes HPA for production deployment",
    ],
    demoHref: "/live-demo",
  },
  {
    slug: "desidesk-rag",
    title: "DESIDESK RAG — Multilingual Support Microservice",
    subtitle: "LangGraph conditional routing with Redis cache + SQLite session memory",
    industry: "E-commerce / Customer Support",
    technologies: ["FastAPI", "LangGraph", "ChromaDB", "Redis", "SQLite", "Groq", "Prometheus"],
    pilotSignals: [
      { label: "Production testing cache hit rate", value: "40-60%" },
      { label: "Response latency on cache hits", value: "<50ms" },
      { label: "Single instance throughput", value: "50 req/s" },
    ],
    summary:
      "Redis cache eliminates redundant LLM calls for frequent queries. Confidence-based routing ensures low-quality retrievals escalate to full LLM generation rather than returning poor answers.",
    challenge:
      "Customer queries in English and Hindi require context-aware, low-latency responses without burning LLM budget on repeated questions.",
    solution:
      "Redis cache eliminates redundant LLM calls for frequent queries. Confidence-based routing ensures low-quality retrievals escalate to full LLM generation rather than returning poor answers.",
    outcomes: [
      "LangGraph pipeline: Language Detection → Redis Cache Check → ChromaDB Retrieval → Confidence Router → Groq LLM",
      "Redis caching for <50ms repeated query response",
      "SQLite session store for multi-turn conversation context (5-turn window)",
      "Prometheus /metrics endpoint for production monitoring from day one",
      "Confidence threshold routing (0.3) — low-confidence queries bypass cache directly to LLM",
    ],
    demoHref: "/#book-slot",
  },
  {
    slug: "ai-readiness-studio",
    title: "AI READINESS INTELLIGENCE STUDIO — Consulting Discovery Platform",
    subtitle: "9-node stateful LangGraph multi-agent with human-in-loop approval",
    industry: "Consulting / Enterprise Transformation",
    technologies: ["FastAPI", "LangGraph", "Next.js", "PostgreSQL", "Ollama", "Terraform", "GCP"],
    pilotSignals: [
      { label: "Discovery-to-deliverable time", value: "1 Session" },
      { label: "Export formats compiled", value: "PDF/Word/PPT" },
      { label: "Ollama fallback connectivity", value: "Offline" },
    ],
    summary:
      "9 specialized agents divide discovery, analysis, and reporting into discrete, reviewable steps. Human Review Mode preserves consultant judgment before approval. One-click export produces client-ready PDF/Word/PowerPoint instantly.",
    challenge:
      "Consulting teams spend weeks manually conducting AI readiness assessments and producing formatted client deliverables. The process is inconsistent and doesn't scale.",
    solution:
      "9 specialized agents divide discovery, analysis, and reporting into discrete, reviewable steps. Human Review Mode preserves consultant judgment before approval. One-click export produces client-ready PDF/Word/PowerPoint instantly.",
    outcomes: [
      "9 specialized LangGraph agents: Discovery → Bottleneck → Opportunity → Priority → Readiness → Risk → Pilot → Roadmap → Report",
      "LLM adaptive routing: Groq cloud primary + Ollama local fallback (offline-capable)",
      "Dual DB: PostgreSQL + pgvector (production) with SQLite + in-memory fallback (dev)",
      "PDF, DOCX (Word), PPTX (PowerPoint) exporter pipeline",
      "GCP Terraform deployment: Compute Engine VM + GCS bucket for model persistence",
    ],
    demoHref: "/#book-slot",
  },
  {
    slug: "flowsight",
    title: "FLOWSIGHT AI — Supply Chain Delay Prediction",
    subtitle: "3-model ML ensemble with DuckDB feature store + vendor enrichment",
    industry: "Logistics / Supply Chain",
    technologies: ["FastAPI", "CatBoost", "XGBoost", "LightGBM", "DuckDB", "Groq", "Streamlit", "Plotly"],
    pilotSignals: [
      { label: "Binary delay classification accuracy", value: "84.7%" },
      { label: "Delay duration regression MAE", value: "1.24 days" },
      { label: "Accuracy lift from vendor metrics", value: "+3.2%" },
    ],
    summary:
      "Ensemble of gradient boosting models (not neural networks) dramatically outperforms transformers on tabular supply chain data. Vendor enrichment layer adds domain context that raw features miss. LLM explanations make predictions actionable for non-technical logistics managers.",
    challenge:
      "Transformer and neural network approaches failed on 15k tabular records (61% accuracy, severe overfitting). Needed interpretable predictions with business-readable explanations.",
    solution:
      "Ensemble of gradient boosting models (not neural networks) dramatically outperforms transformers on tabular supply chain data. Vendor enrichment layer adds domain context that raw features miss. LLM explanations make predictions actionable for non-technical logistics managers.",
    outcomes: [
      "CatBoost + XGBoost + LightGBM ensemble (binary, regression, multi-class)",
      "DuckDB embedded feature store for low-latency feature lookups",
      "Vendor reliability + route enrichment layers (50 vendors, 2,449 routes)",
      "Groq LLaMA plain-English delay explanation generation",
      "Streamlit + Plotly dashboard with FastAPI backend",
    ],
    demoHref: "/#book-slot",
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
