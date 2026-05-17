import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";

const pages = [
  {
    href: "/products",
    title: "Products",
    description:
      "Five production-ready AI platforms — sovereign guard, claims, government, supply chain, and clinical.",
  },
  {
    href: "/case-studies",
    title: "Case Studies",
    description:
      "Twelve deployments with measurable outcomes across regulated industries.",
  },
  {
    href: "/live-demo",
    title: "Live Demo",
    description: "Try VeriShield — policy enforcement and verification in real time.",
  },
  {
    href: "/services",
    title: "Services",
    description:
      "Strategy, production RAG, multi-agent orchestration, and AI governance.",
  },
];

export function HomeOverview() {
  return (
    <section className="section-padding border-b border-border/60">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Explore
          </h2>
          <p className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-foreground">
            Dedicated pages for every part of our practice
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pages.map((page, index) => (
            <FadeIn key={page.href} delay={index * 0.05}>
              <Link
                href={page.href}
                className="group flex h-full flex-col border border-border/80 bg-card/50 p-8 transition-colors hover:border-accent/40 hover:bg-card/80"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                  {page.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {page.description}
                </p>
                <span className="mt-6 text-sm font-medium text-foreground">
                  View {page.title.toLowerCase()} →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
