import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/products";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

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
            <p className="mt-1 text-xs font-medium text-accent">{product.tagline}</p>
          </div>
          <div className="shrink-0">
            {getMaturityBadge(product.maturity)}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1 mt-4">
          {product.techStack.map((tech) => (
            <span 
              key={tech} 
              className="text-[9px] font-mono bg-muted/80 text-muted-foreground px-1.5 py-0.5 border border-border/30 rounded-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Source Repo & Status */}
        <div className="mt-6 border-t border-border/40 pt-4">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1.5 truncate max-w-[70%]">
              <GithubIcon className="size-3.5 shrink-0 text-muted-foreground/60 group-hover:text-accent transition-colors duration-200" />
              <span className="truncate font-mono font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-200" title={product.sourceRepo}>
                {product.sourceRepo.split(" ")[0]}
              </span>
            </div>
            <span className="text-[9px] font-semibold text-accent/90 bg-accent/5 px-1.5 py-0.5 rounded-xs shrink-0 max-w-[30%] truncate" title={product.status}>
              {product.status.split(" / ")[0]}
            </span>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4 flex items-center justify-between">
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
