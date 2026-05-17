export const howItWorksSteps = [
  {
    step: "01",
    title: "Discovery & risk assessment",
    description:
      "We map your data landscape, compliance requirements, and AI readiness — identifying sovereign deployment constraints upfront.",
  },
  {
    step: "02",
    title: "Architecture & verification design",
    description:
      "Production-grade RAG and multi-agent blueprints with hallucination controls, audit trails, and DPDP-aligned data flows.",
  },
  {
    step: "03",
    title: "Build & integrate",
    description:
      "Iterative development on your infrastructure — edge, on-prem, or hybrid — with continuous evaluation against your KPIs.",
  },
  {
    step: "04",
    title: "Deploy & govern",
    description:
      "Production rollout with monitoring, policy enforcement, and handover documentation for your internal teams.",
  },
] as const;

export const impactMetrics = [
  { value: 94, suffix: "%", label: "Avg. hallucination reduction" },
  { value: 40, suffix: "+", label: "Enterprise deployments" },
  { value: 12, suffix: "", label: "Industries served" },
  { value: 6, suffix: " wks", label: "Avg. time to production" },
] as const;

export const services = [
  {
    title: "Sovereign AI Strategy",
    description:
      "Roadmaps for DPDP-compliant, IndiaAI-aligned AI adoption with verifiable outcomes and clear ROI models.",
  },
  {
    title: "Production RAG Systems",
    description:
      "Hallucination-resistant retrieval pipelines with citation grounding, evaluation harnesses, and edge deployment.",
  },
  {
    title: "Multi-Agent Orchestration",
    description:
      "Coordinated agent architectures for complex workflows — with observability, retry logic, and human checkpoints.",
  },
  {
    title: "AI Governance & Audit",
    description:
      "Policy enforcement, audit trails, and compliance documentation for regulated industries.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "VeriEdge delivered a production RAG system our compliance team could actually sign off on. The audit trail alone saved us months of internal review.",
    author: "Chief Technology Officer",
    organization: "National Financial Services Firm",
  },
  {
    quote:
      "Their multi-agent approach cut our claims processing time in half while improving fraud detection. Every decision is traceable.",
    author: "Head of Digital Innovation",
    organization: "Leading Insurance Provider",
  },
  {
    quote:
      "We needed scheme intelligence in 12 languages with verified sources. VeriEdge built it sovereign — no citizen data left our servers.",
    author: "Director, Digital Governance",
    organization: "State Government Department",
  },
] as const;

export const faqs = [
  {
    question: "How is VeriEdge AI different from generic AI consultancies?",
    answer:
      "We specialize exclusively in production-grade, verifiable AI — RAG, multi-agent systems, and sovereign edge deployment. Every engagement includes hallucination controls, audit trails, and DPDP compliance by design.",
  },
  {
    question: "Do you deploy on our infrastructure?",
    answer:
      "Yes. We deploy on-prem, at the edge, or in your private cloud. Your data never leaves your perimeter unless you explicitly require hybrid architectures.",
  },
  {
    question: "What is VeriShield?",
    answer:
      "VeriShield is our sovereign guard layer for LLM deployments — enforcing retrieval-grounded responses, policy graphs, and cryptographic audit trails. You can try the live demo on this site.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Discovery to production typically runs 8–16 weeks depending on complexity. Our average time to first production deployment is 6 weeks for focused RAG or agent projects.",
  },
  {
    question: "Are you aligned with the IndiaAI Mission?",
    answer:
      "Yes. Our architectures prioritize sovereign AI, verifiable outputs, and inclusive multilingual access — core principles of the IndiaAI Mission and DPDP Act.",
  },
  {
    question: "How do consultation slots work?",
    answer:
      "We offer limited strategy slots each month. Book via the CTA on this page — you'll receive a 45-minute discovery call with a senior architect to assess fit and scope.",
  },
] as const;

export const liveDemoFeatures = [
  "Real-time policy enforcement on LLM outputs",
  "Retrieval-grounded responses with source citations",
  "Hallucination detection and confidence scoring",
  "Full audit log export for compliance review",
] as const;
