import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const footerLinks = siteConfig.nav;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container-narrow section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-base font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>DPDP Compliant · IndiaAI Mission Aligned</p>
        </div>
      </div>
    </footer>
  );
}
