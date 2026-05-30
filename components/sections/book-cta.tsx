import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function BookCTA() {
  return (
    <section
      id="book-slot"
      className="section-padding bg-muted/10"
      aria-labelledby="book-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <div className="border border-border/80 bg-card/50 px-8 py-16 md:px-16 md:py-20 backdrop-blur-[2px]">
            <p className="text-sm font-semibold tracking-wider text-accent uppercase font-mono">
              {siteConfig.bookingBadge}
            </p>
            <h2
              id="book-heading"
              className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Have an AI idea, but not sure how to take it to production?
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
              Book a focused AI opportunity call. We will discuss your workflow, data reality, risk areas, and the smallest useful pilot your team can validate.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild variant="accent" size="lg" className="group">
                <Link href="mailto:hello@veriedge.ai?subject=AI%20Opportunity%20Call">
                  Book an AI Opportunity Call
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <span className="text-xs text-muted-foreground">
                No sales pitch — just a focused conversation with a hands-on builder.
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
