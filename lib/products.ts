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
    name: "VeriShield / Sovereign-AI",
    tagline: "Policy-Driven LLM Guardrails & Verification Layer",
    description:
      "Policy-driven LLM guardrails and verification layer for inputs and outputs in controlled environments.",
    overview:
      "VeriShield sits as a proxy in front of your LLM pipelines — enforcing retrieval-grounded responses, compliance graphs, and local audit logs to significantly reduce compliance and hallucination risk.",
    features: [
      "Three-tier routing/detection: Regex/heuristics, Semantic embeddings, and agentic review",
      "Dynamic YAML-driven policy graphs and enforcement configurations",
      "Sovereign PII detection helpers and compliance verification packs",
      "Zero-trust API service, containerized deployment blueprints",
    ],
    industries: ["Banking", "Healthcare", "Government", "Insurance"],
    relatedCaseStudy: "verishield",
    demoHref: "/live-demo",
    businessProblem:
      "Teams deploying LLMs need configurable controls for unsafe inputs, PII exposure, unsupported claims, policy violations, and auditability.",
    pilotValidation:
      "Validate policy-based input/output checks, tiered detection, PII helper rules, audit metadata, and deployment fit for controlled environments.",
    pilotScope:
      "4-week sandboxed pilot validating input PII protection rules, custom YAML policy enforcement, and edge proxy compatibility.",
    status: "Stable Core / Pilot-Ready",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "LangGraph", "Docker", "Helm", "Ollama", "GCP"],
    clientSafeHighlights: [
      "YAML-based policy engine",
      "Tiered semantic & agent routing",
      "Risk audit metadata logging",
    ],
    architecture: {
      pattern: "LLM Guardrail & Verification Gateway",
      description:
        "A policy-driven verification layer that sits before and after LLM/RAG systems to check risky inputs, PII exposure, unsupported claims, and policy violations.",
      flow: [
        "User or application request",
        "VeriShield API gateway",
        "Input policy checks",
        "PII and risk detection",
        "Semantic verification layer",
        "Optional agentic review",
        "LLM or RAG system",
        "Output verification",
        "Audit metadata and human escalation",
      ],
      components: [
        "Input/output policy checks",
        "Tiered risk detection",
        "PII helper rules",
        "Semantic verification",
        "Optional agentic review path",
        "Audit metadata logging",
        "Controlled API gateway",
      ],
      deploymentOptions: [
        "Client-managed environment",
        "Private cloud pilot",
        "Controlled cloud deployment",
        "Local/edge evaluation setup",
      ],
      governanceControls: [
        "Policy review",
        "Audit metadata",
        "Human escalation",
        "Controlled rollout",
        "Data minimization patterns",
      ],
      integrationPoints: [
        "Existing LLM apps",
        "RAG pipelines",
        "Internal policy repositories",
        "Logging/monitoring systems",
        "Authentication gateway",
      ],
    },
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
      "AI safety, privacy, and PII awareness modules",
      "Interactive prompt sandbox laboratory with dilemma scenario simulations",
      "Manager-level adoption analytics, metrics tracking, and visualization boards",
    ],
    industries: ["Enterprise", "Banking", "Healthcare", "Government"],
    relatedCaseStudy: "aetherai-training",
    demoHref: "/#book-slot",
    businessProblem:
      "Teams are adopting AI tools without consistent training, safety practices, role-specific workflows, or manager visibility.",
    pilotValidation:
      "Validate role-based learning paths, prompt labs, safety scenarios, quizzes, and adoption analytics for internal AI enablement.",
    pilotScope:
      "4-week department sandbox evaluating prompt laboratory, safety scenarios, learning pathways, and usage analytics.",
    status: "Production Blueprint / Functional Portal",
    maturity: "Production-ready",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Recharts"],
    clientSafeHighlights: [
      "Role-specific curriculums",
      "Manager usage analytics dashboard",
      "Interactive prompt laboratory",
    ],
    architecture: {
      pattern: "Role-Based AI Enablement Portal",
      description:
        "Structured learning paths, prompt sandboxes, and quiz milestones to align operational teams with security, compliance, and productivity workflows.",
      flow: [
        "Employee login / demo access",
        "Role selection",
        "Role-based learning path",
        "Safety modules",
        "Prompt practice lab",
        "Scenario exercises",
        "Quiz and progress tracking",
        "Manager adoption dashboard",
      ],
      components: [
        "Learning path engine",
        "Safety module library",
        "Prompt lab",
        "Scenario simulator",
        "Quiz engine",
        "Progress tracker",
        "Manager analytics dashboard",
      ],
      deploymentOptions: [
        "Internal training portal",
        "Department pilot",
        "Organization-wide adoption rollout",
      ],
      governanceControls: [
        "Responsible AI training",
        "Safety module completion",
        "Manager visibility",
        "Usage reporting",
      ],
      integrationPoints: [
        "HR/training systems",
        "SSO/auth provider",
        "Internal AI policy docs",
        "Manager reporting workflow",
      ],
    },
  },
  {
    id: "mediflow",
    name: "MediFlow",
    tagline: "Patient Onboarding & Clinic Operations Blueprint",
    description:
      "Patient onboarding, secure document handling, and AI-assisted clinical intake automation.",
    overview:
      "MediFlow structures patient intake, coordinates clinical staff, and handles document uploads securely without storing patient data outside approved perimeters.",
    features: [
      "Automated clinical patient intake and validation pipelines",
      "Interactive clinic management dashboards for patients, staff, and administrators",
      "Secure document management using object-compatible local storage arrays",
      "AI-powered intake assistance using structured logic workflows",
    ],
    industries: ["Healthcare"],
    relatedCaseStudy: "mediflow",
    demoHref: "/#book-slot",
    businessProblem:
      "Healthcare teams spend too much time on repetitive intake, patient documentation, and operational coordination.",
    pilotValidation:
      "Validate digital intake flows, role-based clinic dashboards, document handling, AI-assisted intake guidance, and staff workflow orchestration.",
    pilotScope:
      "4-week operations pilot validating digitised intake, asynchronous processing queues, local storage protocols, and intake guidance.",
    status: "Stable Sandbox Architecture",
    maturity: "Pilot-ready",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Celery", "Redis", "MinIO/S3"],
    clientSafeHighlights: [
      "Multi-role clinic management",
      "Asynchronous background processing",
      "Controlled storage patterns",
    ],
    architecture: {
      pattern: "Patient Intake & Clinic Workflow System",
      description:
        "Patient onboarding, secure document handling, and AI-assisted clinical intake automation patterns.",
      flow: [
        "Patient intake request",
        "Digital intake form",
        "Validation layer",
        "Document upload and controlled storage",
        "AI-assisted intake guidance",
        "Staff review queue",
        "Clinic dashboard",
        "Operational handoff",
      ],
      components: [
        "Patient intake flow",
        "Role-based dashboards",
        "Document handling",
        "AI intake assistant",
        "Background task processing",
        "Staff review queue",
      ],
      deploymentOptions: [
        "Clinic workflow pilot",
        "Department sandbox",
        "Controlled healthcare operations deployment",
      ],
      governanceControls: [
        "Human staff review",
        "Role-based access",
        "Controlled document handling",
        "Operational auditability",
      ],
      integrationPoints: [
        "Clinic operations workflow",
        "Document storage",
        "Staff dashboard",
        "Patient communication flow",
      ],
    },
  },
  {
    id: "govgig",
    name: "GovGig AI",
    tagline: "Federal Contracting Compliance Intelligence",
    description:
      "Federal contracting compliance RAG assistant for dense regulation lookup and automated document drafting.",
    overview:
      "GovGig AI unifies dense vector and keyword search pipelines to parse complex safety, procurement, and compliance clauses, generating rapid draft layouts.",
    features: [
      "Targeted procurement and compliance safety regulation lookup",
      "Hybrid search (dense vector + full-text) with Reciprocal Rank Fusion",
      "Structured intelligent routing across specialized query flows",
      "Automated drafting assistance for contract letters, queries, and filings",
    ],
    industries: ["Government", "Enterprise"],
    relatedCaseStudy: "govgig",
    demoHref: "/#book-slot",
    businessProblem:
      "Contracting, proposal, and compliance teams need fast, grounded answers across compliance clauses, RFIs, REAs, and procedural obligations.",
    pilotValidation:
      "Validate clause lookup, regulation search, RFI/REA drafting, procedural guidance, and citation-backed contracting workflows against selected regulation corpora.",
    pilotScope:
      "4-week compliance pilot validating regulation clause lookup, hybrid search accuracy, and automated proposal drafting templates.",
    status: "Pilot-Ready / Functional RAG Engine",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "LangGraph", "PostgreSQL", "pgvector", "AWS", "Terraform"],
    clientSafeHighlights: [
      "RRF hybrid search routing",
      "Intelligent agentic routers",
      "Draft synthesis engine",
    ],
    architecture: {
      pattern: "Contracting Compliance RAG Assistant",
      description:
        "Federal contracting compliance RAG assistant for dense regulation lookup and automated document drafting.",
      flow: [
        "Contracting query or draft request",
        "Intent router",
        "Regulation and clause retrieval",
        "Hybrid search / reranking",
        "Draft or guidance generation",
        "Citation-backed output",
        "Human review",
      ],
      components: [
        "Intent routing",
        "Clause lookup",
        "Regulation retrieval",
        "Query expansion",
        "Draft assistance",
        "Citation output",
        "Feedback/telemetry hooks",
      ],
      deploymentOptions: [
        "Controlled document-corpus pilot",
        "Proposal team assistant",
        "Compliance review assistant",
      ],
      governanceControls: [
        "Human review for all generated drafts",
        "Citation-backed responses",
        "Workflow logging",
        "Approved corpus boundaries",
      ],
      integrationPoints: [
        "Contracting document library",
        "Proposal workflow",
        "Compliance review process",
        "Knowledge base",
      ],
    },
  },
  {
    id: "yojana-ai",
    name: "Yojana-AI",
    tagline: "Government Scheme Discovery & Eligibility RAG",
    description:
      "Government scheme matching and eligibility verification RAG architecture.",
    overview:
      "Yojana-AI parses scheme databases, leveraging corrective loops to match user criteria against scheme criteria with citations.",
    features: [
      "Indexed corpus of active public welfare schemes",
      "Intelligent coordination with advanced vector storage",
      "Self-RAG and Corrective RAG (CRAG) quality loops to audit retrieval accuracy",
      "Cost-aware hybrid inference structure (local + cloud options)",
    ],
    industries: ["Government"],
    relatedCaseStudy: "yojana-ai",
    demoHref: "/#book-slot",
    businessProblem:
      "Citizens, public-sector teams, and service providers struggle to match users with relevant schemes, eligibility rules, benefits, and procedures across fragmented official documents.",
    pilotValidation:
      "Validate scheme discovery, eligibility matching, metadata-filtered retrieval, self-healing RAG loops, and cost-aware local/cloud inference strategy.",
    pilotScope:
      "4-week support pilot matching user criteria against scheme parameters with citation-backed validation loops.",
    status: "Stable RAG Blueprint / Complete Dataset",
    maturity: "Pilot-ready",
    techStack: ["FastAPI", "LangGraph", "Qdrant", "Ollama", "Groq", "Docker", "AWS"],
    clientSafeHighlights: [
      "Multi-agent eligibility coordination",
      "Corrective RAG verification loops",
      "Metadata-filtered vector search",
    ],
    architecture: {
      pattern: "Public-Service Scheme Discovery RAG",
      description:
        "Government scheme matching and eligibility verification RAG architecture.",
      flow: [
        "Citizen/officer query",
        "Intent classification",
        "Scheme corpus retrieval",
        "Eligibility matching",
        "Corrective retrieval loop",
        "Citation-backed answer",
        "Human escalation or application guidance",
      ],
      components: [
        "Scheme document ingestion",
        "Intent classifier",
        "Metadata-filtered retrieval",
        "Eligibility matching",
        "Corrective retrieval",
        "Answer generation",
        "Escalation workflow",
      ],
      deploymentOptions: [
        "Public-service pilot",
        "NGO/support desk assistant",
        "Internal government-services assistant",
      ],
      governanceControls: [
        "Citation-backed answers",
        "Human escalation",
        "Consent-aware flows",
        "Controlled document updates",
      ],
      integrationPoints: [
        "Scheme document corpus",
        "Citizen support workflow",
        "Helpdesk/chat interface",
        "Application guidance process",
      ],
    },
  },
  {
    id: "claimlens",
    name: "ClaimLens AI",
    tagline: "Multi-Modal Claims Fraud Intelligence",
    description:
      "Multi-modal insurance fraud classification, network graph analysis, and explainable claims triage.",
    overview:
      "ClaimLens merges tabular machine learning classifiers, computer vision verification checks, and network graph engines to flag claims risks transparently.",
    features: [
      "Advanced machine learning classifier utilizing explainable claim features",
      "Computer vision models for document authenticity and forgery analysis",
      "Graph database engines to identify systemic risk networks and coordination rings",
      "Natural language conversational audit explanations",
    ],
    industries: ["Insurance"],
    relatedCaseStudy: "claimlens",
    demoHref: "/#book-slot",
    businessProblem:
      "Insurance teams need faster triage, risk-signal detection, document authenticity checks, and explainable risk summaries across claim files.",
    pilotValidation:
      "Validate claim scoring, document checks, fraud-network signals, and explainable risk scores on sample claims.",
    pilotScope:
      "4-week insurance sandbox evaluating claims classification scoring, document scans, and risk-network mapping.",
    status: "Complete Core / Functional Multi-Engine",
    maturity: "Production-ready",
    techStack: ["FastAPI", "CatBoost", "OpenCV", "Neo4j", "Groq", "Streamlit"],
    clientSafeHighlights: [
      "Multi-model risk scoring",
      "Visual document authenticity checks",
      "Relational network mapping",
    ],
    architecture: {
      pattern: "Multi-Modal Claims Risk Pipeline",
      description:
        "Multi-modal insurance risk classification, network analysis, and explainable claims triage.",
      flow: [
        "Claim file intake",
        "Structured feature extraction",
        "Document authenticity checks",
        "Network-risk analysis",
        "Risk scoring layer",
        "Explanation generation",
        "Human claims reviewer dashboard",
      ],
      components: [
        "Claim scoring",
        "Document authenticity checks",
        "Network-risk analysis",
        "Explanation engine",
        "Reviewer dashboard",
        "Risk summary workflow",
      ],
      deploymentOptions: [
        "Insurance sandbox pilot",
        "Fraud-review assistant",
        "Claims triage workflow accelerator",
      ],
      governanceControls: [
        "Human adjuster final decision",
        "Explainable risk signals",
        "Audit-friendly summaries",
        "Approved sample-data usage",
      ],
      integrationPoints: [
        "Claims management system",
        "Document upload workflow",
        "Fraud review queue",
        "Adjuster dashboard",
      ],
    },
  },
  {
    id: "desidesk-rag",
    name: "DesiDesk RAG",
    tagline: "Multilingual Support & FAQ Assistant",
    description:
      "Multilingual FAQ and support RAG microservice with intelligent session memory and caching.",
    overview:
      "DesiDesk delivers fast, source-backed answers in multiple languages, leveraging session caching to maintain thread context and reduce API latency.",
    features: [
      "High-accuracy bilingual RAG matching in multiple languages",
      "Intelligent session memory and thread context preservation",
      "High-speed caching for repetitive support query profiles",
      "Observability integrations with performance metrics reporting",
    ],
    industries: ["Enterprise", "Insurance", "Healthcare", "Government"],
    relatedCaseStudy: "desidesk-rag",
    demoHref: "/#book-slot",
    businessProblem:
      "Support teams need consistent, multilingual answers grounded in approved knowledge bases while preserving conversation context and reducing repeated-query latency.",
    pilotValidation:
      "Validate bilingual FAQ retrieval, conversation memory, caching performance, and source-backed support answers.",
    pilotScope:
      "4-week helpdesk pilot validating bilingual FAQ resolution, session memory preservation, and high-frequency query caching.",
    status: "Stable Microservice Core",
    maturity: "Production-ready",
    techStack: ["FastAPI", "LangGraph", "ChromaDB", "Redis", "Groq", "Prometheus"],
    clientSafeHighlights: [
      "Bilingual support memory",
      "High-frequency caching filters",
      "Prometheus health monitoring",
    ],
    architecture: {
      pattern: "Multilingual Support RAG Microservice",
      description:
        "Multilingual FAQ and support RAG microservice with intelligent session memory and caching.",
      flow: [
        "User support query",
        "Language detection",
        "Conversation memory",
        "Knowledge-base retrieval",
        "Confidence routing",
        "LLM answer generation",
        "Cache and monitoring",
        "Support response",
      ],
      components: [
        "Knowledge-base ingestion",
        "Vector retrieval",
        "Language detection",
        "Conversation memory",
        "Response caching",
        "Confidence routing",
        "Health monitoring",
      ],
      deploymentOptions: [
        "Support-team pilot",
        "Helpdesk assistant",
        "Embedded FAQ microservice",
      ],
      governanceControls: [
        "Approved knowledge-base grounding",
        "Fallback handling",
        "Human escalation",
        "Monitoring",
      ],
      integrationPoints: [
        "Helpdesk system",
        "FAQ/SOP knowledge base",
        "Chat widget",
        "CRM or ticketing workflow",
      ],
    },
  },
  {
    id: "flowsight",
    name: "FlowSight AI",
    tagline: "Shipment Delay Prediction & Explainability",
    description:
      "Ensemble ML classifier and telemetry feature store to predict and explain logistics exception risks.",
    overview:
      "FlowSight AI ingests logistics telemetry inputs to run risk probability, duration estimation, and root-cause classification models, mapping exactly why supply chains stall.",
    features: [
      "Custom feature stores to catalog routes, vendors, and shipping patterns",
      "Advanced machine learning ensemble classification and regression predictors",
      "Delay probability, duration estimation, and multi-class failure root-cause outputs",
      "Natural-language anomaly explanations compiled dynamically",
    ],
    industries: ["Supply Chain", "Logistics", "FMCG"],
    relatedCaseStudy: "flowsight",
    demoHref: "/#book-slot",
    businessProblem:
      "Supply-chain teams need earlier visibility into shipment delay risk, likely delay duration, and probable causes before disruptions affect operations.",
    pilotValidation:
      "Validate delay probability scoring, expected delay duration, delay-reason classification, vendor/route enrichment, and plain-language explanations.",
    pilotScope:
      "4-week logistics sandbox validating delay risk classification, duration estimates, and operations telemetry reporting.",
    status: "Blueprint in Development / Prototype UI",
    maturity: "In active development",
    techStack: ["CatBoost", "XGBoost", "LightGBM", "DuckDB", "FastAPI", "Streamlit"],
    clientSafeHighlights: [
      "Ensemble ML classification",
      "Telemetry feature store",
      "Interactive delay dashboards",
    ],
    architecture: {
      pattern: "Predictive Supply-Chain Intelligence Pipeline",
      description:
        "Ensemble ML classifier and structured feature store to predict and explain logistics delay reasons.",
      flow: [
        "Shipment data ingestion",
        "Feature store",
        "Delay probability model",
        "Delay duration estimator",
        "Delay reason classifier",
        "Vendor/route enrichment",
        "Explanation layer",
        "Operations dashboard",
      ],
      components: [
        "Shipment feature store",
        "Delay-risk scoring",
        "Duration estimation",
        "Reason classification",
        "Vendor/route enrichment",
        "Explanation generation",
        "Operations dashboard",
      ],
      deploymentOptions: [
        "Logistics analytics sandbox",
        "Supply-chain pilot",
        "Operations risk dashboard",
      ],
      governanceControls: [
        "Decision-support only",
        "Human operations review",
        "Model monitoring",
        "Data quality checks",
      ],
      integrationPoints: [
        "Shipment data files",
        "ERP/logistics system",
        "Vendor performance records",
        "Operations dashboard",
      ],
    },
  },
  {
    id: "ai-readiness-studio",
    name: "AI Readiness Intelligence Studio",
    tagline: "AI Opportunity Discovery & Roadmap Generator",
    description:
      "Multi-agent stateful assistant to map technical feasibility, opportunity matrices, and custom roadmaps.",
    overview:
      "This studio deploys a stateful multi-agent orchestration. It audits workflows, risk profiles, and database perimeters, delivering professional reports.",
    features: [
      "Stateful multi-agent network (architects, analysts, proposal compilers)",
      "Comprehensive opportunity prioritization grids, readiness scores, and bottleneck audits",
      "Structured risk register generation and 90-day technical pilots blueprints",
      "Downloadable deliverable assets with full PDF, DOCX, and PPTX report compiling",
    ],
    industries: ["Enterprise", "Banking", "Healthcare", "Insurance"],
    relatedCaseStudy: "ai-readiness-studio",
    demoHref: "/#book-slot",
    businessProblem:
      "Consulting firms, transformation teams, and enterprise leaders need a faster way to convert business documents into prioritized AI opportunities, risk views, and implementation roadmaps.",
    pilotValidation:
      "Validate document-to-roadmap analysis, multi-agent opportunity discovery, human review, readiness scoring, and downloadable deliverables.",
    pilotScope:
      "4-week discovery pilot evaluating multi-document analysis, readiness scoring, and automated report compilers.",
    status: "Stable Multi-Agent Architecture",
    maturity: "Pilot-ready",
    techStack: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Ollama"],
    clientSafeHighlights: [
      "Stateful multi-agent analyzer",
      "Comprehensive document ingestion",
      "Automated deliverable exporters",
    ],
    architecture: {
      pattern: "AI Opportunity Discovery Workspace",
      description:
        "Multi-agent stateful assistant to map technical feasibility, opportunity matrices, and custom roadmaps.",
      flow: [
        "Business documents and process notes",
        "Document understanding",
        "Multi-agent opportunity analysis",
        "Bottleneck detection",
        "Readiness scoring",
        "Risk register",
        "Recommended pilot",
        "Roadmap generation",
        "Exportable deliverables",
      ],
      components: [
        "Document ingestion",
        "Multi-agent analysis",
        "Bottleneck detection",
        "Opportunity prioritization",
        "Readiness scoring",
        "Risk register",
        "Roadmap generator",
        "Report exporters",
      ],
      deploymentOptions: [
        "AI readiness audit",
        "Consulting discovery sprint",
        "Pre-sales transformation workshop",
      ],
      governanceControls: [
        "Human review",
        "Editable recommendations",
        "Transparent assumptions",
        "Client-approved final reports",
      ],
      integrationPoints: [
        "Business process documents",
        "Stakeholder notes",
        "Consulting workflows",
        "PDF/DOCX/PPTX reporting",
      ],
    },
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export const productIds = products.map((p) => p.id);
