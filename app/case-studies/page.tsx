import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { CaseStudies } from "@/components/sections/case-studies";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Production AI deployments by ${siteConfig.name} across government, healthcare, insurance, and enterprise.`,
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Proven outcomes across industries"
        description="Twelve production deployments with measurable impact."
      />
      <CaseStudies showAll showIntro={false} />
    </>
  );
}
