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

## GitHub Repository Portfolio Mapping
Our Solution Accelerators and Reference Blueprints are 1-to-1 grounded with actual, operational codebase repositories rather than slide decks or concepts:

| Accelerator / Blueprint | Source GitHub Repository | Primary Tech Stack & Features |
| :--- | :--- | :--- |
| **1. VeriShield / Sovereign-AI** | `pranaya-mathur/My-Product-v1` (branch: `gcp-deploy-branch`) | FastAPI proxy, YAML-driven policy graphs, LangGraph agent, 3-tier routing, Docker/Helm. |
| **2. AetherAI Workforce Training** | `pranaya-mathur/AI-Workforce-Training-and-Adoption-Platform` | Next.js, TS, Tailwind, Supabase database, prompt labs, manager Recharts reports. |
| **3. MediFlow** | `pranaya-mathur/medi_flow` | Patient onboarding intake dashboard, FastAPI, Postgres, Celery background queues, local MinIO. |
| **4. GovGig AI** | `pranaya-mathur/govgig_updated` | FAR/DFARS compliance RAG, Reciprocal Rank Fusion, pgvector hybrid search, proposal drafting. |
| **5. Yojana-AI** | `pranaya-mathur/Yojana-AI` | Multilingual citizen scheme discovery, Qdrant database, Corrective RAG (CRAG) loops, Ollama. |
| **6. ClaimLens AI** | `pranaya-mathur/ClaimLens_App` | Claims fraud classifier, 145 CatBoost features, OpenCV forgery scanning, Neo4j, Groq explanations. |
| **7. DesiDesk RAG** | `pranaya-mathur/desidesk-rag-microservice` | Multilingual English/Hindi FAQ agent, ChromaDB, SQLite session memory, Redis caching. |
| **8. FlowSight AI** | `pranaya-mathur/flowsight-ai-` | Shipment delay ML prediction, XGBoost/LightGBM/CatBoost ensemble, DuckDB feature store. |
| **9. AI Readiness Intelligence Studio** | `pranaya-mathur/AI-Readiness-Intelligence-Studio` | Opportunity discovery audits, stateful 9-node LangGraph coordinator, PDF/DOCX/PPTX report export. |

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

## Content Files to Edit
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

