import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArchitectureFlow } from "@/components/case-studies/architecture-flow";
import { Button } from "@/components/ui/button";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} — ${study.subtitle}`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article>
      <header className="section-padding border-b border-border/60">
        <div className="container-narrow">
          <Link
            href="/case-studies"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← All case studies
          </Link>
          <p className="mt-8 text-sm font-medium tracking-wide text-muted-foreground uppercase">
            {study.industry} · {study.technologies.join(", ")}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-2 text-lg text-accent">{study.subtitle}</p>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            {study.summary}
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-8 border-y border-border/60 py-10">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <dt className="text-2xl font-semibold text-foreground md:text-3xl">
                  {m.value}
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="section-padding border-b border-border/60">
        <div className="container-narrow max-w-3xl space-y-16">
          <div>
            <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Challenge
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Solution
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Outcomes
            </h2>
            <ul className="mt-4 space-y-3">
              {study.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex gap-3 text-muted-foreground leading-relaxed"
                >
                  <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-border/60 bg-muted/30">
        <div className="container-narrow">
          <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Architecture
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Reference architecture for {study.title} — policy guard, verified
            retrieval, and audited outputs.
          </p>
          <div className="mt-8">
            <ArchitectureFlow />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-6 sm:flex-row sm:items-center">
          <Button asChild variant="accent">
            <Link href={study.demoHref}>Try Similar Demo</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#book-slot">Book Consultation Slot</Link>
          </Button>
          <p className="text-sm text-red-600 dark:text-red-400 sm:ml-auto">
            {siteConfig.bookingBadge}
          </p>
        </div>
      </section>
    </article>
  );
}
