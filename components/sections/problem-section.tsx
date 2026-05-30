"use client";

import { AlertTriangle, Database, HelpCircle, ShieldAlert, Cpu, Timer } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const problems = [
  {
    icon: Timer,
    title: "AI pilots never reach production",
    description:
      "Most proofs of concept get stuck in endless demo loops because they lack the robust error handling, scalability, and predictable latency needed for live software.",
  },
  {
    icon: ShieldAlert,
    title: "Chatbots hallucinate or give weak answers",
    description:
      "Generic LLM prompt templates suffer from grounding issues. Without a dedicated verification layer, agents will confidently generate inaccurate facts.",
  },
  {
    icon: Database,
    title: "Scattered organizational knowledge",
    description:
      "Valuable institutional knowledge is trapped in unstructured PDFs, dense wikis, Slack archives, and legacy tools, leaving teams unable to retrieve clean facts.",
  },
  {
    icon: HelpCircle,
    title: "Unknown ROI or feasibility",
    description:
      "Organizations struggle to identify which AI use cases are high-impact and technically viable versus which are over-hyped and high-risk.",
  },
  {
    icon: AlertTriangle,
    title: "Missing compliance & guardrails",
    description:
      "Regulated industries require human approval flows, deterministic data privacy controls, and cryptographic audit logs that standard LLM providers omit.",
  },
  {
    icon: Cpu,
    title: "Manual operations drain high-value time",
    description:
      "Highly skilled specialists spend hours triaging documents, matching rules, or copying data when coordinated AI agents could automate routine L1 workflows reliably.",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-padding border-b border-border/60 bg-muted/10"
      aria-labelledby="problem-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            The Reality of AI Adoption
          </p>
          <h2
            id="problem-heading"
            className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Most AI initiatives fail between demo and production
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            We help teams bridge that gap with focused pilots, grounded AI systems, and implementation roadmaps that business and technical stakeholders can trust.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <FadeIn key={prob.title} delay={index * 0.05}>
                <div className="flex h-full flex-col border border-border/60 bg-card/40 p-6 backdrop-blur-[2px] hover:border-accent/30 transition-colors duration-300">
                  <div className="flex size-10 items-center justify-center rounded-sm bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {prob.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {prob.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
