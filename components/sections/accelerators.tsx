"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, FileText, Globe, HeartPulse, Activity, Search, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

// Map IDs to specific Lucide icons for rich visual feedback
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  verishield: ShieldCheck,
  claimlens: FileText,
  govgig: Globe,
  mediflow: HeartPulse,
  flowsight: Activity,
  "ai-readiness-studio": Search,
  "ai-training-platform": BookOpen,
};

export function SolutionAccelerators() {
  return (
    <section
      id="accelerators"
      className="section-padding border-b border-border/60 bg-muted/20"
      aria-labelledby="accelerators-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            Reusable Blueprints
          </p>
          <h2
            id="accelerators-heading"
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Pilot-ready AI accelerators
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            Instead of starting every engagement from zero, VeriEdge AI uses working prototypes and reusable blueprints that can be adapted to your business workflow.
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
                    "hover:border-accent/40 hover:bg-card/80"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-sm bg-accent/10 text-accent">
                      <IconComponent className="size-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-wider bg-accent/5 px-2.5 py-0.5 rounded-full">
                      Blueprint
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Problem & Pilot Triage */}
                  <div className="mt-6 flex-1 space-y-4 border-t border-border/40 pt-4">
                    <div>
                      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Business Problem
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-foreground/80">
                        {item.businessProblem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-accent uppercase tracking-wider">
                        What a Pilot Validates
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {item.pilotValidation}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border/40 pt-4">
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
