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
  sourceRepo: string;
  status: string;
  maturity: "Production-ready" | "Pilot-ready" | "In active development";
  techStack: string[];
  repoGroundedHighlights: string[];
};

export const products: Product[] = [
  {
    id: "verishield",
    name: "VeriShield / Sovereign-AI",
    tagline: "Policy-Driven LLM Guardrails & Verification Layer",
    description:
      "Policy-driven LLM guardrails and verification layer for inputs and outputs in controlled environments.",
    overview:
      "VeriShield sits as a proxy in front of your LLM pipelines — enforcing retrieval-grounded responses, compliance graphs, and local audit logs to significantly reduce compliance and hallucination risk.",
    features: [
      "Three-tier routing/detection: Regex/heuristics, Semantic embeddings, LangGraph agent",
      "Dynamic YAML-driven policy graphs and enforcement configurations",
      "India-oriented PII detection helpers and compliance verification packs",
      "Zero-trust FastAPI microservice, Docker and Helm deployment blueprints",
    ],
    industries: ["Banking", "Healthcare", "Government", "Insurance"],
    relatedCaseStudy: "verishield",
    demoHref: "/live-demo",
    businessProblem:
      "Teams deploying LLMs need configurable controls for unsafe inputs, PII exposure, unsupported claims, policy violations, and auditability.",
    pilotValidation:
      "Validate policy-based input/output checks, tiered detection, PII helper rules, audit metadata, and deployment fit for controlled environments.",
    sourceRepo: "pranaya-mathur/My-Product-v1 (gcp-deploy-branch)",
    status: "Stable Core / Pilot-Ready",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "LangGraph", "Docker", "Helm", "Ollama", "GCP"],
    repoGroundedHighlights: [
      "YAML-based policy engine",
      "Tiered semantic & agent routing",
      "Red-team validation harness",
    ],
  },
  {
    id: "aetherai-training",
    name: "AetherAI Workforce Training",
    tagline: "Role-Based AI Adoption & Upskilling Platform",
    description:
      "Role-based AI literacy, safety practices, and internal team enablement dashboard.",
    overview:
      "AetherAI delivers structured learning paths, safe prompt sandboxes, and quiz milestones to align operational teams with security, compliance, and productivity workflows.",
    features: [
      "Role-specific upskilling and learning path mapping",
      "Mandatory AI safety, privacy, and PII modules",
      "Interactive prompt sandbox laboratory with real-world dilemma scenario simulations",
      "Manager-level adoption analytics, metrics tracking, and Recharts reports",
    ],
    industries: ["Enterprise", "Banking", "Healthcare", "Government"],
    relatedCaseStudy: "aetherai-training",
    demoHref: "/#book-slot",
    businessProblem:
      "Teams are adopting AI tools without consistent training, safety practices, role-specific workflows, or manager visibility.",
    pilotValidation:
      "Validate role-based learning paths, prompt labs, safety scenarios, quizzes, and adoption analytics for internal AI enablement.",
    sourceRepo: "pranaya-mathur/AI-Workforce-Training-and-Adoption-Platform",
    status: "Production Blueprint / Functional Portal",
    maturity: "Production-ready",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Recharts"],
    repoGroundedHighlights: [
      "Role-specific curriculums",
      "Manager usage analytics dashboard",
      "Interactive prompt laboratory",
    ],
  },
  {
    id: "mediflow",
    name: "MediFlow",
    tagline: "Patient Onboarding & Clinic Operations Blueprint",
    description:
      "Patient onboarding, secure document handling, and AI-assisted clinical intake automation.",
    overview:
      "MediFlow structures patient intake, coordinates clinical staff, and handles document uploads securely without storing patient data outside approved edge perimeters.",
    features: [
      "Automated clinical patient intake and validation pipelines",
      "Interactive clinic management dashboards for patients, staff, and administrators",
      "Secure document management using MinIO or S3-compatible local arrays",
      "AI-powered intake assistance using LangGraph and Groq models",
    ],
    industries: ["Healthcare"],
    relatedCaseStudy: "mediflow",
    demoHref: "/#book-slot",
    businessProblem:
      "Healthcare teams spend too much time on repetitive intake, patient documentation, and operational coordination.",
    pilotValidation:
      "Validate digital intake flows, role-based clinic dashboards, document handling, AI-assisted intake guidance, and staff workflow orchestration.",
    sourceRepo: "pranaya-mathur/medi_flow",
    status: "Stable Sandbox Architecture",
    maturity: "Pilot-ready",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Celery", "Redis", "MinIO/S3"],
    repoGroundedHighlights: [
      "Multi-role clinic management",
      "Celery asynchronous background processing",
      "MinIO object storage patterns",
    ],
  },
  {
    id: "govgig",
    name: "GovGig AI",
    tagline: "Federal Contracting Compliance Intelligence",
    description:
      "Federal contracting compliance RAG assistant for FAR/DFARS lookup and automated document drafting.",
    overview:
      "GovGig AI unifies dense vector and keyword search pipelines to parse complex safety, procurement, and compliance clauses, generating rapid draft layouts.",
    features: [
      "Targeted FAR, DFARS, and EM 385-1-1 safety regulation lookup",
      "Hybrid search (dense vector + full-text) with Reciprocal Rank Fusion",
      "LangGraph intelligent routing across specialized sub-agents",
      "Automated drafting pipeline for contract letters, RFIs, and REAs",
    ],
    industries: ["Government", "Enterprise"],
    relatedCaseStudy: "govgig",
    demoHref: "/#book-slot",
    businessProblem:
      "Contracting, proposal, and compliance teams need fast, grounded answers across FAR, DFARS, EM 385-1-1, clauses, RFIs, REAs, and procedural obligations.",
    pilotValidation:
      "Validate clause lookup, regulation search, RFI/REA drafting, procedural guidance, and citation-backed contracting workflows against selected regulation corpora.",
    sourceRepo: "pranaya-mathur/govgig_updated",
    status: "Pilot-Ready / Functional RAG Engine",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "LangGraph", "PostgreSQL", "pgvector", "AWS", "Terraform"],
    repoGroundedHighlights: [
      "Reciprocal Rank Fusion hybrid search",
      "LangGraph agentic clause routers",
      "Contract drafting synthesis engines",
    ],
  },
  {
    id: "yojana-ai",
    name: "Yojana-AI",
    tagline: "Government Scheme Discovery & Eligibility RAG",
    description:
      "Government scheme matching and eligibility verification RAG architecture.",
    overview:
      "Yojana-AI parses official government welfare and scheme databases, leveraging corrective loops to match user criteria against scheme criteria with citations.",
    features: [
      "Indexed corpus of 2,153 active schemes with 10,812 semantic chunks",
      "LangGraph multi-agent coordination with Qdrant vector database",
      "Self-RAG and Corrective RAG (CRAG) quality loops to audit retrieval accuracy",
      "Cost-aware hybrid inference structure (local Ollama + cloud Groq)",
    ],
    industries: ["Government"],
    relatedCaseStudy: "yojana-ai",
    demoHref: "/#book-slot",
    businessProblem:
      "Citizens, public-sector teams, and service providers struggle to match users with relevant schemes, eligibility rules, benefits, and procedures across fragmented official documents.",
    pilotValidation:
      "Validate scheme discovery, eligibility matching, metadata-filtered retrieval, self-healing RAG loops, and cost-aware local/cloud inference strategy.",
    sourceRepo: "pranaya-mathur/Yojana-AI",
    status: "Stable RAG Blueprint / Complete Dataset",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "LangGraph", "Qdrant", "Ollama", "Groq", "Docker", "AWS"],
    repoGroundedHighlights: [
      "2,153 schemes / 10,812 chunks",
      "Self-RAG and Corrective RAG loops",
      "Qdrant metadata-filtered vector search",
    ],
  },
  {
    id: "claimlens",
    name: "ClaimLens AI",
    tagline: "Multi-Modal Claims Fraud Intelligence",
    description:
      "Multi-modal insurance fraud classification, network graph analysis, and explainable claims triage.",
    overview:
      "ClaimLens merges tabular machine learning classifiers, computer vision forgery checks, and Neo4j network graphs to flag claims fraud transparently.",
    features: [
      "CatBoost ML classifier utilizing 145 explainable claim features",
      "Computer vision models for Aadhaar/PAN/license document forgery analysis",
      "Neo4j graph engines to identify systemic fraud networks and coordination rings",
      "Groq-powered plain-English and Hinglish conversational audit explanations",
    ],
    industries: ["Insurance"],
    relatedCaseStudy: "claimlens",
    demoHref: "/#book-slot",
    businessProblem:
      "Insurance teams need faster triage, fraud-signal detection, document authenticity checks, and explainable risk summaries across claim files.",
    pilotValidation:
      "Validate claim scoring, document forgery checks, fraud-network signals, and LLM-generated explanations on synthetic or approved sample claims.",
    sourceRepo: "pranaya-mathur/ClaimLens_App",
    status: "Complete Core / Functional Multi-Engine",
    maturity: "Production-ready",
    techStack: ["FastAPI", "CatBoost", "OpenCV", "Neo4j", "Groq", "Streamlit"],
    repoGroundedHighlights: [
      "CatBoost (145 features)",
      "OpenCV document forgery scanning",
      "Neo4j connection analytics",
    ],
  },
  {
    id: "desidesk-rag",
    name: "DesiDesk RAG",
    tagline: "Multilingual Support & FAQ Assistant",
    description:
      "Multilingual FAQ and support RAG microservice with intelligent session memory and caching.",
    overview:
      "DesiDesk delivers fast, source-backed answers in English and Hindi, leveraging session caching to maintain thread context and reduce API latency.",
    features: [
      "Bilingual RAG matching in English and Hindi",
      "Intelligent session memory using SQLite database structures",
      "High-speed Redis caching for repetitive support query profiles",
      "LangGraph conditional routing with Prometheus metric observability",
    ],
    industries: ["Enterprise", "Insurance", "Healthcare", "Government"],
    relatedCaseStudy: "desidesk-rag",
    demoHref: "/#book-slot",
    businessProblem:
      "Support teams need consistent, multilingual answers grounded in approved knowledge bases while preserving conversation context and reducing repeated-query latency.",
    pilotValidation:
      "Validate bilingual FAQ retrieval, conversation memory, Redis caching, confidence-based routing, and source-backed support answers.",
    sourceRepo: "pranaya-mathur/desidesk-rag-microservice",
    status: "Stable Microservice Core",
    maturity: "Production-ready",
    techStack: ["FastAPI", "LangGraph", "ChromaDB", "Redis", "Groq", "Prometheus"],
    repoGroundedHighlights: [
      "Bilingual English/Hindi memory",
      "Redis caching / ChromaDB vectors",
      "Prometheus health & cache stats",
    ],
  },
  {
    id: "flowsight",
    name: "FlowSight AI",
    tagline: "Shipment Delay Prediction & Explainability",
    description:
      "Ensemble ML classifier and DuckDB feature store to predict and explain logistics exception risks.",
    overview:
      "FlowSight AI ingests telemetry inputs to run binary, multi-class, and regression estimations, mapping exactly why supply chains stall.",
    features: [
      "DuckDB feature stores to catalog routes, vendors, and route patterns",
      "CatBoost, XGBoost, and LightGBM machine learning ensemble predictors",
      "Delay probability, duration estimation, and multi-class failure root-cause outputs",
      "Natural-language anomaly explanations compiled dynamically via Groq / LLaMA",
    ],
    industries: ["Supply Chain", "Logistics", "FMCG"],
    relatedCaseStudy: "flowsight",
    demoHref: "/#book-slot",
    businessProblem:
      "Supply-chain teams need earlier visibility into shipment delay risk, likely delay duration, and probable causes before disruptions affect operations.",
    pilotValidation:
      "Validate delay probability scoring, expected delay duration, delay-reason classification, vendor/route enrichment, and plain-English explanations on shipment data.",
    sourceRepo: "pranaya-mathur/flowsight-ai-",
    status: "Blueprint in Development / Prototype UI",
    maturity: "In active development",
    techStack: ["CatBoost", "XGBoost", "LightGBM", "DuckDB", "FastAPI", "Streamlit"],
    repoGroundedHighlights: [
      "DuckDB analytics feature store",
      "Multi-model ensemble classifications",
      "Plotly logistics telemetry boards",
    ],
  },
  {
    id: "ai-readiness-studio",
    name: "AI Readiness Intelligence Studio",
    tagline: "AI Opportunity Discovery & Roadmap Generator",
    description:
      "Multi-agent stateful assistant to map technical feasibility, opportunity matrices, and custom roadmaps.",
    overview:
      "This studio deploys a 9-node LangGraph orchestration. It audits workflows, risk profiles, and database perimeters, delivering professional reports.",
    features: [
      "Stateful 9-node LangGraph team (architects, analysts, proposal compilers)",
      "Comprehensiveopportunity prioritization grids, readiness scores, and bottleneck audits",
      "Structured risk register generation and 90-day technical pilots blueprints",
      "Downloadable deliverable assets with full PDF, DOCX, and PPTX report compiling",
    ],
    industries: ["Enterprise", "Banking", "Healthcare", "Insurance"],
    relatedCaseStudy: "ai-readiness-studio",
    demoHref: "/#book-slot",
    businessProblem:
      "Consulting firms, transformation teams, and enterprise leaders need a faster way to convert messy business documents into prioritized AI opportunities, risk views, and implementation roadmaps.",
    pilotValidation:
      "Validate document-to-roadmap analysis, multi-agent opportunity discovery, human review, readiness scoring, and downloadable PDF/DOCX/PPTX deliverables.",
    sourceRepo: "pranaya-mathur/AI-Readiness-Intelligence-Studio",
    status: "Stable Multi-Agent Architecture",
    maturity: "Pilot-ready",
    techStack: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Ollama"],
    repoGroundedHighlights: [
      "Stateful 9-node agent graph",
      "PDF, DOCX, and PPTX compiling exporters",
      "Interactive bottlenecks dashboard",
    ],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export const productIds = products.map((p) => p.id);
