import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
  index?: number;
};

export function CaseStudyCard({ study, index = 0 }: CaseStudyCardProps) {
  return (
    <FadeIn delay={index * 0.04}>
      <article className="flex h-full flex-col border border-border/80 bg-card/50 p-8 transition-colors hover:border-accent/40 hover:bg-card/80">
        <div>
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {study.industry}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {study.title}
          </h3>
          <p className="mt-1 text-sm text-accent">{study.subtitle}</p>
        </div>

        <ul className="mt-6 grid grid-cols-3 gap-4 border-y border-border/60 py-6">
          {study.pilotSignals.map((m) => (
            <li key={m.label}>
              <p className="text-lg font-semibold text-foreground">{m.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {study.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={`/case-studies/${study.slug}`}
            className="text-sm font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
          >
            View blueprint
          </Link>
          <Link
            href={study.demoHref}
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Try similar demo
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}
