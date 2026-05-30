"use client";

import { BarChart3, Rocket, Settings2 } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const steps = [
  {
    step: "01",
    icon: BarChart3,
    title: "AI Readiness Audit",
    duration: "7–10 days",
    description:
      "Identify high-value AI use cases, profile data/process readiness, and create a practical roadmap with clear effort, risk, and ROI assumptions.",
  },
  {
    step: "02",
    icon: Rocket,
    title: "Focused AI Pilot",
    duration: "4–6 weeks",
    description:
      "Build a high-fidelity working prototype around one critical workflow using RAG, multi-agent pipelines, process automation, or verification layers.",
  },
  {
    step: "03",
    icon: Settings2,
    title: "Production Implementation",
    duration: "8–16 weeks",
    description:
      "Harden the validated pilot for real usage with enterprise-grade integrations, SLA monitoring, comprehensive evaluation, security patches, and full team handover.",
  },
];

export function EngagementModel() {
  return (
    <section
      id="engagement-model"
      className="section-padding border-b border-border/60 bg-muted/10"
      aria-labelledby="engagement-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            How to Work with Us
          </p>
          <h2
            id="engagement-heading"
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Start small. Validate value. Scale safely.
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
            We minimize upfront engineering risk by aligning technical checkpoints directly with commercial milestones.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.step} delay={index * 0.06}>
                <div className="relative flex h-full flex-col border border-border/60 bg-card/30 p-8 hover:border-accent/30 transition-all duration-300">
                  <div className="absolute top-6 right-8 text-4xl font-bold tracking-tight text-accent/15 select-none font-mono">
                    {item.step}
                  </div>

                  <div className="flex size-12 items-center justify-center rounded-sm bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </div>

                  <div className="mt-6 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider">
                      Duration: {item.duration}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
