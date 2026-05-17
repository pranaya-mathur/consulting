"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { howItWorksSteps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding border-b border-border/60 bg-muted/30"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            How we work
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            From discovery to governed production
          </h2>
        </FadeIn>

        <ol className="mt-16 space-y-0">
          {howItWorksSteps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.06}>
              <li className="grid gap-6 border-t border-border/60 py-12 md:grid-cols-[80px_1fr] md:gap-12">
                <span className="text-sm font-medium text-accent">{item.step}</span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
