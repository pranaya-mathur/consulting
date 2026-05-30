import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({
  product,
  index = 0,
}: ProductCardProps) {
  const getMaturityBadge = (maturity: string) => {
    switch (maturity) {
      case "Production-ready":
        return (
          <span className="text-[10px] font-semibold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-sm">
            Production-ready
          </span>
        );
      case "Pilot-ready":
        return (
          <span className="text-[10px] font-semibold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-sm">
            Pilot-ready
          </span>
        );
      case "In active development":
        return (
          <span className="text-[10px] font-semibold tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-sm">
            In active dev
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-semibold tracking-wider bg-muted/10 text-muted-foreground border border-border/40 px-2 py-0.5 rounded-sm">
            {maturity}
          </span>
        );
    }
  };

  return (
    <FadeIn delay={index * 0.05}>
      <article
        className={cn(
          "group flex h-full flex-col border border-border/80 bg-card/50 p-8 backdrop-blur-[2px] transition-all duration-300",
          "hover:border-accent/40 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/5",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
              {product.name}
            </h3>
            <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider font-mono">
              {product.architecture.pattern}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{product.tagline}</p>
          </div>
          <div className="shrink-0">
            {getMaturityBadge(product.maturity)}
          </div>
        </div>

        {/* Client-Safe Highlights */}
        <div className="flex flex-wrap gap-1 mt-4">
          {product.clientSafeHighlights.map((high) => (
            <span 
              key={high} 
              className="text-[9px] font-medium bg-muted/85 text-muted-foreground px-2 py-0.5 border border-border/30 rounded-full"
            >
              {high}
            </span>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1 mt-2.5">
          {product.techStack.map((tech) => (
            <span 
              key={tech} 
              className="text-[9px] font-mono bg-accent/5 text-accent/90 px-1.5 py-0.5 border border-accent/10 rounded-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Status Line */}
        <div className="mt-6 border-t border-border/40 pt-4 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="font-mono text-foreground/70">
            Reference Pattern
          </span>
          <span className="text-[9px] font-semibold text-accent/90 bg-accent/5 px-1.5 py-0.5 rounded-xs shrink-0 max-w-[50%] truncate">
            {product.status.split(" / ")[0]}
          </span>
        </div>

        <div className="mt-4 border-t border-border/40 pt-4 flex items-center justify-between">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground underline-offset-4 hover:text-accent hover:underline group/btn"
          >
            Explore Accelerator
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}
