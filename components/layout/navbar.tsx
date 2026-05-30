"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background transition-colors duration-200",
        scrolled ? "border-border shadow-sm" : "border-transparent",
      )}
    >
      <nav
        className="container-narrow flex h-16 items-center justify-between gap-6 px-6 md:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <div className="flex flex-col items-end gap-1">
            <Button asChild variant="default" size="sm">
              <Link href="#book-slot" id="book-slot">
                Opportunity Call
              </Link>
            </Button>
            <span className="text-[10px] font-semibold text-accent uppercase tracking-wider font-mono">
              {siteConfig.bookingBadge}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="px-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4" role="list">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-sm text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 border-t border-border pt-4">
              <Button asChild variant="default" className="w-full">
                <Link href="#book-slot" onClick={() => setMobileOpen(false)}>
                  Opportunity Call
                </Link>
              </Button>
              <p className="mt-2 text-center text-[10px] font-semibold text-accent uppercase tracking-wider font-mono">
                {siteConfig.bookingBadge}
              </p>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
