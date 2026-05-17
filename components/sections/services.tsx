import { FadeIn } from "@/components/motion/fade-in";
import { services } from "@/lib/content";

type ServicesProps = { showIntro?: boolean };

export function Services({ showIntro = true }: ServicesProps) {
  return (
    <section
      id="services"
      className="section-padding border-b border-border/60"
      aria-labelledby="services-heading"
    >
      <div className="container-narrow">
        {showIntro && (
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              End-to-end AI consulting
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Strategy through production — with governance built in from day one.
            </p>
          </FadeIn>
        )}

        <div className={`grid gap-px border border-border/80 bg-border/80 md:grid-cols-2 ${showIntro ? "mt-16" : ""}`}>
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <article className="bg-background p-10">
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
