import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { CaseStudies } from "@/components/sections/case-studies";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blueprints",
  description: `Sovereign AI solution blueprints and sandbox-validated pilot reference architectures by ${siteConfig.name}.`,
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blueprints"
        title="Reference blueprints for your workflow"
        description="Explore our sandbox-validated, customizable solution blueprints designed for regulated industries."
      />
      <CaseStudies showAll showIntro={false} />
    </>
  );
}
