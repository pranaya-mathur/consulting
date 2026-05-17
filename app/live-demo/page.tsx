import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { LiveDemo } from "@/components/sections/live-demo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Live Demo",
  description: `Try VeriShield live — sovereign guard AI demo by ${siteConfig.name}.`,
};

export default function LiveDemoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live demo"
        title="Try VeriShield Live"
        description="Policy enforcement, citation grounding, and hallucination detection."
      />
      <LiveDemo showIntro={false} />
    </>
  );
}
