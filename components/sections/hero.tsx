"use client";

import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="section-padding border-b border-border/60"
      aria-labelledby="hero-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            {hero.eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1
            id="hero-heading"
            className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.1]"
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
            <Button asChild variant="accent" size="lg">
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            {hero.credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
