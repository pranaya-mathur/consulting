import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Services } from "@/components/sections/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `AI consulting services by ${siteConfig.name} — strategy, production RAG, multi-agent systems, and governance.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="End-to-end AI consulting"
        description="Strategy through production — with governance built in from day one."
      />
      <Services showIntro={false} />
    </>
  );
}
