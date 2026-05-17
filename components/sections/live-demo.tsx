"use client";

import { useState } from "react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { liveDemoFeatures } from "@/lib/content";

const SAMPLE_PROMPTS = [
  "Summarize this policy document with citations",
  "Does this response violate our data residency policy?",
  "Verify claims in this customer-facing answer",
];

type LiveDemoProps = {
  showIntro?: boolean;
};

export function LiveDemo({ showIntro = true }: LiveDemoProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const runDemo = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput(null);
    await new Promise((r) => setTimeout(r, 800));
    setOutput(
      `VeriShield analysis complete.\n\n• Grounding score: 0.94\n• Policy check: PASS\n• Citations: 3 sources attached\n• Confidence: High\n\n"${input.slice(0, 80)}${input.length > 80 ? "…" : ""}" — Response verified against retrieval corpus. No PII egress detected.`,
    );
    setLoading(false);
  };

  return (
    <section
      id="live-demo"
      className="section-padding border-b border-border/60 bg-muted/30"
      aria-labelledby={showIntro ? "live-demo-heading" : undefined}
    >
      <div className="container-narrow">
        {showIntro && (
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Live demo
            </p>
            <h2
              id="live-demo-heading"
              className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Try VeriShield Live
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Experience sovereign guard AI — policy enforcement, citation
              grounding, and hallucination detection in real time.
            </p>
          </FadeIn>
        )}

        <FadeIn delay={showIntro ? 0.05 : 0}>
          <div className={`grid gap-12 lg:grid-cols-[1fr_320px] ${showIntro ? "mt-12" : ""}`}>
            <div className="border border-border/80 bg-card/50">
              <div className="border-b border-border/60 px-6 py-4">
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  VeriShield Console
                </p>
              </div>
              <div className="space-y-4 p-6">
                <label htmlFor="demo-input" className="sr-only">
                  Enter a prompt to analyze
                </label>
                <textarea
                  id="demo-input"
                  rows={4}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter a prompt or paste text to verify…"
                  className="w-full resize-none border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                <div className="flex flex-wrap gap-2">
                  {SAMPLE_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => setInput(prompt)}
                      className="border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <Button
                  variant="accent"
                  onClick={runDemo}
                  disabled={loading || !input.trim()}
                >
                  {loading ? "Analyzing…" : "Run VeriShield Check"}
                </Button>
                {output && (
                  <pre className="mt-4 whitespace-pre-wrap border border-border/60 bg-background p-4 text-xs leading-relaxed text-muted-foreground">
                    {output}
                  </pre>
                )}
              </div>
            </div>

            <ul className="space-y-6">
              {liveDemoFeatures.map((feature) => (
                <li
                  key={feature}
                  className="border-l-2 border-accent pl-4 text-sm text-muted-foreground"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
