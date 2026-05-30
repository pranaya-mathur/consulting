"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-32"
      aria-labelledby="hero-heading"
    >
      {/* Premium ambient background blur */}
      <div
        className="absolute top-0 right-1/4 -z-10 size-[32rem] rounded-full bg-accent/5 blur-[128px] dark:bg-accent/10"
        aria-hidden="true"
      />

      <div className="container-narrow">
        <FadeIn>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            {hero.eyebrow}
          </span>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1
            id="hero-heading"
            className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.75rem] lg:leading-[1.1] font-sans"
          >
            {hero.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {hero.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="accent" size="lg" className="group">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-20 border-t border-border/40 pt-10">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Studio Practice Focus Areas
            </p>
            <ul className="mt-6 flex flex-wrap gap-3" role="list">
              {hero.credentials.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 border border-border/60 bg-card/30 px-4 py-2 text-xs font-medium text-foreground backdrop-blur-[2px]"
                >
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
