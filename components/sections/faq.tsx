"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding border-b border-border/60"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <h2
            id="faq-heading"
            className="text-sm font-medium tracking-wide text-muted-foreground uppercase"
          >
            Frequently asked questions
          </h2>
        </FadeIn>

        <dl className="mt-12 divide-y divide-border/60 border-y border-border/60">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={faq.question} delay={index * 0.03}>
                <div>
                  <dt>
                    <button
                      type="button"
                      id={`faq-button-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-4 py-6 text-left text-base font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {faq.question}
                      <ChevronDown
                        className={cn(
                          "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                  </dt>
                  <dd
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className={cn(
                      "overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-200",
                      isOpen ? "max-h-48 pb-6" : "max-h-0",
                    )}
                  >
                    {faq.answer}
                  </dd>
                </div>
              </FadeIn>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
