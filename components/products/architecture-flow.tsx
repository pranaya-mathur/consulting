"use client";

import { Layers, ShieldCheck, Zap, Server } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Product } from "@/lib/products";

type ArchitectureFlowProps = {
  architecture: Product["architecture"];
};

export function ArchitectureFlow({ architecture }: ArchitectureFlowProps) {
  return (
    <div className="space-y-10">
      {/* Pattern and Overview Header */}
      <FadeIn>
        <div className="border-l-2 border-accent pl-4 py-1">
          <p className="text-xs font-mono font-medium text-accent uppercase tracking-wider">
            Client-Safe Reference Pattern
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {architecture.pattern}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {architecture.description}
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* Flow Stepper Pipeline */}
        <FadeIn delay={0.05}>
          <div className="border border-border/60 bg-card/20 p-6 rounded-sm backdrop-blur-[2px] h-full">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-6 font-mono">
              System Data Flow Pipeline
            </h4>
            <div className="relative border-l border-border/80 pl-6 ml-3 space-y-6">
              {architecture.flow.map((step, idx) => (
                <div key={step} className="relative group">
                  {/* Step Number Circle */}
                  <span className="absolute -left-[35px] top-0 flex size-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-background ring-4 ring-card transition-transform duration-200 group-hover:scale-110">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-foreground leading-relaxed group-hover:text-accent transition-colors duration-200">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Core Component Grid */}
        <FadeIn delay={0.1}>
          <div className="border border-border/60 bg-card/20 p-6 rounded-sm backdrop-blur-[2px] h-full space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              Core Architecture Components
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {architecture.components.map((comp) => (
                <div
                  key={comp}
                  className="flex items-start gap-2.5 border border-border/50 bg-card/45 p-3.5 rounded-sm hover:border-accent/30 transition-all duration-200"
                >
                  <Layers className="size-4 shrink-0 mt-0.5 text-accent/80" />
                  <span className="text-xs leading-relaxed text-foreground/80 font-medium">
                    {comp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 3-Pillar Governance, Deployment, and Integration Board */}
      <FadeIn delay={0.15}>
        <div className="grid gap-6 sm:grid-cols-3 border-t border-border/60 pt-8">
          {/* Deployment Column */}
          <div className="border border-border/60 bg-card/30 p-5 rounded-sm space-y-4 hover:border-accent/20 transition-colors duration-300">
            <div className="flex items-center gap-2 text-accent">
              <Server className="size-4" />
              <h5 className="text-xs font-semibold uppercase tracking-wider font-mono">
                Deployment Models
              </h5>
            </div>
            <ul className="space-y-2.5">
              {architecture.deploymentOptions.map((opt) => (
                <li key={opt} className="text-xs text-muted-foreground flex gap-2 leading-relaxed">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent/60" />
                  {opt}
                </li>
              ))}
            </ul>
          </div>

          {/* Governance Column */}
          <div className="border border-border/60 bg-card/30 p-5 rounded-sm space-y-4 hover:border-accent/20 transition-colors duration-300">
            <div className="flex items-center gap-2 text-accent">
              <ShieldCheck className="size-4" />
              <h5 className="text-xs font-semibold uppercase tracking-wider font-mono">
                Governance Controls
              </h5>
            </div>
            <ul className="space-y-2.5">
              {architecture.governanceControls.map((ctrl) => (
                <li key={ctrl} className="text-xs text-muted-foreground flex gap-2 leading-relaxed">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent/60" />
                  {ctrl}
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations Column */}
          <div className="border border-border/60 bg-card/30 p-5 rounded-sm space-y-4 hover:border-accent/20 transition-colors duration-300">
            <div className="flex items-center gap-2 text-accent">
              <Zap className="size-4" />
              <h5 className="text-xs font-semibold uppercase tracking-wider font-mono">
                Integration Boundaries
              </h5>
            </div>
            <ul className="space-y-2.5">
              {architecture.integrationPoints.map((pt) => (
                <li key={pt} className="text-xs text-muted-foreground flex gap-2 leading-relaxed">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent/60" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
