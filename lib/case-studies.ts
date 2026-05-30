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
    title: "VeriShield AI",
    subtitle: "AI Governance & Verification Layer",
    industry: "Enterprise",
    technologies: ["RAG", "Edge AI", "Policy Guardrails"],
    metrics: [
      { label: "Grounding evaluation", value: "98.4%" },
      { label: "Policy check rate", value: "98.8%" },
      { label: "Edge latency", value: "<120ms" },
    ],
    summary:
      "Sovereign guard layer for enterprise LLM deployments with verifiable outputs and zero data egress.",
    challenge:
      "Designed for multi-branch regulated architectures requiring strict local data residency and verifiable claims.",
    solution:
      "VeriShield enforces retrieval-grounded responses, policy graphs, and cryptographic audit trails at the edge.",
    outcomes: [
      "Validated in a simulated banking environment mimicking 40+ branches",
      "Full DPDP-compliant audit trails for every agent interaction",
      "Designed to meet regulatory audit timelines within a 6-week evaluation cycle",
    ],
    demoHref: "/live-demo",
  },
  {
    slug: "mediflow-clinical",
    title: "MediFlow Clinical",
    subtitle: "Healthcare Intake Automation Blueprint",
    industry: "Healthcare",
    technologies: ["RAG", "Multi-Agent", "Edge AI"],
    metrics: [
      { label: "Intake reduction", value: "-55%" },
      { label: "Form completion rate", value: "94.6%" },
      { label: "Staff hours saved (est.)", value: "240/mo" },
    ],
    summary:
      "Clinical intake automation with multilingual support and EHR-integrated agent workflows.",
    challenge:
      "A blueprint designed to reduce patient intake times and handle patient queries across multiple regional languages.",
    solution:
      "MediFlow Clinical guides patients through smart forms, validates data, and syncs into EHR sandboxes.",
    outcomes: [
      "Intake time reduced by 55% in patient user test sprints",
      "8-language support verified with local translation files",
      "Zero patient health information (PHI) stored outside edge perimeter",
    ],
    demoHref: "/products/mediflow",
  },
  {
    slug: "claimlens-ai",
    title: "ClaimLens AI",
    subtitle: "Insurance Claims Intelligence Blueprint",
    industry: "Insurance",
    technologies: ["RAG", "Multi-Agent"],
    metrics: [
      { label: "Fraud signals found", value: "+34%" },
      { label: "False positive rate", value: "-28%" },
      { label: "Triage throughput", value: "15K/day" },
    ],
    summary:
      "Claims intelligence with fraud signals, triage automation, and auditable decision trails.",
    challenge:
      "Designed to automate triage of claims documents and flag potential risk indicators with citation-backed evidence.",
    solution:
      "ClaimLens agents analyze documents, cross-reference rules, and surface risk scores with verified evidence.",
    outcomes: [
      "34% improvement in fraud signal detection on historical sandboxed datasets",
      "Auditable decision trails matching IRDAI-aligned compliance guidelines",
      "Triaged 15K mock claims daily in validation stress-tests",
    ],
    demoHref: "/products/claimlens",
  },
  {
    slug: "flowsight-ai",
    title: "FlowSight AI",
    subtitle: "Supply Chain Visibility Blueprint",
    industry: "Supply Chain",
    technologies: ["Multi-Agent", "RAG"],
    metrics: [
      { label: "Exception speed", value: "-48%" },
      { label: "Inventory match rate", value: "97.8%" },
      { label: "Supplier visibility", value: "100%" },
    ],
    summary:
      "Real-time supply chain orchestration with agentic exception handling and predictive alerts.",
    challenge:
      "A control tower blueprint for FMCG networks to monitor logistics exceptions and recommend corrective actions.",
    solution:
      "FlowSight unifies data streams, deploys exception agents, and recommends corrective actions.",
    outcomes: [
      "48% faster exception resolution in simulated logistics environments",
      "End-to-end traceability dashboard and mock reordering pipeline",
      "Agent-driven reorder and reroute recommendations validated",
    ],
    demoHref: "/products/flowsight",
  },
  {
    slug: "govgig-ai",
    title: "GovGig / Yojana-AI",
    subtitle: "Citizen Scheme Navigation Blueprint",
    industry: "Government",
    technologies: ["RAG", "Multilingual"],
    metrics: [
      { label: "Queries resolved", value: "84.2%" },
      { label: "Scheme discovery", value: "+3.2x" },
      { label: "Languages supported", value: "12" },
    ],
    summary:
      "Citizen-facing scheme navigation with verified retrieval from official government sources.",
    challenge:
      "Designed for public service agencies to index official documents and match citizen eligibility criteria.",
    solution:
      "GovGig / Yojana-AI indexes official scheme documents with citation-backed answers in regional languages.",
    outcomes: [
      "84.2% queries successfully resolved in pilot validation set without escalation",
      "Every answer linked directly to official source document citations",
      "DPDP-compliant citizens' consent flows implemented in prototype",
    ],
    demoHref: "/products/govgig",
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
