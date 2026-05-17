"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { impactMetrics } from "@/lib/content";

export function ImpactMetrics() {
  return (
    <section
      className="section-padding border-b border-border/60"
      aria-labelledby="impact-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <h2
            id="impact-heading"
            className="text-sm font-medium tracking-wide text-muted-foreground uppercase"
          >
            Impact at scale
          </h2>
        </FadeIn>

        <dl className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 0.05}>
              <div>
                <dt className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                  />
                </dt>
                <dd className="mt-3 text-sm text-muted-foreground">
                  {metric.label}
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
