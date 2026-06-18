import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import {
  ShieldAlert, FileCheck2, Gauge, Building2, ShieldCheck, CircuitBoard,
  Coins, BarChart3, Lock, KeyRound, ScrollText, Activity, FileSearch,
  ArrowUpRight, Cpu, LineChart, Layers, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bytespath — Secure Intelligence for Modern Financial Institutions" },
      { name: "description", content: "BFSI-only technology: AI, risk, compliance and enterprise platforms for banks, insurers, fintechs and NBFCs." },
    ],
  }),
  component: Index,
});

const pillars = [
  { n: "01", title: "Banking", icon: Building2, desc: "Core platforms, transaction monitoring, fraud detection and AI risk modelling for retail and wholesale banks." },
  { n: "02", title: "Insurance", icon: ShieldCheck, desc: "Claims intelligence, underwriting automation and customer 360 across life, general and health lines." },
  { n: "03", title: "Fintech", icon: CircuitBoard, desc: "Embedded payments, digital wallets, real-time settlement and platform-grade APIs at scale." },
  { n: "04", title: "NBFC", icon: Coins, desc: "Lending intelligence, alternate credit scoring, collections automation and regulatory reporting." },
];

const challenges = [
  {
    icon: ShieldAlert, title: "Fraud & Financial Crime",
    body: "Synthetic identities, account takeovers and mule networks now move faster than legacy rule engines can react.",
    points: ["Real-time behavioural scoring", "Network graph anomaly detection", "Adaptive AML monitoring"],
  },
  {
    icon: FileCheck2, title: "Compliance & Regulatory Pressure",
    body: "RBI, IRDAI, SEBI and global circulars expect continuous, evidenced, machine-readable compliance posture.",
    points: ["Automated regulatory reporting", "Policy → control mapping", "Continuous audit traceability"],
  },
  {
    icon: Gauge, title: "Operational Inefficiencies",
    body: "Manual reconciliation, document handling and disconnected systems quietly erode margins and customer trust.",
    points: ["Document AI for KYC and claims", "Process orchestration", "Straight-through processing"],
  },
];

const steps = [
  { n: "01", title: "Customer", body: "Onboarding initiated across web, mobile and branch." },
  { n: "02", title: "KYC", body: "Document AI plus biometric verification with full audit log." },
  { n: "03", title: "Verification", body: "Identity, sanctions and PEP screening returned in under 500ms." },
  { n: "04", title: "Risk Engine", body: "ML scoring across credit, fraud and behavioural signals." },
  { n: "05", title: "Decisioning", body: "Policy-as-code outcomes delivered with full explainability." },
  { n: "06", title: "Compliance", body: "RBI / IRDAI mappings, retention and downstream reporting." },
  { n: "07", title: "Audit", body: "Immutable trail — every decision, every input, forever." },
];

const aiCases = [
  { tag: "Risk", title: "AI Fraud Detection", metric: "92%", label: "True-positive lift" },
  { tag: "Compliance", title: "AML Monitoring", metric: "<400ms", label: "Alert latency" },
  { tag: "Lending", title: "Credit Risk Intelligence", metric: "+24%", label: "Approval uplift" },
  { tag: "Operations", title: "Document Processing AI", metric: "97.4%", label: "OCR accuracy" },
  { tag: "CX", title: "Customer Service Automation", metric: "70%", label: "Containment" },
  { tag: "Compliance", title: "Regulatory Reporting", metric: "100%", label: "Audit coverage" },
  { tag: "Intelligence", title: "Predictive Analytics", metric: "3x", label: "Decision speed" },
];

const security = [
  { icon: Lock, title: "Encryption", body: "AES-256 at rest, TLS 1.3 in transit, KMS-rotated keys." },
  { icon: KeyRound, title: "Identity", body: "Zero-trust identity with hardware-bound tokens." },
  { icon: ScrollText, title: "Governance", body: "Policy-as-code with continuous control attestation." },
  { icon: Activity, title: "Monitoring", body: "24×7 SOC, behavioural anomaly detection, MTTR under 15 minutes." },
  { icon: FileSearch, title: "Auditability", body: "Immutable, query-able audit chain for every event." },
];

const whyCards = [
  { title: "BFSI Focused", body: "Every engineer, designer and strategist wakes up thinking about banks, insurers, fintechs and NBFCs.", tag: "Focus" },
  { title: "AI Native", body: "Architectures are built around models, monitoring and feedback loops — not bolted on.", tag: "AI" },
  { title: "Compliance Ready", body: "RBI, IRDAI, SEBI, GDPR — encoded as design inputs from day zero.", tag: "Regulation" },
  { title: "Enterprise Delivery", body: "Scaled programs into regulated production. Not pilots, not proofs of concept.", tag: "Delivery" },
];

