import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bytespath" },
      { name: "description", content: "A technology company built exclusively for the BFSI industry." },
    ],
  }),
  component: About,
});

const traits = [
  { k: "Singular Focus", v: "100% BFSI. No retail, no healthcare distractions." },
  { k: "Senior Team", v: "Average 14+ years across banks, insurers and fintechs." },
  { k: "Outcome Led", v: "Engagements measured on operational SLAs and ROI." },
  { k: "Trust Posture", v: "ISO 27001, SOC 2 Type II posture, RBI-aligned controls." },
];

const principles = [
  { n: "01", t: "Specialists, not generalists", b: "Every team member is BFSI-fluent. We speak your auditors' language before we speak yours." },
  { n: "02", t: "Production over prototypes", b: "We ship to regulated production environments. Demos don't move books — code does." },
  { n: "03", t: "Compliance is design", b: "Regulation is treated as a design input, not a checklist tacked on at QA." },
  { n: "04", t: "Operate what we build", b: "We stay accountable post-deployment with SLAs, run-books and real on-call rotations." },
];

function About() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-12">
        <div className="eyebrow">About</div>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
          A technology company built for <span className="text-gradient">one industry alone.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          Bytespath was founded on a simple bet — BFSI deserves vendors that think, design and ship
          like insiders, not generalist service shops moonlighting in financial services. Today we
          serve banks, insurers, fintechs and NBFCs across India and the Middle East with AI, risk,
          compliance and data platforms built for regulated production.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {traits.map((t) => (
          <div key={t.k} className="card-panel p-7">
            <div className="text-[10px] uppercase tracking-widest text-[oklch(0.7_0.18_295)]">{t.k}</div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.v}</p>
          </div>
        ))}
      </section>

      <section className="my-28">
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
          Operating <span className="text-gradient">principles.</span>
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.n} className="card-panel p-8">
              <div className="font-display text-3xl text-[oklch(0.78_0.16_295)]">{p.n}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-28">
        <div className="ring-violet rounded-3xl bg-panel p-12 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl">
            Curious where Bytespath could fit into <span className="text-gradient">your roadmap?</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="btn-primary">Schedule a Conversation</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
