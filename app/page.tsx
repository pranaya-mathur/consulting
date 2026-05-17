import { BookCTA } from "@/components/sections/book-cta";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HomeOverview } from "@/components/sections/home-overview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeOverview />
      <HowItWorks />
      <ImpactMetrics />
      <Testimonials />
      <FAQ />
      <BookCTA />
    </>
  );
}
