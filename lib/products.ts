import { siteConfig } from "@/lib/site-config";

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
};

export const products: Product[] = [
  {
    id: "verishield",
    name: "VeriShield",
    tagline: "Sovereign Guard AI",
    description:
      "Hallucination-resistant guardrails and policy enforcement for sovereign AI workloads at the edge.",
    overview:
      "VeriShield sits in front of your LLM stack — enforcing retrieval-grounded responses, policy graphs, and cryptographic audit trails without data leaving your perimeter.",
    features: [
      "Multi-tier detection (regex, embeddings, optional agents)",
      "Input and output scan phases for SDK integration",
      "DPDP-oriented PII detection helpers",
      "On-prem and edge deployment patterns",
    ],
    industries: ["Banking", "Government", "Enterprise"],
    relatedCaseStudy: "verishield",
    demoHref: "/live-demo",
  },
  {
    id: "claimlens",
    name: "ClaimLens AI",
    tagline: "Insurance Claims Intelligence",
    description:
      "Automated claims triage, fraud signals, and auditable decision trails for insurers.",
    overview:
      "ClaimLens agents analyze documents, cross-reference patterns, and surface risk scores with evidence — built for IRDAI-aligned audit requirements.",
    features: [
      "Claims triage and routing automation",
      "Fraud signal detection with citations",
      "Auditable decision trails",
      "Integration with core insurance systems",
    ],
    industries: ["Insurance"],
    relatedCaseStudy: "claimlens-ai",
    demoHref: "/case-studies/claimlens-ai",
  },
  {
    id: "govgig",
    name: "GovGig AI",
    tagline: "Government Scheme Intelligence",
    description:
      "Citizen-facing scheme navigation with verified retrieval and multilingual support.",
    overview:
      "GovGig indexes official scheme documents and returns citation-backed answers in regional languages — designed for sovereign, DPDP-compliant citizen services.",
    features: [
      "Verified retrieval from official sources",
      "12+ language support",
      "Consent-aware citizen flows",
      "Escalation to human agents",
    ],
    industries: ["Government"],
    relatedCaseStudy: "govgig-ai",
    demoHref: "/case-studies/govgig-ai",
  },
  {
    id: "flowsight",
    name: "FlowSight AI",
    tagline: "Supply Chain Control Tower",
    description:
      "Real-time orchestration, exception handling, and agentic workflows across your supply network.",
    overview:
      "FlowSight unifies supplier data, deploys exception agents, and recommends corrective actions across distribution hubs and partner networks.",
    features: [
      "Real-time exception detection",
      "Agentic reorder and reroute recommendations",
      "End-to-end traceability dashboard",
      "Multi-agent orchestration layer",
    ],
    industries: ["Supply Chain", "FMCG", "Logistics"],
    relatedCaseStudy: "flowsight-ai",
    demoHref: "/case-studies/flowsight-ai",
  },
  {
    id: "mediflow",
    name: "MediFlow Clinical",
    tagline: "AI-Powered Patient Onboarding & Workflow",
    description:
      "Clinical intake automation with HIPAA-ready audit logs and EHR-integrated agent workflows.",
    overview:
      "MediFlow Clinical guides patients through smart intake, validates data, and syncs to EHR — with multilingual support and zero PHI outside hospital perimeter.",
    features: [
      "Multilingual patient intake",
      "EHR-integrated agent workflows",
      "HIPAA-ready audit logs",
      "Clinical staff handoff checkpoints",
    ],
    industries: ["Healthcare"],
    relatedCaseStudy: "mediflow-clinical",
    demoHref: "/case-studies/mediflow-clinical",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export const productIds = products.map((p) => p.id);
