export const howItWorksSteps = [
  {
    step: "01",
    title: "Discovery & opportunity mapping",
    description:
      "We analyze your workflows, review your data feasibility, and identify high-value AI use cases designed for actual business outcomes.",
  },
  {
    step: "02",
    title: "Solution prototyping",
    description:
      "We design custom RAG and agent blueprints incorporating hallucination guardrails, human checkpoints, and clean audit logs.",
  },
  {
    step: "03",
    title: "Pilot development",
    description:
      "We build a working prototype on your infrastructure — edge, on-prem, or private cloud — validating the system with your core team.",
  },
  {
    step: "04",
    title: "Implementation & handoff",
    description:
      "We harden the system, integrate it with your databases, deliver extensive documentation, and enable complete team handoff.",
  },
] as const;

export const impactMetrics = [
  { value: 9, suffix: "", label: "Production-grade accelerators (code in vault)" },
  { value: 4, suffix: "-6 wks", label: "Focused pilot-to-validation timeline" },
  { value: 5, suffix: "+", label: "Regulated industries served" },
  { value: 1, suffix: "", label: "Founder-led engineering studio (no subcontracting)" },
] as const;

export const services = [
  {
    title: "RAG & Knowledge Intelligence",
    description: "Document-grounded retrieval systems built with hybrid FAISS+BM25 or Qdrant vector stores, domain-specific embeddings (InLegalBERT, BGE-M3), and self-correcting quality loops — for legal, government, and operational workflows."
  },
  {
    title: "AI Agents & Workflow Automation",
    description: "LangGraph-orchestrated multi-agent pipelines for patient intake automation, fraud triage, supply chain prediction, and consulting discovery — with stateful human-in-loop checkpoints and full IP handoff."
  },
  {
    title: "AI Governance & VeriShield Layer",
    description: "3-tier deterministic safety architecture: fast regex/pattern checks, semantic signal detection, and LangGraph audit agent. DPDP 2023-aligned PII detection. Zero-trust API surface. Supports air-gapped and on-premise deployment."
  },
  {
    title: "AI Adoption & Workforce Training",
    description: "Role-specific AI learning paths, interactive prompt labs, and safety scenario exercises via AetherAI — an enterprise SaaS platform with Supabase auth, progress tracking, and manager adoption analytics dashboards."
  },
] as const;

export const testimonials = [
  {
    quote:
      "The VeriShield pilot architecture gave our team a clear path for compliance review. The audit trails are exactly what our governance team wanted to see.",
    author: "VP of Engineering (Design Partner)",
    organization: "FinTech Governance Pilot — VeriShield Evaluation",
  },
  {
    quote:
      "ClaimLens showed us that we can automate a significant portion of our triage without risking hallucination. The auditable evidence trail is a game changer.",
    author: "Head of Claims Innovation (Design Partner)",
    organization: "Insurance Claims Pilot — ClaimLens AI Evaluation",
  },
  {
    quote:
      "Evaluating Yojana-AI allowed us to verify scheme intelligence across multiple regional languages. Grounding responses with citations solved our trust issue.",
    author: "Technical Consultant",
    organization: "Government Services Pilot — Yojana-AI Evaluation",
  },
] as const;

export const faqs = [
  {
    question: "How is VeriEdge AI different from generic enterprise consultancies?",
    answer:
      "We are a practitioner-led AI studio focused on concrete engineering rather than high-level slides. We build actual working prototypes and customizable accelerators, allowing you to validate real-world value through a 4–6 week pilot before committing to major software investments.",
  },
  {
    question: "Do you deploy on our infrastructure?",
    answer:
      "Yes. We prioritize security and compliance. We support private-cloud, on-prem, and controlled deployment patterns so sensitive data can remain within approved environments.",
  },
  {
    question: "What is VeriShield?",
    answer:
      "VeriShield (Sovereign-AI v4.1.0-LTS) is our production-hardened LLM guardrail platform. It runs a 3-tier Control Tower: fast regex/PII checks (Tier 1, <5ms), embedding-based semantic detection (Tier 2), and a LangGraph audit agent for policy reasoning (Tier 3). It is India DPDP 2023-aware, zero-trust authenticated, and supports air-gapped deployment for banks, insurers, and healthcare organizations.",
  },
  {
    question: "How does the engagement model work?",
    answer:
      "We start with a 7–10 day AI Readiness Audit to map high-value opportunities. We then build a focused 4–6 week AI Pilot. Once validated, we help transition the pilot to full production over 8–16 weeks with complete handoff.",
  },
  {
    question: "Do we own the intellectual property?",
    answer:
      "Absolutely. We build directly on your cloud or on-premise infrastructure. All custom wrappers, agent orchestration pipelines, database configurations, and integration adapters are fully owned by your company from day one. You retain complete intellectual property rights with zero vendor lock-in.",
  },
  {
    question: "How can we get started?",
    answer:
      "Book an AI Opportunity Call. We will discuss your current workflows, data reality, risk areas, and the smallest useful pilot your team can validate.",
  },
] as const;

export const liveDemoFeatures = [
  "Real-time policy enforcement on LLM outputs",
  "Retrieval-grounded responses with source citations",
  "Hallucination detection and confidence scoring",
  "Full audit log export for compliance review",
] as const;
