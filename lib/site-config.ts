export const siteConfig = {
  name: "VeriEdge AI",
  tagline: "Build AI systems your business can verify, govern, and trust.",
  description:
    "VeriEdge AI is a founder-led AI consulting studio helping companies move from AI experiments to production-ready RAG systems, AI agents, workflow automation, and AI governance.",
  url: "https://veriedge.ai",
  bookingBadge: "Now accepting limited pilot engagements",
  nav: [
    { label: "Accelerators", href: "/products" },
    { label: "Blueprints", href: "/case-studies" },
    { label: "Live Demo", href: "/live-demo" },
    { label: "Services", href: "/services" },
  ],
  hero: {
    eyebrow: "Founder-led AI consulting studio",
    headline: "Build AI systems your business can verify, govern, and trust",
    subheadline:
      "VeriEdge AI helps companies turn AI ideas into production-ready RAG systems, AI agents, workflow automation, and governance-ready architectures using pilot-ready accelerators.",
    primaryCta: { label: "Book an AI Opportunity Call", href: "/#book-slot" },
    secondaryCta: {
      label: "View Solution Accelerators",
      href: "/products",
    },
    credentials: [
      "RAG Systems",
      "AI Agents",
      "Governance-Ready AI",
      "Pilot-First Delivery",
    ],
  },
} as const;
