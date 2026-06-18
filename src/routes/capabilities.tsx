import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import {
  Brain, Shield, FileCheck2, Radio, Layers, ScanText, Database, Workflow,
} from "lucide-react";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Bytespath" },
      { name: "description", content: "AI, risk, compliance, document intelligence, data platforms and digital transformation for BFSI." },
    ],
  }),
  component: Capabilities,
});

const items = [
  { icon: Brain, title: "AI & ML Engineering", body: "Production-grade models for fraud, credit, KYC and conversational service — with MLOps, monitoring and explainability." },
  { icon: Shield, title: "Risk Intelligence", body: "A unified risk fabric across credit, fraud, market, operational and compliance signals." },
  { icon: FileCheck2, title: "Compliance Technology", body: "Policy-as-code, automated regulatory reporting and audit-grade evidence chains for RBI, IRDAI and SEBI." },
  { icon: Radio, title: "Real-time Monitoring", body: "Stream-based detection layers serving sub-second decisions at bank-scale throughput." },
  { icon: Layers, title: "Enterprise Software", body: "Modular platforms — core lending, claims, onboarding, treasury — built to integrate, not lock you in." },
  { icon: ScanText, title: "Document AI", body: "OCR, IDP and LLM extraction for KYC, claims, loan files and regulatory filings." },
  { icon: Database, title: "Data Platforms", body: "A unified, governed data fabric across core banking, channels and partners." },
  { icon: Workflow, title: "Digital Transformation", body: "Journey re-design, automation orchestration and channel modernization for measurable ROI." },
];

function Capabilities() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-16">
        <div className="eyebrow">Capabilities</div>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
          A single-vendor depth across the entire <span className="text-gradient">BFSI technology stack.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          From AI deployment to compliance automation — every capability is delivered by senior BFSI specialists, not generalists.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="card-panel p-7">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[oklch(0.27_0.07_295_/_0.7)] text-[oklch(0.78_0.16_295)]">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-lg font-semibold">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </section>

      <section className="my-28">
        <div className="ring-violet relative overflow-hidden rounded-3xl bg-panel p-14">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                Need a capability tailored to <span className="text-gradient">your charter?</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                Our BFSI engagement leaders shape solutions around regulatory, customer and commercial constraints — never generic delivery templates.
              </p>
            </div>
            <Link to="/contact" className="btn-primary">Talk to a Specialist</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
