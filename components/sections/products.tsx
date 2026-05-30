import { ProductCard } from "@/components/products/product-card";
import { FadeIn } from "@/components/motion/fade-in";
import { products } from "@/lib/products";

type ProductsProps = {
  showIntro?: boolean;
};

export function Products({ showIntro = true }: ProductsProps) {
  return (
    <section
      id="products"
      className="section-padding border-b border-border/60 bg-muted/30"
      aria-labelledby="products-heading"
    >
      <div className="container-narrow">
        {showIntro && (
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Products
            </p>
            <h2
              id="products-heading"
              className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Pilot-ready AI accelerators
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Reusable code blueprints and pre-built prototype layers to fast-track your AI implementation safely.
            </p>
          </FadeIn>
        )}

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showIntro ? "mt-16" : ""}`}>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
