import { FadeIn } from "@/components/motion/fade-in";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      className="section-padding border-b border-border/60 bg-muted/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <h2
            id="testimonials-heading"
            className="text-sm font-medium tracking-wide text-muted-foreground uppercase font-mono"
          >
            Sandbox Evaluation Reviews
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.organization} delay={index * 0.06}>
              <blockquote className="flex h-full flex-col border border-border/80 bg-card/50 p-8">
                <p className="flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-border/60 pt-6">
                  <cite className="not-italic">
                    <p className="text-sm font-medium text-foreground">
                      {item.author}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.organization}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
