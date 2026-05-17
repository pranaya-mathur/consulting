import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Products } from "@/components/sections/products";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Products",
  description: `Production-ready AI platforms by ${siteConfig.name} — VeriShield, ClaimLens, GovGig, FlowSight, and MediFlow Clinical.`,
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Production-ready AI platforms"
        description="Sovereign, auditable systems designed for regulated industries and enterprise scale."
      />
      <Products showIntro={false} />
    </>
  );
}
