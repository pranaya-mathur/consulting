import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getProduct, productIds } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productIds.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <article>
      <header className="section-padding border-b border-border/60">
        <div className="container-narrow">
          <Link
            href="/products"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← All accelerators
          </Link>
          <p className="mt-8 text-sm font-medium tracking-wide text-accent">
            {product.tagline}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {product.overview}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Industries: {product.industries.join(" · ")}
          </p>
        </div>
      </header>

      <section className="section-padding border-b border-border/60">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Capabilities
          </h2>
          <ul className="mt-6 space-y-3">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-muted-foreground leading-relaxed"
              >
                <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button asChild variant="accent">
            <Link href={product.demoHref}>See in action</Link>
          </Button>
          {product.relatedCaseStudy && (
            <Button asChild variant="outline">
              <Link href={`/case-studies/${product.relatedCaseStudy}`}>
                View blueprint
              </Link>
            </Button>
          )}
          <Button asChild variant="outline">
            <Link href="/#book-slot">Book an AI Opportunity Call</Link>
          </Button>
          <p className="text-xs font-semibold text-accent uppercase tracking-wider font-mono sm:ml-auto">
            {siteConfig.bookingBadge}
          </p>
        </div>
      </section>
    </article>
  );
}