const news = [
  { tag: "Fraud Trends", metric: "+38%", sub: "YoY incidents",
    title: "Synthetic identity fraud rises 38% across APAC banking",
    body: "Deepfake-assisted KYC bypass is now the fastest-growing attack vector against mid-tier banks." },
  { tag: "RBI Compliance", metric: "Q1", sub: "Effective window",
    title: "Draft circular: tighter norms for outsourced IT risk",
    body: "RBI proposes mandatory concentration risk reporting for cloud and third-party processors handling core workloads." },
  { tag: "AI in Banking", metric: "73%", sub: "In production",
    title: "73% of Indian banks now run GenAI in production",
    body: "Document processing, AML triage and conversational service lead deployments — risk modelling remains pilot-stage." },
  { tag: "Digital Lending", metric: "2.4x", sub: "Disbursal growth",
    title: "Embedded credit volumes cross ₹1.2L Cr in H2",
    body: "NBFC-fintech rails grew 2.4x; default rates held below 2.1% on AI-scored cohorts." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-20 pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="pill pill-dot">BFSI Intelligence Platform · Enterprise Ready</span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Secure Intelligence <br /> For Modern <span className="text-foreground">Financial</span>{" "}
              <span className="text-gradient">Institutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              We transform BFSI organizations with AI, automation, risk intelligence and
              enterprise-grade technology — engineered for banks, insurers, fintechs and NBFCs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Schedule Consultation</Link>
              <Link to="/capabilities" className="btn-ghost">Explore Capabilities</Link>
            </div>
            <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { k: "99.9%", v: "Reliability" },
                { k: "3x", v: "Faster decisions" },
                { k: "100%", v: "Audit trail" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-semibold">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <div className="ring-violet relative overflow-hidden rounded-3xl bg-panel p-6">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>Banking Analytics</span>
                <span className="inline-flex items-center gap-1.5 text-[oklch(0.7_0.18_295)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.18_295)] shadow-[0_0_10px_oklch(0.7_0.18_295)]" /> Live
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <MiniMetric label="Page views" value="2.7M" trend="+12.4%" />
                <MiniMetric label="Bounce rate" value="40.6%" trend="-3.1%" />
                <MiniMetric label="Sessions" value="479K" trend="+8.2%" />
                <MiniMetric label="Session length" value="17m" trend="+1.4%" />
              </div>
              <div className="mt-5 h-44 rounded-2xl border border-white/5 bg-[oklch(0.13_0.025_285_/_0.7)] p-4">
                <FakeChart />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                <Chip label="Fraud Monitoring" />
                <Chip label="Risk Intelligence" />
                <Chip label="AI Compliance" />
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[oklch(0.5_0.25_295_/_0.4)] blur-3xl" />
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <Section eyebrow="Focus" title={<>We focus on one industry. <span className="text-gradient">BFSI.</span></>}
        sub="Each pillar represents an ecosystem we build for — explore what we deliver per segment of financial services.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="card-panel group relative p-6">
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[oklch(0.27_0.07_295_/_0.7)] text-[oklch(0.78_0.16_295)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">{p.n}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CHALLENGES */}
      <Section eyebrow="What we solve"
        title={<>The challenges reshaping <span className="text-gradient">financial services.</span></>}>
        <div className="grid gap-5 md:grid-cols-3">
          {challenges.map((c) => (
            <div key={c.title} className="card-panel p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[oklch(0.27_0.07_295_/_0.7)] text-[oklch(0.78_0.16_295)]">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {c.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.18_295)]" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* JOURNEY */}
      <Section eyebrow="Journey" title={<>One customer. <span className="text-gradient">Seven trust checkpoints.</span></>}
        sub="Walk through how a single transaction moves through Bytespath's intelligence layer.">
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[oklch(0.5_0.2_295_/_0.4)] to-transparent lg:block" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            {steps.map((s) => (
              <div key={s.n} className="card-panel relative p-4">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[oklch(0.27_0.07_295_/_0.7)] text-[oklch(0.78_0.16_295)]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground">Step {s.n}</div>
                <div className="mt-1 font-display text-sm font-semibold">{s.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* AI USE CASES */}
      <Section eyebrow="AI Use Cases" title={<>Production AI deployed inside <span className="text-gradient">regulated financial workflows.</span></>}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aiCases.map((u, i) => (
            <div key={u.title} className="card-panel relative overflow-hidden p-6">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>{u.tag}</span><span>{String(i + 1).padStart(2, "0")}/07</span>
              </div>
              <div className="mt-8 font-display text-4xl font-semibold text-foreground">{u.metric}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{u.label}</div>
              <div className="mt-6 border-t border-white/5 pt-4 font-display text-base">{u.title}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECURITY */}
      <Section eyebrow="Security Architecture" title={<>Security is not a feature. <br /><span className="text-gradient">It is the foundation.</span></>}>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {security.map((s) => (
            <div key={s.title} className="card-panel p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[oklch(0.27_0.07_295_/_0.7)] text-[oklch(0.78_0.16_295)]">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-base font-semibold">{s.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section eyebrow="Why Bytespath" title={<>Four reasons BFSI leaders choose us <span className="text-gradient">— again and again.</span></>}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((w) => (
            <div key={w.title} className="card-panel p-7">
              <div className="text-[10px] uppercase tracking-widest text-[oklch(0.7_0.18_295)]">{w.tag}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* IMPACT */}
      <Section eyebrow="Impact" title={<>Outcomes our BFSI customers <span className="text-gradient">measure us by.</span></>}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "99.9%", v: "Platform reliability", icon: Cpu },
            { k: "60%", v: "Process efficiency gain", icon: Layers },
            { k: "3x", v: "Faster decision making", icon: LineChart },
            { k: "100%", v: "Audit traceability", icon: BarChart3 },
          ].map((m) => (
            <div key={m.v} className="card-panel p-7">
              <m.icon className="h-5 w-5 text-[oklch(0.78_0.16_295)]" />
              <div className="mt-6 font-display text-5xl font-semibold text-gradient">{m.k}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* INTEL CENTER */}
      <Section eyebrow="Intelligence Center · Live"
        title={<>BFSI signals worth <span className="text-gradient">your attention this week.</span></>}
        sub="Curated by Bytespath Research.">
        <div className="grid gap-4 md:grid-cols-2">
          {news.map((n) => (
            <article key={n.title} className="card-panel p-7">
              <div className="flex items-center justify-between">
                <span className="pill pill-dot">{n.tag}</span>
                <div className="text-right">
                  <div className="font-display text-2xl font-semibold">{n.metric}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{n.sub}</div>
                </div>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold leading-snug">{n.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.body}</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-muted-foreground">
                <span>Bytespath Research</span><span>This week</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* FEATURED CASE */}
      <Section eyebrow="Case Study"
        title={<>How a top private bank dismantled <span className="text-gradient">CNP fraud in 90 days.</span></>}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { tag: "01 · Problem", title: "₹240 Cr fraud exposure", body: "A tier-1 bank saw a 41% surge in card-not-present fraud while legacy rules flagged only 38% of true positives." },
            { tag: "02 · Solution", title: "Real-time behavioural risk fabric", body: "Graph-based anomaly detection scored 14M daily transactions in under 240ms." },
            { tag: "03 · Architecture", title: "Streamed, model-served, audit-anchored", body: "Kafka + Flink streams, versioned ML behind sub-second serving, immutable audit into the data vault." },
            { tag: "04 · Outcome", title: "92% detection. 60% fewer false alerts.", body: "Operational cost down 34%, analyst handling time down 71%, zero gaps on RBI's incident reporting timelines." },
          ].map((s) => (
            <div key={s.tag} className="card-panel p-7">
              <div className="text-[10px] uppercase tracking-widest text-[oklch(0.7_0.18_295)]">{s.tag}</div>
              <h3 className="mt-3 font-display text-base font-semibold leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <Link to="/case-studies" className="btn-ghost text-sm">See all case studies <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="my-32">
        <div className="ring-violet relative overflow-hidden rounded-3xl bg-panel p-14 text-center">
          <div className="absolute inset-0 bg-radial-violet opacity-60" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Let's build the next layer of <span className="text-gradient">financial trust.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              A 30-minute conversation with our BFSI strategy team — to scope outcomes, not slideware.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">Schedule Consultation</Link>
              <Link to="/contact" className="btn-ghost">Discuss an Initiative</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({ eyebrow, title, sub, children }: { eyebrow: string; title: React.ReactNode; sub?: string; children: React.ReactNode }) {
  return (
    <section className="my-28">
      <div className="mb-12 max-w-3xl">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
        {sub && <p className="mt-4 text-base text-muted-foreground">{sub}</p>}
      </div>
      {children}
    </section>
  );
}

function MiniMetric({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-[oklch(0.14_0.025_285_/_0.6)] p-3">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-xl font-semibold">{value}</div>
      <div className="mt-0.5 text-[10px] text-[oklch(0.78_0.16_295)]">{trend}</div>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/5 bg-[oklch(0.14_0.025_285_/_0.7)] px-3 py-2">
      <span>{label}</span>
      <span className="inline-flex items-center gap-1 text-[oklch(0.78_0.16_295)]">
        <span className="h-1 w-1 rounded-full bg-[oklch(0.78_0.16_295)]" /> Live
      </span>
    </div>
  );
}

function FakeChart() {
  // SVG sparkline + bars
  const bars = [4, 7, 12, 9, 15, 11, 17, 13, 9, 7, 5, 4, 3];
  return (
    <svg viewBox="0 0 300 140" className="h-full w-full">
      <defs>
        <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.2 295)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="oklch(0.4 0.2 295)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {bars.map((b, i) => (
        <rect key={i} x={10 + i * 22} y={130 - b * 6} width="14" height={b * 6} rx="3" fill="url(#lg)" />
      ))}
      <polyline
        fill="none"
        stroke="oklch(0.85 0.05 285)"
        strokeWidth="1.5"
        points={bars.map((b, i) => `${17 + i * 22},${125 - b * 5}`).join(" ")}
      />
    </svg>
  );
}
