# VeriEdge AI Consulting Website

This is the official website for **VeriEdge AI**, a premium, founder-led AI consulting studio. 

Instead of presenting as an inflated enterprise consultancy, the website is positioned around **honest, practitioner-led expertise, pilot-ready reusable accelerators, and sandboxed proof-of-concepts** designed to help companies move successfully from AI experiments to governed, production-grade applications.

---

## Brand Positioning
VeriEdge AI helps companies turn AI ideas into production-ready RAG systems, AI agents, workflow automation, and governance-ready architectures. Our engagement philosophy prioritizes:
1. **Pilot-First Validation**: Prove technical feasibility and business value through a 4–6 week focused pilot before deploying enterprise-wide.
2. **Practitioner-Led Execution**: Work directly with hands-on builders who write the code, manage vector databases, and design custom policy guard layers.
3. **Full IP Ownership**: No vendor lock-in. Custom pipelines and configurations are deployed on your infrastructure (on-prem, edge, private cloud) and owned entirely by you.

---

## Private Accelerator Portfolio
Our Solution Accelerators and Reference Blueprints are built on top of a mature, private implementation library containing pre-vetted system patterns rather than simple concepts. This allows us to rapidly customize:
- **LLM Guardrail & Verification Gateway (VeriShield)**: Sit before and after LLM/RAG setups to scan input PII, enforce YAML policy rules, and index semantic audit logs.
- **Role-Based AI Enablement Portal (AetherAI)**: Learning paths, prompt sandboxes, and quiz modules to align teams with security and productivity guidelines.
- **Patient Intake & Clinic Workflow System (MediFlow)**: Digital patient registration and secure local document routing pipelines.
- **Contracting Compliance RAG Assistant (GovGig AI)**: FAR/DFARS compliance RAG with hybrid search and proposal draft compilers.
- **Public-Service Scheme Discovery RAG (Yojana-AI)**: Citizen scheme matching RAG with corrective self-healing retrieval loops.
- **Multi-Modal Claims Risk Pipeline (ClaimLens AI)**: Tabular claim scoring, document authenticity scans, and relational connection analytics.
- **Multilingual Support RAG Microservice (DesiDesk RAG)**: Low-latency, bilingual support FAQs with sqlite session memory and caching.
- **Predictive Supply-Chain Intelligence Pipeline (FlowSight AI)**: Logistics exception prediction and risk duration estimation.
- **AI Opportunity Discovery Workspace (AI Readiness Studio)**: Multi-agent discovery audits compiling prioritized roadmaps and PPTX/PDF deliverables.

*All source repositories, branches, and raw configuration modules are maintained inside a secure, private engineering vault to protect client IP and proprietary frameworks.*

---

## Pages & Routing Structure
The website maintains all original routing, updated with high-impact, professional copy:
- **Homepage (`/`)**: A conversion-optimized flow introducing our positioning, problem statement, core services, 9 reusable pilot-ready accelerators, engagement model, design partner evaluations, and direct booking calls.
- **Solution Accelerators (`/products`)**: Displays our 9 customizable blueprints. Dynamic detail pages reside at `/products/[slug]`.
- **Reference Blueprints (`/case-studies`)**: Visualizes structural references and pilot outcomes. Dynamic detail pages reside at `/case-studies/[slug]`.
- **Live Demo (`/live-demo`)**: Interactive sandbox playground showcasing our **VeriShield** policy guardrail layer in real time.
- **Services (`/services`)**: Full overview of our 4 practice areas (RAG, Agents, Governance, Adoption Sprints).

---

## Technical Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router) + TypeScript
- **Styling**: Tailwind CSS + Custom Vanilla CSS for flexible glassmorphic themes
- **Animations**: Framer Motion (FadeIn, custom entrance animations)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

### Prerequisites
Make sure you have Node.js (v18+) installed.

### Installation
Clone the repository and install the dependencies inside the project folder:
```bash
cd veriedge-ai
npm install
```

### Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Verification Commands
Before pushing code, run these commands to verify code quality:
```bash
# Check for lints and formatting issues
npm run lint

# Build production bundle
npm run build
```

---

## Content Data Layer
To customize or add new elements, modify these data files:
- **Site Config (`lib/site-config.ts`)**: Defines brand taglines, hero CTA details, primary badge availability, and main menu lists.
- **Copy Arrays (`lib/content.ts`)**: Hosts services descriptions, sandboxed testimonials, FAQs, and main process metrics.
- **Accelerator Blueprints (`lib/products.ts`)**: Lists the 9 solution accelerators, their respective business problems, and pilot objectives.
- **Industry Blueprints (`lib/case-studies.ts`)**: Outlines sandbox-tested case studies, Reference architectures, and technical metrics.

---

## Future Roadmap
- **Calendly Integration**: Connect Calendly to the primary "Book an AI Opportunity Call" CTAs to allow instant scheduling.
- **Interactive Contact Form**: Add a direct API-grounded request form to capture structured lead profiles (data reality, timelines, target workflows).
- **VeriShield Live Backend**: Connect the interactive live demo console to a mock vector retrieval or model evaluation API to show custom grounding check graphs.
- **Founder / Studio Story Page**: Create an `/about` route detailing the team's hands-on deployment history across highly regulated sectors.
- **Real Client Case Studies**: Transition sandbox blueprints into live client deployment success stories once initial production implementation phases are complete.
