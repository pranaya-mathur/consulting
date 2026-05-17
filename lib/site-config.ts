export const siteConfig = {
  name: "VeriEdge AI",
  tagline:
    "Verifiable Intelligence at the Edge. Built for Bharat, Ready for the World.",
  description:
    "Enterprise AI consulting for production-grade RAG, multi-agent systems, and hallucination-resistant sovereign intelligence — DPDP compliant and IndiaAI Mission aligned.",
  url: "https://veriedge.ai",
  bookingBadge: "Only 3 slots left in May 2026",
  nav: [
    { label: "Products", href: "/products" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Live Demo", href: "/live-demo" },
    { label: "Services", href: "/services" },
  ],
  hero: {
    eyebrow:
      "Verifiable Intelligence at the Edge · Built for Bharat, Ready for the World",
    headline: "Enterprise AI you can verify and trust",
    subheadline:
      "We design and deploy production-grade RAG and multi-agent systems — hallucination-resistant, DPDP compliant, and aligned with the IndiaAI Mission.",
    primaryCta: { label: "Try VeriShield Live", href: "/live-demo" },
    secondaryCta: {
      label: "Book Consultation Slot",
      href: "/#book-slot",
    },
    credentials: [
      "DPDP Compliant",
      "IndiaAI Mission Aligned",
      "Sovereign Edge Deployment",
    ],
  },
} as const;
