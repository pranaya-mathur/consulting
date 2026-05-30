"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import {
  caseStudies,
  industries,
  technologies,
} from "@/lib/case-studies";
import { cn } from "@/lib/utils";

const HOMEPAGE_LIMIT = 6;

type CaseStudiesProps = {
  showAll?: boolean;
  showIntro?: boolean;
};

export function CaseStudies({
  showAll = false,
  showIntro = true,
}: CaseStudiesProps) {
  const [industry, setIndustry] = useState<string>("All");
  const [technology, setTechnology] = useState<string>("All");

  const filtered = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchIndustry =
        industry === "All" || study.industry === industry;
      const matchTech =
        technology === "All" ||
        study.technologies.includes(technology);
      return matchIndustry && matchTech;
    });
  }, [industry, technology]);

  const displayed = showAll ? filtered : filtered.slice(0, HOMEPAGE_LIMIT);

  return (
    <section
      id="case-studies"
      className="section-padding border-b border-border/60"
      aria-labelledby="case-studies-heading"
    >
      <div className="container-narrow">
        {showIntro && (
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-accent uppercase font-mono">
              Blueprints
            </p>
            <h2
              id="case-studies-heading"
              className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Industry blueprints we can adapt for your workflow
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Explore our sandbox-validated solution blueprints and pilot reference architectures designed for compliance-first applications.
            </p>
          </FadeIn>
        )}

        <FadeIn delay={showIntro ? 0.05 : 0}>
          <div className={`flex flex-col gap-6 sm:flex-row sm:flex-wrap ${showIntro ? "mt-12" : ""}`}>
            <FilterGroup
              label="Industry"
              options={industries}
              value={industry}
              onChange={setIndustry}
            />
            <FilterGroup
              label="Technology"
              options={technologies}
              value={technology}
              onChange={setTechnology}
            />
          </div>
        </FadeIn>

        <div className={`grid gap-6 md:grid-cols-2 ${showIntro ? "mt-12" : "mt-8"}`}>
          {displayed.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        {displayed.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No case studies match the selected filters.
          </p>
        )}

        {!showAll && filtered.length > HOMEPAGE_LIMIT && (
          <FadeIn>
            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link href="/case-studies">
                  View all {caseStudies.length} blueprints
                </Link>
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-muted-foreground uppercase">
        {label}
      </p>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label={`Filter by ${label}`}
      >
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "rounded-sm border px-3 py-1.5 text-sm transition-colors",
              value === opt
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
