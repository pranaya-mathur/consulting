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
};

export const products: Product[] = [
  {
    id: "verishield",
    name: "VeriShield",
    tagline: "AI Verification & Policy Guard Layer",
    description:
      "Hallucination-resistant guardrails and policy enforcement for sovereign AI workloads.",
    overview:
      "VeriShield sits in front of your LLM stack — enforcing retrieval-grounded responses, policy graphs, and cryptographic audit trails to significantly reduce compliance and hallucination risk.",
    features: [
      "Real-time input and output scanning for prompt injection and PII",
      "Retrieval-grounded response checks (citation verification)",
      "Policy guardrail graph (regulatory & SOP compliance checks)",
      "High-speed edge or local inference configuration",
    ],
    industries: ["Banking", "Healthcare", "Government", "Insurance"],
    relatedCaseStudy: "verishield",
    demoHref: "/live-demo",
    businessProblem: "Chatbots hallucinate or generate unsafe answers without compliance checks.",
    pilotValidation: "Enforce retrieval-grounded responses, run custom policy checks, and export detailed audit logs.",
  },
  {
    id: "claimlens",
    name: "ClaimLens AI",
    tagline: "Insurance Claims Intelligence Blueprint",
    description:
      "Automated claims triage, fraud signals, and auditable decision trails for insurers.",
    overview:
      "ClaimLens agents analyze incoming claim documents, cross-reference them against policy rules, and surface risk scores with verified evidence to speed up approvals securely.",
    features: [
      "Automated clinical and regulatory policy matching",
      "Fraud signal detection with document citation grounding",
      "SOP compliance scoring for claim processing",
      "Seamless human-in-the-loop escalation checkpoints",
    ],
    industries: ["Insurance"],
    relatedCaseStudy: "claimlens-ai",
    demoHref: "/case-studies/claimlens-ai",
    businessProblem: "Manual operations consume expensive human time in document-heavy claims review.",
    pilotValidation: "Automate claims triage and fraud signals with auditable citation-backed decision trails.",
  },
  {
    id: "govgig",
    name: "GovGig / Yojana-AI",
    tagline: "Citizen Scheme Navigation Blueprint",
    description:
      "Citizen-facing scheme navigation with verified retrieval and multilingual support.",
    overview:
      "GovGig / Yojana-AI indexes thousands of official scheme documents and returns citation-backed answers in 12+ regional languages to solve eligibility complexity for citizens.",
    features: [
      "Verified retrieval grounded exclusively in official scheme databases",
      "12+ regional languages supported natively",
      "Consent-aware citizens' query processing",
      "Deterministic routing to official department contacts",
    ],
    industries: ["Government"],
    relatedCaseStudy: "govgig-ai",
    demoHref: "/case-studies/govgig-ai",
    businessProblem: "Citizens struggle to find and navigate fragmented eligibility rules for public benefits.",
    pilotValidation: "Match eligibility in 12+ regional languages with verified citations from official sources.",
  },
  {
    id: "mediflow",
    name: "MediFlow Clinical",
    tagline: "Healthcare Intake Automation Blueprint",
    description:
      "Clinical intake automation with HIPAA-compliant audit logs and EHR integrations.",
    overview:
      "MediFlow Clinical guides patients through smart multilingual intake questionnaires, validates patient data, and syncs directly into EHRs with strict local data residency.",
    features: [
      "Dynamic patient intake onboarding agent",
      "Direct HL7 / FHIR standard EHR integration patterns",
      "Automatic HIPAA/DPDP PII scrubbers",
      "Clinical staff handoff dashboards",
    ],
    industries: ["Healthcare"],
    relatedCaseStudy: "mediflow-clinical",
    demoHref: "/case-studies/mediflow-clinical",
    businessProblem: "Clinical intake takes too much time and creates administrative burden for staff.",
    pilotValidation: "Streamline clinical onboarding with HIPAA-ready audit logs and EHR integrations.",
  },
  {
    id: "flowsight",
    name: "FlowSight AI",
    tagline: "Supply Chain Visibility Blueprint",
    description:
      "Real-time exception handling, supply visibility, and agentic logistics orchestration.",
    overview:
      "FlowSight unifies supplier data streams, deploys automated exception monitoring agents, and recommends rerouting solutions when delays or supply shortfalls occur.",
    features: [
      "Real-time supply chain telemetry & anomaly detection",
      "Agentic recommendation engine for reordering and rerouting",
      "End-to-end trace logs for logistics audits",
      "Multi-agent coordination under specific SLAs",
    ],
    industries: ["Supply Chain", "Logistics", "FMCG"],
    relatedCaseStudy: "flowsight-ai",
    demoHref: "/case-studies/flowsight-ai",
    businessProblem: "FMCG/logistics networks lack real-time visibility and suffer from exception processing lag.",
    pilotValidation: "Deploy agentic workflows to monitor supplier data and recommend reroute solutions.",
  },
  {
    id: "ai-readiness-studio",
    name: "AI Readiness Studio",
    tagline: "Strategic Roadmap Blueprint",
    description:
      "AI opportunity mapping, data readiness assessments, and structured adoption roadmaps.",
    overview:
      "AI Readiness Studio provides custom frameworks to audit your company's processes, profile your databases, and identify high-value, safe-to-build AI use cases.",
    features: [
      "Custom AI opportunity prioritization matrices",
      "Data availability and quality profiling templates",
      "Risk and compliance assessment checklists",
      "90-day technical implementation blueprints",
    ],
    industries: ["Enterprise", "Banking", "Healthcare", "Insurance"],
    demoHref: "/#book-slot",
    businessProblem: "Teams struggle to align on where AI can drive the most ROI safely.",
    pilotValidation: "Deliver a structured AI readiness matrix, data profile, and a de-risked 90-day roadmap.",
  },
  {
    id: "ai-training-platform",
    name: "AI Workforce Training Platform",
    tagline: "Adoption & Upskilling Blueprint",
    description:
      "Role-based AI training and hands-on workshops for safe, productive AI integration.",
    overview:
      "Our AI Workforce Training Blueprint guides teams through role-specific training modules, teaching developers, operations, and business stakeholders how to build and use AI safely.",
    features: [
      "Role-specific prompt engineering and agent building curriculums",
      "Safe AI usage workshops (DPDP, PII, and security guidelines)",
      "Hands-on prototyping sprint models for operations teams",
      "Ongoing developer mentorship and architecture audit blueprints",
    ],
    industries: ["Enterprise", "Government", "Banking", "Healthcare"],
    demoHref: "/#book-slot",
    businessProblem: "Ad-hoc AI tool usage leads to compliance risks and low productivity gains.",
    pilotValidation: "Enable role-based upskilling with practical workshops on safe AI workflows.",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export const productIds = products.map((p) => p.id);
