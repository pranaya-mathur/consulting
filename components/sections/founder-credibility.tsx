"use client";

import { UserCheck, ShieldCheck, FileSpreadsheet, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const highlights = [
  {
    icon: Sparkles,
    title: "9 production-grade accelerators — not mockups",
    description: "Every accelerator is backed by a private code repository: LangGraph agents, vector pipelines, ML ensembles, document AI, and governance layers — built and tested against real data.",
  },
  {
    icon: ShieldCheck,
    title: "Verifiable production-readiness from day one",
    description: "VeriShield runs automated red-team CI. Yojana-AI has live AWS Fargate deployment with Terraform IaC. ClaimLens has a 4-engine fraud pipeline with Prometheus monitoring. No theoretical architectures.",
  },
  {
    icon: FileSpreadsheet,
    title: "Full IP transfer — Helm charts, Terraform, and runbooks included",
    description: "You receive source code, Helm/Terraform deployment artifacts, Alembic migrations, Prometheus dashboards, and architectural decision records. Your team can operate and extend the system independently.",
  },
  {
    icon: UserCheck,
    title: "Pilot-first risk mitigation with measurable outcomes",
    description: "Yojana-AI delivers 85% answer quality at $20/month operational cost. FlowSight achieves 84.7% delay prediction accuracy. ClaimLens processes claims in <2 seconds. Pilots produce measurable baselines, not slide promises.",
  },
];

export function FounderCredibility() {
  return (
    <section
      id="founder"
      className="section-padding border-b border-border/60 bg-muted/20"
      aria-labelledby="founder-heading"
    >
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-accent uppercase">
              Practitioner Led
            </p>
            <h2
              id="founder-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Built by a hands-on AI practitioner
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              VeriEdge AI was founded around deep practical implementation experience across RAG systems, multi-agent workflows, AI governance, healthcare AI, insurance AI, government-service intelligence, workforce training, and AI readiness tooling.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Unlike slide-first advisory engagements, VeriEdge AI is built around hands-on implementation, working code, practical architecture, and clean handoff. We write the code, map the vector databases, configure the LLM routers, and build the custom guardrails that allow your teams to scale AI safely.
            </p>
            <div className="mt-8 border-t border-border/60 pt-6">
              <blockquote className="border-l-2 border-accent pl-4 text-sm italic text-foreground/80 leading-relaxed">
                &ldquo;We don&apos;t lock you into a black-box proprietary platform. We build modular systems on your infrastructure, ensuring your company fully owns the IP, data flows, and code assets.&rdquo;
              </blockquote>
            </div>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.05}>
                  <div className="flex h-full flex-col border border-border/60 bg-card/40 p-5 hover:border-accent/30 transition-colors duration-300">
                    <div className="flex size-8 items-center justify-center rounded-sm bg-accent/10 text-accent">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
