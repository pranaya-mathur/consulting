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
    title: "VeriShield",
    subtitle: "Sovereign Guard AI",
    industry: "Enterprise",
    technologies: ["RAG", "Edge AI", "Policy Guardrails"],
    metrics: [
      { label: "Hallucination reduction", value: "94%" },
      { label: "Policy violations caught", value: "99.2%" },
      { label: "Edge latency", value: "<120ms" },
    ],
    summary:
      "Sovereign guard layer for enterprise LLM deployments with verifiable outputs and zero data egress.",
    challenge:
      "A national bank needed AI assistants that never leaked PII or generated unverifiable claims across 40+ branches.",
    solution:
      "VeriShield enforces retrieval-grounded responses, policy graphs, and cryptographic audit trails at the edge.",
    outcomes: [
      "Deployed across 40 branches with on-prem inference",
      "Full DPDP audit trail for every agent interaction",
      "Regulatory sign-off in 6 weeks",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "swarmnova-ai",
    title: "SwarmNova AI",
    subtitle: "Production Multi-Agent Orchestration",
    industry: "Enterprise",
    technologies: ["Multi-Agent", "Orchestration"],
    metrics: [
      { label: "Workflow automation", value: "78%" },
      { label: "Agent coordination uptime", value: "99.9%" },
      { label: "Time to deploy", value: "3 weeks" },
    ],
    summary:
      "Coordinated agent swarms for complex B2B workflows with human-in-the-loop checkpoints.",
    challenge:
      "A logistics conglomerate struggled to chain 12 specialist agents without deadlocks or duplicate actions.",
    solution:
      "SwarmNova provides a production orchestration layer with state machines, retry logic, and observability.",
    outcomes: [
      "12 agents orchestrated with deterministic handoffs",
      "Centralized tracing across all agent decisions",
      "78% reduction in manual workflow steps",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "pulseforge-ai",
    title: "PulseForge AI",
    subtitle: "B2B AI Workflow Orchestrator",
    industry: "Enterprise",
    technologies: ["Multi-Agent", "Workflow Automation"],
    metrics: [
      { label: "Process cycle time", value: "-62%" },
      { label: "Error rate", value: "-89%" },
      { label: "ROI within", value: "4 months" },
    ],
    summary:
      "End-to-end B2B workflow automation with agentic decision nodes and SLA monitoring.",
    challenge:
      "A manufacturing firm had 200+ approval workflows stuck in email chains and spreadsheets.",
    solution:
      "PulseForge maps workflows to agent graphs with escalation rules and real-time dashboards.",
    outcomes: [
      "200 workflows digitized in 90 days",
      "SLA compliance improved to 97%",
      "Full audit logs for compliance reviews",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "mediflow-rcm",
    title: "MediFlow RCM",
    subtitle: "Healthcare Revenue Cycle Agent",
    industry: "Healthcare",
    technologies: ["RAG", "Multi-Agent"],
    metrics: [
      { label: "Claim denial reduction", value: "41%" },
      { label: "Days in A/R", value: "-18" },
      { label: "Coder productivity", value: "+35%" },
    ],
    summary:
      "Agentic revenue cycle management with coding assistance and denial prediction.",
    challenge:
      "A 500-bed hospital network faced rising claim denials and coder burnout.",
    solution:
      "MediFlow RCM agents triage claims, suggest codes, and flag denial risks before submission.",
    outcomes: [
      "41% fewer preventable denials",
      "HIPAA-compliant audit on every recommendation",
      "Integration with existing EHR in 8 weeks",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "mediflow-clinical",
    title: "MediFlow Clinical",
    subtitle: "AI-Powered Patient Onboarding & Workflow",
    industry: "Healthcare",
    technologies: ["RAG", "Multi-Agent", "Edge AI"],
    metrics: [
      { label: "Intake time", value: "-55%" },
      { label: "Form completion rate", value: "96%" },
      { label: "Staff hours saved", value: "2,400/mo" },
    ],
    summary:
      "Clinical intake automation with multilingual support and EHR-integrated agent workflows.",
    challenge:
      "A multi-specialty clinic spent 45 minutes per patient on intake across 8 languages.",
    solution:
      "MediFlow Clinical guides patients through smart forms, validates data, and syncs to EHR.",
    outcomes: [
      "Intake reduced from 45 to 20 minutes",
      "8-language support with verified translations",
      "Zero PHI stored outside hospital perimeter",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "govgig-ai",
    title: "GovGig AI",
    subtitle: "Government Scheme Intelligence",
    industry: "Government",
    technologies: ["RAG", "Multilingual"],
    metrics: [
      { label: "Citizen queries resolved", value: "87%" },
      { label: "Scheme discovery rate", value: "+3.2x" },
      { label: "Languages supported", value: "12" },
    ],
    summary:
      "Citizen-facing scheme navigation with verified retrieval from official government sources.",
    challenge:
      "A state welfare department fielded 50,000 monthly queries about eligibility across 200 schemes.",
    solution:
      "GovGig indexes official scheme documents with citation-backed answers in regional languages.",
    outcomes: [
      "87% queries resolved without human escalation",
      "Every answer linked to source document",
      "DPDP-compliant consent flows",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "yojana-ai",
    title: "Yojana-AI",
    subtitle: "Multi-Agent Government Schemes Navigator",
    industry: "Government",
    technologies: ["Multi-Agent", "RAG"],
    metrics: [
      { label: "Scheme match accuracy", value: "91%" },
      { label: "Application completion", value: "+68%" },
      { label: "Agent handoffs/day", value: "12K" },
    ],
    summary:
      "Multi-agent navigator that matches citizens to schemes and guides application completion.",
    challenge:
      "Citizens abandoned applications because scheme rules were fragmented across departments.",
    solution:
      "Yojana-AI deploys specialist agents for eligibility, documentation, and submission tracking.",
    outcomes: [
      "91% accurate scheme matching",
      "68% more completed applications",
      "Cross-department agent coordination",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "nyaysetu",
    title: "NyaySetu",
    subtitle: "Legal ReflectionRAG System",
    industry: "Legal",
    technologies: ["Reflection RAG", "RAG"],
    metrics: [
      { label: "Citation accuracy", value: "97.8%" },
      { label: "Research time saved", value: "70%" },
      { label: "Case law coverage", value: "2M+ docs" },
    ],
    summary:
      "ReflectionRAG for legal research with self-correcting retrieval and verified citations.",
    challenge:
      "A legal aid NGO needed reliable case research without hallucinated statutes or citations.",
    solution:
      "NyaySetu uses reflection loops to validate retrieval, cross-check citations, and flag uncertainty.",
    outcomes: [
      "97.8% citation accuracy on benchmark set",
      "70% faster legal research for paralegals",
      "Uncertainty scores on every response",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "claimlens-ai",
    title: "ClaimLens AI",
    subtitle: "Insurance Claims Fraud Detection",
    industry: "Insurance",
    technologies: ["RAG", "Multi-Agent"],
    metrics: [
      { label: "Fraud detection rate", value: "+34%" },
      { label: "False positives", value: "-28%" },
      { label: "Claims processed/day", value: "15K" },
    ],
    summary:
      "Claims intelligence with fraud signals, triage automation, and auditable decision trails.",
    challenge:
      "A top-5 insurer lost ₹120Cr annually to undetected fraudulent claims.",
    solution:
      "ClaimLens agents analyze documents, cross-reference patterns, and surface risk scores with evidence.",
    outcomes: [
      "34% improvement in fraud detection",
      "Auditable decision trail for IRDAI compliance",
      "15K claims triaged daily",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "flowsight-ai",
    title: "FlowSight AI",
    subtitle: "Supply Chain Control Tower",
    industry: "Supply Chain",
    technologies: ["Multi-Agent", "RAG"],
    metrics: [
      { label: "Exception resolution", value: "-48%" },
      { label: "Inventory accuracy", value: "99.1%" },
      { label: "Supplier visibility", value: "100%" },
    ],
    summary:
      "Real-time supply chain orchestration with agentic exception handling and predictive alerts.",
    challenge:
      "An FMCG distributor lacked visibility across 800 suppliers and 3 distribution hubs.",
    solution:
      "FlowSight unifies data streams, deploys exception agents, and recommends corrective actions.",
    outcomes: [
      "48% faster exception resolution",
      "End-to-end traceability dashboard",
      "Agent-driven reorder recommendations",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "nutriforge-ai",
    title: "NutriForge AI",
    subtitle: "Intelligent Nutrition & Food AI Platform",
    industry: "Nutrition",
    technologies: ["RAG", "Edge AI"],
    metrics: [
      { label: "Personalization accuracy", value: "89%" },
      { label: "User engagement", value: "+2.1x" },
      { label: "API latency", value: "<80ms" },
    ],
    summary:
      "Nutrition intelligence platform with verified food databases and personalized meal planning.",
    challenge:
      "A wellness startup needed scientifically grounded recommendations without generic LLM advice.",
    solution:
      "NutriForge grounds every recommendation in verified nutrition databases with allergen checks.",
    outcomes: [
      "89% user satisfaction on meal plans",
      "2.1x engagement vs. previous chatbot",
      "Edge deployment for offline markets",
    ],
    demoHref: "#live-demo",
  },
  {
    slug: "desidesk-ai",
    title: "DesiDesk AI",
    subtitle: "Multilingual Enterprise FAQ & Support Chatbot",
    industry: "Enterprise",
    technologies: ["RAG", "Multilingual", "Multi-Agent"],
    metrics: [
      { label: "First-contact resolution", value: "82%" },
      { label: "Languages supported", value: "14" },
      { label: "Support cost reduction", value: "45%" },
    ],
    summary:
      "Enterprise support with multilingual RAG, escalation agents, and CRM integration.",
    challenge:
      "A telecom operator handled 2M monthly support tickets across 14 languages with inconsistent answers.",
    solution:
      "DesiDesk deploys retrieval-grounded support agents with seamless human handoff.",
    outcomes: [
      "82% first-contact resolution",
      "45% reduction in L1 support costs",
      "Consistent answers across all channels",
    ],
    demoHref: "#live-demo",
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
