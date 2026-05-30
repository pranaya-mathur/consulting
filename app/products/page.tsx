import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Products } from "@/components/sections/products";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Accelerators",
  description: `Sovereign, reusable pilot-ready accelerators by ${siteConfig.name} — including VeriShield, ClaimLens, GovGig, MediFlow, and FlowSight.`,
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Accelerators"
        title="Pilot-ready AI accelerators"
        description="Reusable code blueprints and pre-built prototype layers to fast-track your AI implementation safely."
      />
      <Products showIntro={false} />
    </>
  );
}
