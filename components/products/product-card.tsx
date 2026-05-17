import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  index?: number;
};

export function ProductCard({
  id,
  name,
  tagline,
  description,
  index = 0,
}: ProductCardProps) {
  return (
    <FadeIn delay={index * 0.05}>
      <article
        className={cn(
          "group flex h-full flex-col border border-border/80 bg-card/50 p-8 backdrop-blur-[2px] transition-colors duration-300",
          "hover:border-accent/40 hover:bg-card/80",
        )}
      >
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {name}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{tagline}</p>
        </div>

        <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <Link
          href={`/products/${id}`}
          className="mt-8 inline-flex text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          Learn more
        </Link>
      </article>
    </FadeIn>
  );
}
