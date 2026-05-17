import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function BookCTA() {
  return (
    <section
      id="book-slot"
      className="section-padding"
      aria-labelledby="book-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <div className="border border-border/80 bg-card/50 px-8 py-16 md:px-16 md:py-20">
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              {siteConfig.bookingBadge}
            </p>
            <h2
              id="book-heading"
              className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Book a consultation with our architects
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              A 45-minute discovery call to assess your AI readiness, compliance
              requirements, and production roadmap.
            </p>
            <div className="mt-10">
              <Button asChild variant="accent" size="lg">
                <Link href="mailto:hello@veriedge.ai?subject=Consultation%20Slot">
                  Book Consultation Slot
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
