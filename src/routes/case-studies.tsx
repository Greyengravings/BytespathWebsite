import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Bytespath" },
      { name: "description", content: "Outcomes shipped to live BFSI production: fraud, claims, lending and compliance." },
    ],
  }),
  component: Cases,
});

const cases = [
  {
    tag: "Banking", n: "Case 01",
    title: "Top-5 private bank dismantles CNP fraud in 90 days",
    body: "Bytespath's behavioural risk fabric replaced legacy rule engines with sub-second graph-based scoring across 14M daily transactions, recovering ₹240Cr of projected fraud exposure within two quarters.",
    metrics: ["92% detection", "-60% false alerts"],
  },
  {
    tag: "Insurance", n: "Case 02",
    title: "Health insurer automates 71% of claim adjudications",
    body: "Document AI plus decision orchestration for a tier-1 health insurer collapsed average claim TAT from nine days to under 36 hours while improving fraud catch rate by 28%.",
    metrics: ["3.2x throughput", "41% cost cut"],
  },
  {
    tag: "NBFC", n: "Case 03",
    title: "Digital NBFC scales to ₹4,200Cr book on AI-scored cohorts",
    body: "Alternate-data credit scoring layered with policy-as-code helped a digital NBFC underwrite thin-file borrowers profitably across nine states.",
    metrics: ["Defaults < 2.1%", "Approvals +24%"],
  },
  {
    tag: "Fintech", n: "Case 04",
    title: "Cross-border PSP becomes RBI-PA-PG ready",
    body: "We designed and built the entire compliance, monitoring and reporting stack required for the PSP's RBI authorisation journey.",
    metrics: ["100% audit coverage", "0 critical observations"],
  },
];

function Cases() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-12">
        <div className="eyebrow">Case Studies</div>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
          Outcomes shipped to <span className="text-gradient">live BFSI production.</span>
        </h1>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {cases.map((c) => (
          <article key={c.n} className="card-panel p-8">
            <div className="flex items-center justify-between">
              <span className="pill pill-dot">{c.tag}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.n}</span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold leading-snug">{c.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-5 text-xs">
              {c.metrics.map((m, i) => (
                <span key={m} className="text-muted-foreground">
                  {m}{i < c.metrics.length - 1 && <span className="mx-2 text-[oklch(0.7_0.18_295)]">·</span>}
                </span>
              ))}
              <Link to="/contact" className="ml-auto inline-flex items-center gap-1 text-[oklch(0.78_0.16_295)] hover:underline">
                Discuss this <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
