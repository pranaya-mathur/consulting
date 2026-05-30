export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  features: string[];
  industries: string[];
  relatedCaseStudy?: string;
  demoHref: string;
  businessProblem: string;
  pilotValidation: string;
  pilotScope: string;
  maturity: "Production-ready" | "Pilot-ready" | "In active development";
  status: string;
  techStack: string[];
  clientSafeHighlights: string[];
  architecture: {
    pattern: string;
    description: string;
    flow: string[];
    components: string[];
    deploymentOptions: string[];
    governanceControls: string[];
    integrationPoints: string[];
  };
};

export const products: Product[] = [
  {
    id: "verishield",
    name: "VERISHIELD — LLM Guardrail & Verification Gateway",
    tagline: "Production-grade, air-gapped LLM safety for regulated enterprises",
    description: "A deterministic, policy-driven safety layer for regulated enterprises with a 3-tier Control Tower.",
    overview: "A deterministic, policy-driven safety layer with a 3-tier Control Tower: Tier 1 (regex/pattern, <5ms), Tier 2 (embedding-based semantic signals), Tier 3 (LangGraph audit agent for deep reasoning). India DPDP 2023-aware PII detection (Aadhaar, PAN, UPI). Zero-trust API surface with x-api-key / Bearer JWT auth. Redacted-by-default persistence. Optional air-gapped deployment.",
    features: [
      "Tier 1 checks (regex/pattern, <5ms) with India DPDP 2023-aware PII detection",
      "Tier 2 embedding-based semantic signals for prompt injection checks",
      "Tier 3 LangGraph audit agent for deep policy reasoning and verification",
      "Zero-trust API surface with x-api-key / Bearer JWT authentication"
    ],
    industries: ["BFSI", "Healthcare", "Insurance", "Regulated Enterprise"],
    relatedCaseStudy: "verishield",
    demoHref: "/live-demo",
    businessProblem: "LLM outputs in regulated industries (BFSI, healthcare) contain PII leakage, prompt injections, and hallucinated facts with no deterministic enforcement layer.",
    pilotValidation: "Automated red-team harness with adversarial dataset (PII, jailbreaks, prompt injection). Severity-gated CI pipeline blocks high-severity bypasses.",
    pilotScope: "4-week sandboxed pilot validating PII redaction, 3-tier safety checks, and zero-trust authentication gateway integration.",
    status: "v4.1.0-LTS — Production Hardened",
    maturity: "Production-ready",
    techStack: ["FastAPI", "LangGraph", "LangChain", "Prometheus/OTel", "Helm/K8s", "Docker Compose", "Python async", "zero-trust auth middleware"],
    clientSafeHighlights: [
      "3-tier Control Tower architecture",
      "India DPDP 2023-aware PII detection",
      "Redacted-by-default persistence",
      "Air-gapped deployment ready"
    ],
    architecture: {
      pattern: "3-tier deterministic safety layer with LangGraph audit agent",
      description: "A deterministic, policy-driven safety layer with a 3-tier Control Tower: Tier 1 (regex/pattern, <5ms), Tier 2 (embedding-based semantic signals), Tier 3 (LangGraph audit agent for deep reasoning).",
      flow: [
        "Request received by FastAPI auth middleware",
        "Tier 1 regex/pattern scanning checks for PII",
        "Tier 2 semantic classifier detects prompt injection",
        "Tier 3 LangGraph audit agent performs policy reasoning",
        "Request routed safely to upstream LLM API",
        "Response parsed, redacted, and verified",
        "Prometheus/OpenTelemetry records traffic audit"
      ],
      components: [
        "FastAPI verification gateway",
        "Tier 1 PII regex/pattern parser",
        "Tier 2 semantic embedding engine",
        "Tier 3 LangGraph audit agent",
        "Zero-trust auth middleware",
        "Helm & K8s deployment charts"
      ],
      deploymentOptions: [
        "On-premise deployment",
        "Air-gapped secure environment",
        "Private cloud (Helm/K8s)"
      ],
      governanceControls: [
        "India DPDP 2023 PII audit rules",
        "Severity-gated CI blockages",
        "Redacted-by-default persistence",
        "Zero-trust JWT authentication"
      ],
      integrationPoints: [
        "Enterprise LLM APIs",
        "LangChain & LangGraph frameworks",
        "Prometheus & OpenTelemetry tools"
      ]
    }
  },
  {
    id: "aetherail",
    name: "AETHERAIL — Role-Based AI Workforce Training & Adoption Platform",
    tagline: "Enterprise AI literacy with role-specific paths, prompt labs, and manager analytics",
    description: "Next.js 15 SaaS platform for structured role-specific learning pathways, safety modules, and interactive prompt sandboxes.",
    overview: "Next.js 15 SaaS platform with 5 role-specific learning paths, mandatory safety modules, interactive split-screen prompt lab, real-world AI scenario exercises, MCQ quizzes with instant feedback, and a manager-only adoption analytics dashboard.",
    features: [
      "5 role-specific learning paths and mandatory safety modules",
      "Interactive split-screen prompt laboratory and scenario exercises",
      "MCQ quizzes with instant grading and direct feedback",
      "Manager-only adoption analytics dashboard with Recharts"
    ],
    industries: ["Enterprise", "FinTech", "Healthcare", "Government"],
    relatedCaseStudy: "aetherail",
    demoHref: "/#book-slot",
    businessProblem: "Organizations deploy AI tools but employees lack structured, role-aware training, creating inconsistent adoption and compliance risk.",
    pilotValidation: "Role-based progress tracking, prompt evaluation scoring, and manager report generation — all available in under 10 minutes from cold start.",
    pilotScope: "4-week department trial validating learning path enrollment, split-screen prompt sandbox, and manager report analytics.",
    status: "SaaS Platform — Production Ready",
    maturity: "Production-ready",
    techStack: ["Next.js 15 (App Router, Server Actions)", "TypeScript (strict)", "Supabase (Auth + PostgreSQL + Realtime)", "Tailwind CSS", "shadcn/ui", "Recharts", "next-themes"],
    clientSafeHighlights: [
      "5 role-specific pathways",
      "Interactive split-screen prompt lab",
      "Manager adoption dashboard",
      "Zero-setup demo mode"
    ],
    architecture: {
      pattern: "Role-Based AI Enablement Portal",
      description: "Structured learning paths, prompt sandboxes, and quiz milestones to align operational teams with security, compliance, and productivity workflows.",
      flow: [
        "User registers and authenticates via Supabase Auth",
        "User enrolls in specific operational learning path",
        "Completed mandatory safety modules",
        "Practices in interactive split-screen prompt lab",
        "Takes scenario exercises and MCQ tests",
        "Telemetry recorded in PostgreSQL via Server Actions",
        "Managers access real-time Recharts dashboards"
      ],
      components: [
        "Next.js App Router frontend",
        "Supabase Auth & PostgreSQL database",
        "Interactive prompt lab environment",
        "Manager analytics interface",
        "Quiz & testing modules"
      ],
      deploymentOptions: [
        "Enterprise SaaS cloud",
        "Self-hosted container setup",
        "Local developer workspace"
      ],
      governanceControls: [
        "Mandatory safety certifications",
        "Manager usage monitoring",
        "Role-based access controls",
        "Zero-dependency demo mode"
      ],
      integrationPoints: [
        "Supabase Authentication & DB",
        "Internal LMS/HR platforms",
        "Upstream LLM prompt sandboxes"
      ]
    }
  },
  {
    id: "mediflow",
    name: "MEDIFLOW — Patient Intake & Clinic Workflow System",
    tagline: "Full-stack patient onboarding with AI-assisted intake and secure document routing",
    description: "Full-stack clinical patient intake platform featuring multi-role dashboards and secure object storage.",
    overview: "Full-stack platform: Next.js 15 frontend + FastAPI backend + PostgreSQL (SQLAlchemy 2.0 + Alembic migrations) + Celery/Redis background workers. MinIO (S3-compatible) for secure patient document storage. LangGraph + LangChain agents for intelligent intake assistance. Multi-role dashboards (Patient / Staff / Admin).",
    features: [
      "Multi-role dashboards for Patients, Staff, and Administrators",
      "AI-guided patient intake assistance powered by LangGraph and LangChain",
      "Secure document management utilizing MinIO S3-compatible storage",
      "Asynchronous background workflow tasks run by Celery & Redis"
    ],
    industries: ["Healthcare", "Clinics", "Telehealth"],
    relatedCaseStudy: "mediflow",
    demoHref: "/#book-slot",
    businessProblem: "Clinics manage patient registration through paper forms and disconnected tools, causing intake delays, data errors, and compliance gaps with medical records.",
    pilotValidation: "Automated patient intake flow, real-time clinic metrics dashboard, AI-guided intake agent, and background document processing — end-to-end in one containerized stack.",
    pilotScope: "4-week operations pilot validating digital onboarding forms, document upload, and staff queue synchronization.",
    status: "Stable Sandbox Architecture — Pilot Ready",
    maturity: "Pilot-ready",
    techStack: ["Next.js 15", "FastAPI", "PostgreSQL + SQLAlchemy 2.0", "Alembic", "Celery + Redis", "MinIO (S3)", "LangGraph", "LangChain", "Groq", "Radix UI", "TanStack Query v5", "Docker Compose"],
    clientSafeHighlights: [
      "Multi-role secure dashboards",
      "LangGraph intake agent",
      "Celery background processing",
      "MinIO secure storage"
    ],
    architecture: {
      pattern: "Full-stack Patient Intake & Clinic Workflow System",
      description: "Next.js 15 frontend + FastAPI backend + Celery asynchronous background tasks + MinIO secure storage.",
      flow: [
        "Patient initiates onboarding registration form",
        "Intake documents uploaded securely to MinIO",
        "LangGraph intake agent parses and validates fields",
        "Celery background workers process OCR and verification",
        "Patient profile and state saved in PostgreSQL",
        "Clinic staff verifies patient on metrics dashboard"
      ],
      components: [
        "Next.js clinic interface dashboards",
        "FastAPI backend gateway",
        "Celery asynchronous workers",
        "MinIO object storage server",
        "LangGraph intelligent agentic flows"
      ],
      deploymentOptions: [
        "Single-command Docker Compose",
        "Private cloud deployment",
        "On-premise clinic server"
      ],
      governanceControls: [
        "Multi-role RBAC authorization",
        "HIPAA-compliant document storage patterns",
        "Alembic DB migrations and version controls",
        "Staff verification checkpoints"
      ],
      integrationPoints: [
        "MinIO object storage API",
        "PostgreSQL DB",
        "Groq inference API",
        "Redis message queue"
      ]
    }
  },
  {
    id: "govgig",
    name: "GOVGIG AI — Contracting Compliance RAG Assistant",
    tagline: "Legal clause analysis RAG with hybrid retrieval and Indian law domain embeddings",
    description: "Hybrid legal retrieval RAG platform combining dense and sparse search indices and domain-specific embeddings.",
    overview: "Hybrid RAG system combining FAISS (dense) + BM25 (sparse) retrieval with InLegalBERT domain embeddings (trained on Indian legal text). FastAPI backend with Prometheus + Grafana monitoring stack. Source quality metrics per query (Indian Acts, case laws, clause DB). LangGraph + LangChain orchestration. Full Docker Compose deployment with Grafana dashboard included.",
    features: [
      "Hybrid search combining FAISS dense and BM25 sparse indices",
      "InLegalBERT domain-specific embeddings trained on Indian legal text",
      "Query-level source quality metrics mapping Indian Acts and case laws",
      "Prometheus + Grafana monitoring stack for RAG quality and latency tracking"
    ],
    industries: ["Legal", "Government Contracting", "Compliance", "BFSI"],
    relatedCaseStudy: "govgig",
    demoHref: "/#book-slot",
    businessProblem: "Legal teams waste hours manually reviewing contracts and compliance clauses against Indian Acts, case law, and regulatory guidelines without any AI assistance.",
    pilotValidation: "Per-query source quality metrics. Grafana dashboard for RAG retrieval quality, latency trends, and error rates live from day one.",
    pilotScope: "4-week legal team trial validating clause retrieval precision, hybrid search relevancy, and Grafana instrumentation.",
    status: "Stable RAG Engine — Pilot Ready",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "LangChain", "LangGraph", "FAISS", "BM25", "InLegalBERT (HuggingFace)", "Groq (Llama 3.1 / 3.3)", "Prometheus", "Grafana", "Docker Compose"],
    clientSafeHighlights: [
      "Hybrid RRF dense-sparse search",
      "InLegalBERT legal domain embeddings",
      "Per-query source quality metrics",
      "Prometheus + Grafana dashboards"
    ],
    architecture: {
      pattern: "Hybrid Legal retrieval RAG & Observability Stack",
      description: "FastAPI legal RAG server running hybrid FAISS+BM25 with InLegalBERT embeddings, monitored via Prometheus & Grafana.",
      flow: [
        "Contracting query submitted by compliance officer",
        "LangGraph orchestration splits and analyzes intent",
        "FAISS (dense) and BM25 (sparse) pull matched clauses",
        "InLegalBERT embeddings rerank matches for maximum accuracy",
        "Source quality metrics compiled per query source",
        "Groq synthesizes final citation-backed response",
        "Prometheus records latencies and retrieval stats",
        "Grafana renders performance metrics in real-time"
      ],
      components: [
        "FastAPI RAG gateway service",
        "FAISS vector database",
        "BM25 sparse indexer",
        "InLegalBERT embedder model",
        "LangGraph RAG pipeline controller",
        "Prometheus & Grafana monitors"
      ],
      deploymentOptions: [
        "Containerized Docker Compose stack",
        "Private cloud cluster"
      ],
      governanceControls: [
        "Strict legal citation backing",
        "Source quality metric gates",
        "Latency and error tracking",
        "Grounded answer compliance checks"
      ],
      integrationPoints: [
        "Hugging Face models API",
        "Groq inference API",
        "Indian Acts & Case Law databases"
      ]
    }
  },
  {
    id: "yojana-ai",
    name: "YOJANA-AI — Public-Service Scheme Discovery RAG",
    tagline: "Multilingual multi-agent RAG for Indian government scheme discovery with self-correcting retrieval loops",
    description: "Highly optimized, multilingual multi-agent scheme discovery system running self-correcting RAG loops.",
    overview: "LangGraph multi-agent RAG: Intent Agent (Ollama, local, <120ms) → Retrieval Agent (Qdrant, metadata-filtered, intent-aware top_k) → Quality Judge (LLM-as-judge, binary YES/NO) → Self-RAG + Corrective RAG loops → Generation Agent (Groq llama-3.3-70b). BGE-M3 (1024-dim, multilingual) embeddings. 10,812 semantically-chunked scheme chunks. AWS ECS Fargate deployment with Terraform IaC. $20-25/month operational cost.",
    features: [
      "Multi-agent LangGraph system: Intent, Retrieval, Quality Judge, and Generation",
      "Self-RAG and Corrective RAG loops to eliminate retrieval gaps",
      "BGE-M3 1024-dimensional multilingual open-source embeddings",
      "AWS ECS Fargate deployment with auto-scaling via Terraform IaC"
    ],
    industries: ["Government", "Public Services", "NGO", "Citizen Tech"],
    relatedCaseStudy: "yojana-ai",
    demoHref: "/#book-slot",
    businessProblem: "Citizens and frontline workers cannot easily find or verify eligibility for 2,000+ government schemes across languages and ministries.",
    pilotValidation: "85% answer quality without human-in-loop. Self-RAG triggers on <15% of queries. $5/month LLM cost vs $40-50 cloud-only baseline. 1.8-2.5s avg latency (no loops), 3.8-4.5s with Self-RAG.",
    pilotScope: "4-week welfare pilot matching user parameters with scheme metadata across Hindi and English datasets.",
    status: "Production Architecture — Pilot Ready",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "LangGraph", "LangChain", "Qdrant", "BGE-M3 embeddings", "Ollama (deepseek-r1:8b)", "Groq (llama-3.3-70b)", "Terraform", "AWS ECS Fargate", "CloudWatch", "Docker", "Pydantic"],
    clientSafeHighlights: [
      "LangGraph multi-agent DAG",
      "Self-RAG self-correcting loops",
      "BGE-M3 multilingual indexing",
      "Terraform AWS Fargate IaC"
    ],
    architecture: {
      pattern: "Multi-agent Self-RAG + Corrective RAG on LangGraph DAG",
      description: "Highly optimized LangGraph multi-agent pipeline using BGE-M3 embeddings and self-correcting CRAG/Self-RAG loops.",
      flow: [
        "User query parsed by FastAPI RAG endpoint",
        "Intent Agent classifies search intent and language (<120ms)",
        "Retrieval Agent queries Qdrant with metadata filters",
        "Quality Judge evaluates matched scheme relevance (YES/NO)",
        "If NO, loops to self-corrective retrieval/web search",
        "Generation Agent synthesizes output using Groq Llama 3.3",
        "AWS CloudWatch logs request and performance telemetry"
      ],
      components: [
        "Intent Agent (Ollama local model)",
        "Retrieval Agent (Qdrant vector store)",
        "Quality Judge Agent (Groq)",
        "Generation Agent (Groq Llama 3.3)",
        "Self-RAG corrective workflow",
        "Terraform ECS IaC scripts"
      ],
      deploymentOptions: [
        "AWS ECS Fargate autoscaling cluster",
        "Docker Compose local container"
      ],
      governanceControls: [
        "Automated binary quality judge",
        "Metadata query filtering",
        "Strict citation checking",
        "Cost-optimized hybrid routing"
      ],
      integrationPoints: [
        "Qdrant Cloud/Local",
        "Groq & Ollama APIs",
        "AWS ECS Fargate and CloudWatch"
      ]
    }
  },
  {
    id: "claimlens",
    name: "CLAIMLENS AI — Multi-Modal Insurance Claims Risk Pipeline",
    tagline: "Multi-modal fraud detection across ML scoring, computer vision, graph analytics, and LLM explanation",
    description: "Four-engine pipeline combining tabular machine learning, computer vision, graph analytics, and LLM triage.",
    overview: "Four-engine pipeline: (1) ML Engine — CatBoost classifier with 145 features (text embeddings, behavioral patterns, document flags). (2) CV Engine — ResNet50 + Error Level Analysis for document forgery detection (PAN, Aadhaar, licenses). (3) Graph Engine — Neo4j fraud network detection (shared documents, suspicious connections). (4) LLM Engine — Groq-powered natural language verdict explanations in English and Hinglish. Semantic aggregation for unified verdict. <2s end-to-end with caching.",
    features: [
      "ML Engine with CatBoost classifier and 145 explainable claim features",
      "CV Engine with ResNet50 and ELA document forgery detection",
      "Graph Engine with Neo4j to spot shared-identifier fraud rings",
      "LLM Engine with Groq for detailed, natural English and Hinglish explanations"
    ],
    industries: ["Insurance", "BFSI", "Claims Processing"],
    relatedCaseStudy: "claimlens",
    demoHref: "/#book-slot",
    businessProblem: "Insurance fraud detection relies on manual review or single-signal rule engines that miss sophisticated fraud networks and document forgeries.",
    pilotValidation: "Multi-modal verdict with document forgery detection, fraud network graph visualization, and customer-friendly AI explanations. <2s per claim with caching.",
    pilotScope: "4-week insurance sandbox evaluating claims classification scoring, document scans, and risk-network mapping.",
    status: "Production Ready — Complete Pipeline",
    maturity: "Production-ready",
    techStack: ["FastAPI", "CatBoost", "ResNet50", "OpenCV (ELA)", "Neo4j", "Groq (LLaMA)", "Streamlit (UI)", "LangChain", "Docker Compose", "Pydantic", "Python 3.10+"],
    clientSafeHighlights: [
      "4-Engine Risk Pipeline",
      "ResNet50 document forgery analysis",
      "Neo4j fraud network mapping",
      "Hinglish LLM explanations"
    ],
    architecture: {
      pattern: "Multi-modal Fusion Claims Risk Triage",
      description: "Four-engine decision pipeline combining tabular ML, CV forgery detection, graph network mapping, and natural language explanations.",
      flow: [
        "Claim details and uploaded files submitted to FastAPI",
        "CatBoost ML Engine computes claim fraud scores",
        "ResNet50 CV Engine analyzes document Error Level Analysis",
        "Neo4j Graph Engine maps shared addresses, emails, or phone rings",
        "Aggregator consolidates metrics to compile final score",
        "Groq LLM Engine outputs English or Hinglish explanation",
        "Streamlit UI displays visual risk graphs and verdict"
      ],
      components: [
        "CatBoost tabular classifier",
        "ResNet50 CV forgery model",
        "Neo4j graph database",
        "Groq explanation engine",
        "Streamlit adjuster dashboard"
      ],
      deploymentOptions: [
        "Docker Compose local container stack",
        "Private cloud API deployment"
      ],
      governanceControls: [
        "Explainable feature rankings",
        "Audit trail database records",
        "Adversarial document verification",
        "Manual adjuster validation overrides"
      ],
      integrationPoints: [
        "Core claims processing system",
        "Neo4j Graph Server",
        "Groq inference API"
      ]
    }
  },
  {
    id: "desidesk-rag",
    name: "DESIDESK RAG — Multilingual Support RAG Microservice",
    tagline: "Bilingual FAQ automation with Redis caching, SQLite session memory, and confidence-gated LangGraph routing",
    description: "High-throughput support RAG microservice featuring Redis caching and session context persistence.",
    overview: "LangGraph conditional workflow: Language Detection → Cache Check (Redis, <50ms hit) → Semantic Search (ChromaDB + sentence-transformers) → Confidence Router (threshold 0.3) → LLM Generation (Groq llama-3.3-70b) → Response Caching → SQLite Session Persistence. Prometheus metrics at /metrics. 200-400ms uncached, <50ms cached.",
    features: [
      "LangGraph pipeline with language detection and cache checks",
      "High-speed Redis cache layers offering sub-50ms repeat query responses",
      "SQLite session state database maintaining 5-turn message memory",
      "Confidence threshold router to bypass caches for low-match queries"
    ],
    industries: ["E-commerce", "SaaS", "Customer Support", "Fintech"],
    relatedCaseStudy: "desidesk-rag",
    demoHref: "/#book-slot",
    businessProblem: "Customer support teams handling English and Hindi queries lack an intelligent RAG system that maintains conversation context and avoids redundant LLM calls for repeated questions.",
    pilotValidation: "40-60% cache hit rate in production testing. <50ms response on cache hits. 50 req/sec single instance. Prometheus metrics from day one.",
    pilotScope: "4-week helpdesk pilot validating bilingual FAQ resolution, session memory preservation, and high-frequency query caching.",
    status: "Production Hardened — Stable Microservice",
    maturity: "Production-ready",
    techStack: ["FastAPI", "LangGraph", "ChromaDB", "Redis", "SQLite", "Groq (Llama 3.3-70B)", "sentence-transformers", "Prometheus", "Docker Compose", "Python 3.10+"],
    clientSafeHighlights: [
      "Redis semantic cache",
      "SQLite 5-turn session memory",
      "Bilingual language routing",
      "Prometheus /metrics telemetry"
    ],
    architecture: {
      pattern: "LangGraph Conditional Support Routing & Memory Stack",
      description: "FastAPI support service using LangGraph workflows to route English/Hindi queries via high-speed caches and local context database.",
      flow: [
        "User support query parsed by language detection",
        "Redis semantic cache checked for recent matches (<50ms)",
        "ChromaDB performs vector retrieval on FAQ indices",
        "Confidence Router checks scoring thresholds",
        "Groq synthesizes final bilingual response if uncached",
        "SQLite records conversation thread context",
        "Prometheus logs performance metrics at /metrics"
      ],
      components: [
        "FastAPI gateway",
        "LangGraph workflow pipeline",
        "ChromaDB vector store",
        "Redis cache instance",
        "SQLite context database",
        "Prometheus metric exporter"
      ],
      deploymentOptions: [
        "Docker Compose container",
        "Railway / Render cloud setup",
        "AWS/GCP/Azure VM cluster"
      ],
      governanceControls: [
        "Confidence gating thresholds",
        "Safe language fallback routes",
        "Data compliance session scoping",
        "Production metric tracking"
      ],
      integrationPoints: [
        "Helpdesk customer portal",
        "Redis instances",
        "Groq inference REST APIs"
      ]
    }
  },
  {
    id: "flowsight",
    name: "FLOWSIGHT AI — Predictive Supply-Chain Intelligence Pipeline",
    tagline: "Shipment delay prediction with ensemble ML, vendor enrichment, and LLM explanations",
    description: "Interpretable supply chain risk engine running gradient boosting ensemble classification and root-cause mapping.",
    overview: "Three-model ensemble ML pipeline: (1) Binary classifier — will this shipment delay? (CatBoost + XGBoost + LightGBM, 84.7% accuracy, 0.891 AUC). (2) Regression — how many days late? (MAE 1.24 days). (3) Multi-class cause classifier (78.2% accuracy). DuckDB embedded feature store. Vendor reliability and route enrichment layers (50 vendors, 2,449 routes, +3.2% accuracy lift). Groq LLaMA plain-English explanations. Streamlit dashboard + Plotly charts.",
    features: [
      "Three-model ensemble: binary classifier, regression estimator, and cause categorizer",
      "High-speed DuckDB embedded feature store for rapid metadata retrieval",
      "Vendor reliability and route enrichment layer covering 50 vendors & 2,449 routes",
      "Interpretable plain-English predictions compiled via Groq LLaMA"
    ],
    industries: ["Logistics", "Manufacturing", "Retail", "Supply Chain"],
    relatedCaseStudy: "flowsight",
    demoHref: "/#book-slot",
    businessProblem: "Supply chain teams have no early warning for shipment delays, leading to reactive firefighting rather than proactive risk management.",
    pilotValidation: "85ms inference (without LLM), <2s with explanation. 84.7% binary accuracy. Tested on 15,000 shipment records with vendor/route enrichment.",
    pilotScope: "4-week logistics sandbox validating delay risk classification, duration estimates, and operations telemetry reporting.",
    status: "Functional Pipeline — Pilot Ready",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "CatBoost", "XGBoost", "LightGBM", "DuckDB", "Groq (LLaMA 3.3-70B)", "LangChain", "Streamlit", "Plotly", "Pydantic", "Python 3.10+"],
    clientSafeHighlights: [
      "Gradient boosting ensemble ML",
      "DuckDB local feature store",
      "Vendor & route enrichment",
      "Interpretable Plain-English reasons"
    ],
    architecture: {
      pattern: "3-Model Gradient Boosting Supply Chain Predictor",
      description: "Highly interpretable ML pipeline running CatBoost, XGBoost, and LightGBM models enriched via DuckDB tables.",
      flow: [
        "Logistics telemetry event ingested by FastAPI",
        "DuckDB fetches vendor metrics and route profiles",
        "Gradient boosting models score delay probability",
        "Regression model estimates late days",
        "Multi-class classifier identifies disruption reason",
        "Groq LLaMA writes explanation for operations staff",
        "Plotly renders real-time tracking graphs"
      ],
      components: [
        "CatBoost/XGBoost/LightGBM package",
        "DuckDB feature store",
        "Groq explanation engine",
        "Streamlit user dashboard"
      ],
      deploymentOptions: [
        "Local setup with Streamlit",
        "FastAPI container deployment"
      ],
      governanceControls: [
        "Model drift and AUC tracking",
        "Explainable feature rankings",
        "Human coordinator overrides",
        "Standard error range boundaries"
      ],
      integrationPoints: [
        "Logistics ERP tracking systems",
        "DuckDB feature catalog",
        "Groq & Streamlit clients"
      ]
    }
  },
  {
    id: "ai-readiness-studio",
    name: "AI READINESS INTELLIGENCE STUDIO — AI Opportunity Discovery Workspace",
    tagline: "From business documents to AI opportunity roadmap in minutes — stateful multi-agent discovery with PDF/DOCX/PPTX export",
    description: "Stateful 9-node multi-agent consulting workspace with professional document generators and GCP cloud storage.",
    overview: "LangGraph-orchestrated 9-node multi-agent system: Discovery Agent → Bottleneck Analyst → Opportunity Mapper → Priority Grid → Readiness Scorer → Risk Register → Pilot Recommender → Roadmap Builder → Report Compiler. Dual DB engine: PostgreSQL + pgvector (production) with SQLite + in-memory fallback (dev). Rich exporters: PDF, DOCX (Word proposal), PPTX (slide deck). Human Review Mode for manual override before approval. GCP Terraform deployment (Compute Engine VM + GCS bucket for Ollama models).",
    features: [
      "9-node stateful LangGraph agent DAG mapping workflows & roadmaps",
      "Dual-database configuration: PostgreSQL+pgvector or SQLite dev fallback",
      "Exporters compiling custom PDF, DOCX proposals, and PPTX slide decks",
      "Human Review Mode allowing consultants to override values before export"
    ],
    industries: ["Consulting", "Enterprise Transformation", "Sales Engineering"],
    relatedCaseStudy: "ai-readiness-studio",
    demoHref: "/#book-slot",
    businessProblem: "Consulting firms and enterprise transformation leads spend weeks manually diagnosing client AI readiness and producing roadmap deliverables.",
    pilotValidation: "Full discovery-to-deliverable in a single session. Human-in-loop approval before export. Instant PDF/Word/PowerPoint deliverables.",
    pilotScope: "4-week discovery pilot evaluating multi-document analysis, readiness scoring, and automated report compilers.",
    status: "Stable Multi-Agent Workspace — Pilot Ready",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "LangGraph (9-node)", "Next.js 15", "PostgreSQL + pgvector", "SQLite (fallback)", "Groq (llama-3.3-70b)", "Ollama (qwen2.5:7b, llama3:8b, phi3.5)", "Alembic", "PDF/DOCX/PPTX exporters", "Recharts", "Terraform (GCP)", "Docker Compose"],
    clientSafeHighlights: [
      "9-Node stateful agent DAG",
      "PDF/Word/PowerPoint exporters",
      "Adaptive Ollama local fallback",
      "GCP Terraform deployment"
    ],
    architecture: {
      pattern: "9-Node Stateful LangGraph multi-agent & proposal generator",
      description: "Enterprise consulting accelerator orchestrating 9 dedicated agents to analyze documents, score readiness, and generate multi-format slide/word outputs.",
      flow: [
        "Business process documents uploaded to Next.js portal",
        "9 specialized LangGraph nodes run structured audits",
        "Opportunity matrices and readiness scores computed",
        "Human Review Mode allows manual score override",
        "Report compiler merges visual stats and texts",
        "PDF, DOCX, and PPTX exporters build deliverables",
        "Terraform provisions GCP compute/storage setups"
      ],
      components: [
        "9-Node LangGraph analyzer engine",
        "Next.js dashboards with Recharts",
        "Multi-format document exporter pipeline",
        "Dual-engine database layer",
        "GCP Terraform cloud configurations"
      ],
      deploymentOptions: [
        "GCP Terraform VM + GCS setup",
        "Docker Compose local container"
      ],
      governanceControls: [
        "Human Review Mode override checkpoints",
        "Strict fallback models for offline isolation",
        "Alembic DB version controls",
        "Audit trail logs"
      ],
      integrationPoints: [
        "PostgreSQL/pgvector database",
        "Ollama & Groq APIs",
        "Google Cloud Platform resources"
      ]
    }
  }
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export const productIds = products.map((p) => p.id);
