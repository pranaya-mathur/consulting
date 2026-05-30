import { BookCTA } from "@/components/sections/book-cta";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { Services } from "@/components/sections/services";
import { SolutionAccelerators } from "@/components/sections/accelerators";
import { EngagementModel } from "@/components/sections/engagement-model";
import { FounderCredibility } from "@/components/sections/founder-credibility";
import { CaseStudies } from "@/components/sections/case-studies";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <Services showIntro={true} />
      <SolutionAccelerators />
      <EngagementModel />
      <FounderCredibility />
      <CaseStudies showIntro={true} />
      <ImpactMetrics />
      <Testimonials />
      <FAQ />
      <BookCTA />
    </>
  );
}
