"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, FileText, Globe, HeartPulse, Activity, Search, BookOpen, MessageSquare, Layers } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

// Map IDs to specific Lucide icons for rich visual feedback
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  verishield: ShieldCheck,
  "aetherai-training": BookOpen,
  mediflow: HeartPulse,
  govgig: Globe,
  "yojana-ai": Search,
  claimlens: FileText,
  "desidesk-rag": MessageSquare,
  flowsight: Activity,
  "ai-readiness-studio": Layers,
};

export function SolutionAccelerators() {
  const getMaturityBadge = (maturity: string) => {
    switch (maturity) {
      case "Production-ready":
        return (
          <span className="text-[10px] font-semibold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-sm">
            Production-ready
          </span>
        );
      case "Pilot-ready":
        return (
          <span className="text-[10px] font-semibold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-sm">
            Pilot-ready
          </span>
        );
      case "In active development":
        return (
          <span className="text-[10px] font-semibold tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-sm">
            In active dev
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-semibold tracking-wider bg-muted/10 text-muted-foreground border border-border/40 px-2 py-0.5 rounded-sm">
            {maturity}
          </span>
        );
    }
  };

  return (
    <section
      id="accelerators"
      className="section-padding border-b border-border/60 bg-muted/20"
      aria-labelledby="accelerators-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            Private Implementation Portfolio
          </p>
          <h2
            id="accelerators-heading"
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Client-safe AI accelerators
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            We bypass slide-decks. VeriEdge AI leverages mature, pre-built reference architectures and private implementation patterns to fast-track and de-risk your operational AI pilots.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => {
            const IconComponent = ICON_MAP[item.id] || FileText;

            return (
              <FadeIn key={item.id} delay={index * 0.05}>
                <article
                  className={cn(
                    "group flex h-full flex-col border border-border/80 bg-card/50 p-6 backdrop-blur-[2px] transition-all duration-300",
                    "hover:border-accent/40 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/5"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-sm bg-accent/10 text-accent group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="size-5" />
                    </div>
                    {getMaturityBadge(item.maturity)}
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider font-mono">
                      {item.architecture.pattern}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {item.tagline}
                    </p>

                    {/* Client-Safe Highlights */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.clientSafeHighlights.map((high) => (
                        <span 
                          key={high} 
                          className="text-[9px] font-medium bg-muted/80 text-muted-foreground px-2 py-0.5 border border-border/30 rounded-full"
                        >
                          {high}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {item.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-[9px] font-mono bg-accent/5 text-accent/90 px-1.5 py-0.5 border border-accent/10 rounded-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Problem & Pilot Triage */}
                  <div className="mt-6 flex-1 space-y-4 border-t border-border/40 pt-4">
                    <div>
                      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">
                        Business Problem
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-foreground/80">
                        {item.businessProblem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-accent uppercase tracking-wider font-mono">
                        What a Pilot Validates
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {item.pilotValidation}
                      </p>
                    </div>
                  </div>

                  {/* Status & Explore Accelerator */}
                  <div className="mt-5 border-t border-border/40 pt-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {item.status.split(" / ")[0]}
                    </span>
                    <Link
                      href={`/products/${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground underline-offset-4 hover:text-accent hover:underline group/btn"
                    >
                      Explore Accelerator
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
