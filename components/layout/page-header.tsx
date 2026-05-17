import Link from "next/link";

type PageHeaderProps = {
  backHref?: string;
  backLabel?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({
  backHref = "/",
  backLabel = "Back to home",
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="section-padding border-b border-border/60">
      <div className="container-narrow">
        <Link
          href={backHref}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← {backLabel}
        </Link>
        {eyebrow && (
          <p className="mt-8 text-sm font-medium tracking-wide text-muted-foreground uppercase">
            {eyebrow}
          </p>
        )}
        <h1
          className={`${eyebrow ? "mt-4" : "mt-6"} text-4xl font-semibold tracking-tight text-foreground md:text-5xl`}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
