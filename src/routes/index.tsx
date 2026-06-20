import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  CircuitBoard,
  Lock,
  Activity,
  ArrowUpRight,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Quote,
  Star,
  ShieldCheck,
  Eye,
  BarChart3,
  Globe,
  Zap,
  ShieldAlert,
  SearchCheck,
  Scale,
  Landmark,
  UserCheck,
  FileSearch,
  History,
  FileBadge,
  ChevronRight
} from "lucide-react";

import { BfsiLiveIntelligencePanel } from "@/components/site/BfsiLiveIntelligencePanel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bytespath — Secure Intelligence for Modern Financial Institutions" },
      { name: "description", content: "BFSI-only technology: AI, risk, compliance and enterprise platforms for banks, insurers, fintechs and NBFCs." },
    ],
  }),
  component: Index,
});

const heroWords = [
  "understand",
  "design",
  "develop",
  "deploy",
  "maintain",
  "secure"
];

const processCards = [
  { title: "AI Consulting", icon: Sparkles, desc: "Understand business objectives, compliance needs and AI readiness." },
  { title: "Design", icon: Layers, desc: "Architect secure AI solutions for BFSI workflows." },
  { title: "Development", icon: CircuitBoard, desc: "Build production-grade AI systems and integrations." },
  { title: "Deployment", icon: Cpu, desc: "Deploy securely within enterprise environments." },
  { title: "Maintenance", icon: Activity, desc: "Continuous optimization and support." },
  { title: "Security", icon: Lock, desc: "Governance, compliance and risk management." },
];

const steps = [
  {
    n: "01",
    title: "Customer Onboarding",
    body: "Seamless multi-channel entry with automated channel-risk scoring and sophisticated device fingerprinting for immediate trust assessment.",
    icon: UserCheck,
    detail: ""
  },
  {
    n: "02",
    title: "Document AI & KYC",
    body: "Advanced OCR and neural networks extract PII from national IDs with real-time liveness detection and deep-fake forensic analysis.",
    icon: FileSearch,
    detail: ""
  },
  {
    n: "03",
    title: "Instant Verification",
    body: "Proprietary screening engine cross-references 1000+ global AML, sanctions, and PEP watchlists with sub-second response times.",
    icon: SearchCheck,
    detail: ""
  },
  {
    n: "04",
    title: "Risk Engine (ML)",
    body: "Our ensemble of deep neural networks analyzes 500+ behavioral and credit features to generate a high-fidelity risk score.",
    icon: Activity,
    detail: ""
  },
  {
    n: "05",
    title: "Decisioning & Logic",
    body: "A robust policy-as-code layer executes complex business rules while providing full explainability (XAI) for regulatory transparency.",
    icon: Scale,
    detail: ""
  },
  {
    n: "06",
    title: "Regulatory Sync",
    body: "Real-time compliance mapping to RBI, IRDAI, and SEC frameworks with automated STR/SAR reporting triggers built directly into the flow.",
    icon: Landmark,
    detail: ""
  },
  {
    n: "07",
    title: "Immutable Audit",
    body: "Final decision hashes and all input variables are committed to a tamper-proof cryptographic ledger for life-long, absolute traceability.",
    icon: History,
    detail: ""
  },
];

const industryPillars = [
  { title: "Banking", icon: Landmark, desc: "Core banking AI, digital lending, and automated risk scoring.", metrics: "40% faster approvals" },
  { title: "Insurance", icon: ShieldCheck, desc: "Claims automation, underwriting intelligence, and fraud detection.", metrics: "30% claims efficiency" },
  { title: "Fintech", icon: Zap, desc: "Real-time payment fraud, neo-banking layers, and API-first AI.", metrics: "Sub-50ms latency" },
  { title: "NBFC", icon: BarChart3, desc: "Alternative credit scoring and automated collections workflows.", metrics: "22% NPL reduction" },
];

const challenges = [
  {
    title: "Fraud & Financial Crime",
    icon: ShieldAlert,
    stat: "92%",
    label: "Fraud Detection Lift",
    desc: "Sophisticated AML patterns and real-time transaction monitoring."
  },
  {
    title: "Compliance & Regulatory Pressure",
    icon: Scale,
    stat: "100%",
    label: "Audit-ready trails",
    desc: "Automated RBI/IRDAI mappings and policy-as-code governance."
  },
  {
    title: "Operational Inefficiencies",
    icon: Activity,
    stat: "400ms",
    label: "AML Latency",
    desc: "Legacy workflow automation and document intelligence at scale."
  },
];

const securityPillars = [
  { id: "encryption", title: "Data Encryption", icon: Lock, desc: "FIPS 140-2 level data security at rest and in transit." },
  { id: "identity", title: "Identity & Access", icon: SearchCheck, desc: "Zero-trust access control for every AI model interaction." },
  { id: "governance", title: "AI Governance", icon: Scale, desc: "Policy-as-code ensuring AI remains within regulatory bounds." },
  { id: "compliance", title: "Regulatory Compliance", icon: Landmark, desc: "Automated RBI/IRDAI mappings and policy-as-code governance." },
  { id: "audit", title: "Audit Intelligence", icon: CircuitBoard, desc: "Immutable logs for every decision made by the intelligence layer." },
];

const testimonials = [
  { name: "Rajesh Kumar", company: "Global FinBank", feedback: "Bytespath transformed our fraud detection engine. We saw a 40% reduction in false positives within the first quarter.", photo: "https://i.pravatar.cc/150?u=rajesh" },
  { name: "Sarah Chen", company: "InsurTech Solutions", feedback: "The level of BFSI expertise they bring is unmatched. They don't just build AI; they understand the regulatory landscape.", photo: "https://i.pravatar.cc/150?u=sarah" },
  { name: "Amit Shah", company: "NeoCredit NBFC", feedback: "Our digital lending platform is now powered by their risk intelligence layer. It's been a game-changer for our approval rates.", photo: "https://i.pravatar.cc/150?u=amit" }
];

const partners = [
  { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
];

const newsroom = [
  { publication: "Economic Times", headline: "Bytespath recognized as top AI Fintech partner for 2025", date: "March 12, 2025", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
  { publication: "BFSI Insight", headline: "The Future of AI Governance in Banking: A Deep Dive with Bytespath", date: "Feb 28, 2025", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" }
];

function Counter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = parseInt(value.replace(/\D/g, ""));
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v > 0.5) {
        let startTime = performance.now();
        const duration = 1500;

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const prog = Math.min(elapsed / duration, 1);
          const current = Math.floor(prog * targetValue);
          setDisplayValue(current);
          if (prog < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        unsubscribe();
      }
    });
    return () => unsubscribe();
  }, [targetValue, scrollYProgress]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end end"] });
  const { scrollYProgress: processScroll } = useScroll({ target: processRef, offset: ["start start", "end end"] });
  const { scrollYProgress: trustScroll } = useScroll({ target: trustRef, offset: ["start start", "end end"] });
  const { scrollYProgress: securityScroll } = useScroll({ target: securityRef, offset: ["start start", "end end"] });
  const { scrollYProgress: industryScroll } = useScroll({ target: industryRef, offset: ["start start", "end end"] });

  const heroProgress = useSpring(heroScroll, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const processProgress = useSpring(processScroll, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const trustProgress = useSpring(trustScroll, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const securityProgress = useSpring(securityScroll, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const industryProgress = useSpring(industryScroll, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [heroIndex, setHeroIndex] = useState(0);

  useMotionValueEvent(heroProgress, "change", (latest) => {
    const total = heroWords.length + 1; // +1 for the final state
    const index = Math.min(heroWords.length, Math.floor(latest * total));
    setHeroIndex(index);
  });

  const [activePillarId, setActivePillarId] = useState(securityPillars[0].title);
  useMotionValueEvent(securityProgress, "change", (latest) => {
    const index = Math.min(securityPillars.length - 1, Math.floor(latest / (0.75 / securityPillars.length)));
    if (securityPillars[index]) {
      setActivePillarId(securityPillars[index].title);
    }
  });

  return (
    <SiteLayout>
      {/* HERO SECTION - SCROLL DRIVEN WORD SWAP */}
      <section ref={heroRef} className="relative h-[800vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">

            {/* HERO VIDEO */}
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              style={{
                opacity: useTransform(
                  heroProgress,
                  [0, 0.85],
                  [1, 0.4]
                )
              }}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                object-center
                scale-110
                brightness-[0.7]
              "
            >
              <source src="/herovideo.mp4" type="video/mp4" />
            </motion.video>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* VIOLET GLOW */}
            <div className="absolute inset-0 bg-radial-violet opacity-30" />

            {/* GRID PATTERN */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto w-full text-center relative z-10 px-6 translate-y-[50px] md:translate-y-[70px]">
            {/* Progress Indicators */}
            <div className="flex gap-2 justify-center mb-8">
              {heroWords.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === heroIndex ? 32 : 8,
                    opacity: i <= heroIndex ? 1 : 0.2,
                  }}
                  transition={{ duration: 0.25 }}
                  className="h-[3px] rounded-full bg-primary"
                />
              ))}
              <motion.div
                animate={{
                  width: heroIndex === heroWords.length ? 32 : 8,
                  opacity: heroIndex === heroWords.length ? 1 : 0.2,
                }}
                transition={{ duration: 0.25 }}
                className="h-[3px] rounded-full bg-primary"
              />
            </div>

            {/* We (Fade out at end) */}
            <motion.div
              style={{
                opacity: useTransform(heroProgress, [0.82, 0.88], [1, 0]),
                y: useTransform(heroProgress, [0.82, 0.88], [0, -20])
              }}
              className="text-[clamp(3rem,8vw,7rem)] font-bold font-display leading-none text-white/30 mb-3 tracking-tight select-none"
            >
              We
            </motion.div>

            {/* Word Swap Slot (Upper Line) */}
            <div className="relative h-[clamp(3.6rem,9.6vw,8.4rem)] overflow-hidden">
              {heroWords.map((word, i) => {
                const start = i / (heroWords.length + 1);
                const end = (i + 1) / (heroWords.length + 1);
                return (
                  <HeroWord key={word} word={word} progress={heroProgress} start={start} end={end} isFirst={i === 0} />
                );
              })}

              {/* Final State Reveal: Secure AI */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: useTransform(heroProgress, [0.85, 0.92], [0, 1]),
                  y: useTransform(heroProgress, [0.85, 0.92], [20, 0]),
                }}
              >
                <span className="text-[clamp(3.6rem,9.6vw,8.4rem)] font-bold font-display leading-none tracking-tight text-white">
                   Secure AI
                </span>
              </motion.div>
            </div>

            {/* Bottom Reveal Slot (Lower Line) */}
            <div className="relative mt-4 h-[clamp(3.6rem,9.6vw,8.4rem)]">
              {/* Initial State: AI solutions for BFSI. */}
              <motion.div
                style={{
                  opacity: useTransform(heroProgress, [0.82, 0.88], [1, 0]),
                  y: useTransform(heroProgress, [0.82, 0.88], [0, -20])
                }}
                className="absolute inset-0 flex items-center justify-center text-[clamp(3rem,8vw,7rem)] font-bold font-display leading-none text-white tracking-tight select-none"
              >
                AI solutions for BFSI.
              </motion.div>

              {/* Final State: Solutions for BFSI */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: useTransform(heroProgress, [0.88, 0.95], [0, 1]),
                  y: useTransform(heroProgress, [0.88, 0.95], [20, 0]),
                }}
              >
                <span className="text-[clamp(3.6rem,9.6vw,8.4rem)] font-bold font-display leading-none tracking-tight text-white select-none whitespace-nowrap">
                  Solutions for <span style={{
                    background: "linear-gradient(135deg, #A78BFA 0%, #7B3FF2 50%, #5B21B6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>BFSI</span>
                </span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              style={{
                opacity: useTransform(heroProgress, [0.95, 0.99], [0, 1]),
                y: useTransform(heroProgress, [0.95, 0.99], [20, 0])
              }}
              className="mt-16 flex flex-wrap justify-center gap-6"
            >
              <Link to="/contact" className="btn-primary !px-10 !py-4 shadow-[0_0_20px_rgba(99,102,241,0.3)]">Book AI Consultation</Link>
              <Link to="/capabilities" className="btn-ghost !px-10 !py-4">Explore Our Process</Link>
            </motion.div>

            <motion.p
              style={{ opacity: useTransform(heroProgress, [0, 0.82], [1, 0]) }}
              className="mt-16 text-sm font-medium tracking-widest uppercase text-gray-600"
            >
              {Math.min(heroWords.length, heroIndex + 1)} / {heroWords.length}
            </motion.p>
          </div>

          <motion.div
            className="absolute bottom-10 flex flex-col items-center gap-2"
            style={{ opacity: useTransform(heroProgress, [0, 0.05], [1, 0]) }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Scroll to Experience</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="h-8 w-px bg-gradient-to-b from-primary via-primary to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section ref={processRef} className="relative h-[500vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <div className="mb-16 text-center">
              <div className="eyebrow">The Journey</div>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">The Process We <span className="text-gradient">Work With</span></h2>
            </div>

            {/* Center Level Progress Bar */}
            <div className="relative h-1.5 w-full max-w-4xl mx-auto mb-24 hidden md:block">
              <div className="absolute inset-0 bg-white/5 rounded-full" />
              <motion.div
                className="absolute inset-0 bg-primary shadow-[0_0_20px_var(--primary)] rounded-full"
                style={{ width: useTransform(processProgress, v => `${v * 100}%`) }}
              />
            </div>

            <div className="relative h-[480px] w-full max-w-7xl mx-auto overflow-visible">
              {processCards.map((card, i) => (
                <ProcessCard key={card.title} card={card} index={i} total={processCards.length} progress={processProgress} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION - REDESIGNED FOR SMOOTHER FLOW AND LARGER INFO */}
      <section ref={trustRef} className="relative h-[800vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-background/50 backdrop-blur-sm">
          <div className="w-full text-center px-6 flex flex-col items-center">
            <div className="mb-12 text-center">
              <div className="eyebrow">Transaction Lifecycle</div>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">One Customer. <span className="text-gradient">Seven Trust Checkpoints.</span></h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground px-6 leading-relaxed">Experience how a BFSI transaction flows through Bytespath’s AI intelligence layer in real-time.</p>
            </div>

            {/* Life-cycle Thread (Horizontal flow line) */}
            <div className="relative h-1 w-full max-w-6xl mx-auto mb-24 hidden lg:block overflow-visible">
               <div className="absolute inset-0 bg-white/5 rounded-full" />
               <motion.div
                 className="absolute inset-0 bg-primary shadow-[0_0_25px_var(--primary)] rounded-full"
                 style={{ width: useTransform(trustProgress, v => `${v * 100}%`) }}
               />

               {/* Pulse at progress head */}
               <motion.div
                 className="absolute h-4 w-4 rounded-full bg-primary -translate-y-1/2 shadow-[0_0_30px_var(--primary)] z-20"
                 style={{
                   left: useTransform(trustProgress, v => `${v * 100}%`),
                   top: "50%",
                   translateX: "-50%"
                 }}
               >
                 <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
               </motion.div>
            </div>
          </div>

          <div className="relative h-[550px] w-full max-w-[1600px] mx-auto px-6 overflow-visible">
              {steps.map((step, i) => (
                <CheckpointCard key={step.n} step={step} index={i} total={steps.length} progress={trustProgress} />
              ))}
          </div>
        </div>
      </section>

      {/* BFSI INTELLIGENCE CENTER (EXISTING) */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="eyebrow">Intel Center</div>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">BFSI Live <span className="text-gradient">Intelligence</span></h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Our global intelligence network monitors fraud patterns, compliance shifts, and operational risks across the entire financial ecosystem.
              </p>

              <div className="mt-12 space-y-6">
                 {[
                   { label: "Active Nodes", value: "24,802" },
                   { label: "Threats Mitigated (24h)", value: "1.2M+" },
                   { label: "Compliance Updates Sync", value: "Real-time" }
                 ].map((stat) => (
                   <div key={stat.label} className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="font-display font-semibold text-primary">{stat.value}</span>
                   </div>
                 ))}
              </div>

              <div className="mt-12">
                 <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                       <Zap className="h-5 w-5" />
                    </div>
                    <div>
                       <div className="text-xs font-bold uppercase tracking-widest text-primary">Live Ticker</div>
                       <div className="text-sm font-medium mt-1">Global Fraud Pattern Detected: Synthetic Identity Wave in APAC</div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="card-panel h-[500px] p-8 overflow-hidden">
               <BfsiLiveIntelligencePanel />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY PILLARS SHOWCASE */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-violet opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-24 text-center">
            <div className="eyebrow">Industry Showcase</div>

            <h2 className="mt-4 font-display text-4xl md:text-7xl font-semibold">
              Specialized For{" "}
              <span className="text-gradient">
                Financial Markets
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground">
              AI systems purpose-built for banking, insurance,
              fintech and lending ecosystems.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto">

            {/* Banking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-panel lg:col-span-7 p-10 relative overflow-hidden group min-h-[340px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8">
                    <Landmark className="h-8 w-8" />
                  </div>

                  <h3 className="font-display text-4xl font-semibold mb-6">
                    Banking <span className="text-primary">AI</span>
                  </h3>

                  <p className="text-lg text-muted-foreground max-w-xl">
                    Core banking modernization, digital lending,
                    intelligent underwriting and enterprise risk scoring.
                  </p>
                </div>

                <div className="mt-10">
                  <div className="inline-flex px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div>
                      <div className="text-2xl font-display font-bold">
                        40% Faster Approvals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Insurance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-panel lg:col-span-5 p-10 relative overflow-hidden group min-h-[340px]"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8">
                    <ShieldCheck className="h-8 w-8" />
                  </div>

                  <h3 className="font-display text-4xl font-semibold mb-6">
                    Insurance <span className="text-primary">AI</span>
                  </h3>

                  <p className="text-lg text-muted-foreground">
                    Claims automation, underwriting intelligence and
                    fraud detection systems.
                  </p>
                </div>

                <div className="mt-10">
                                  <div className="inline-flex px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <div>
                                      <div className="text-2xl font-display font-bold">
                    30% Claims Efficiency
                  </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
            </motion.div>

            {/* Fintech */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-panel lg:col-span-5 p-10 relative overflow-hidden group min-h-[340px]"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8">
                    <Zap className="h-8 w-8" />
                  </div>

                  <h3 className="font-display text-4xl font-semibold mb-6">
                    Fintech <span className="text-primary">AI</span>
                  </h3>

                  <p className="text-lg text-muted-foreground">
                    Payment fraud detection, neo-banking intelligence,
                    API-first financial infrastructure.
                  </p>
                </div>

                <div className="mt-10">
                                  <div className="inline-flex px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <div>
                                      <div className="text-2xl font-display font-bold">
                    Sub-50ms Latency
                  </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
            </motion.div>

            {/* NBFC */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-panel lg:col-span-7 p-10 relative overflow-hidden group min-h-[340px]"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8">
                    <BarChart3 className="h-8 w-8" />
                  </div>

                  <h3 className="font-display text-4xl font-semibold mb-6">
                    NBFC <span className="text-primary">AI</span>
                  </h3>

                  <p className="text-lg text-muted-foreground max-w-xl">
                    Alternative credit scoring, collections intelligence,
                    borrower analytics and portfolio optimization.
                  </p>
                </div>
<div className="mt-10">
                                  <div className="inline-flex px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <div>
                                      <div className="text-2xl font-display font-bold">
                    22% NPL Reduction
                  </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHALLENGES SECTION UPGRADE */}
      <section className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="eyebrow">The Challenges We Solve</div>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Turning Constraints Into <span className="text-gradient">Competitive Edge</span></h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-3">
             {challenges.map((challenge, i) => (
               <div key={challenge.title} className="flex flex-col">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="mb-8 aspect-video rounded-3xl bg-white/[0.03] border border-white/5 p-6 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-radial-violet opacity-0 group-hover:opacity-20 transition-opacity" />
                    <div className="h-full flex flex-col justify-center items-center text-center relative z-10">
                       <div className="text-4xl md:text-6xl font-display font-bold text-primary">
                          <Counter value={challenge.stat} suffix={challenge.stat.includes('%') ? '%' : challenge.stat.includes('ms') ? 'ms' : ''} />
                       </div>
                       <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">{challenge.label}</div>
                    </div>
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold mb-4">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

{/* SECURITY ARCHITECTURE */}
<section className="py-40 relative overflow-hidden">
  <div className="container mx-auto px-6">

    <div className="mb-24 text-center">
      <div className="eyebrow">Enterprise Fortress</div>

      <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold">
        Security <span className="text-gradient">Architecture</span>
      </h2>

      <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">
        Five core pillars ensuring your intelligence layer remains
        secure, compliant and enterprise ready.
      </p>
    </div>

    <div className="relative flex justify-center items-center h-[850px]">

      {/* OUTER ORBIT */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[850px]
          w-[850px]
          rounded-full
          border
          border-primary/10
        "
      />

      {/* INNER ORBIT */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[700px]
          w-[700px]
          rounded-full
          border
          border-primary/20
        "
      />

      {/* PULSE DOT MOVING AROUND INNER RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[725px]
          w-[700px]
          rounded-full
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            h-5
            w-5
            rounded-full
            bg-primary
            shadow-[0_0_35px_var(--primary)]
          "
        />
      </motion.div>

      {/* CENTER CORE */}
      <div
        className="
          relative
          z-20
          h-72
          w-72
          rounded-full
          border-4
          border-primary/30
          bg-background
          flex
          flex-col
          items-center
          justify-center
          text-center
          shadow-[0_0_120px_rgba(123,63,242,0.35)]
        "
      >
        <ShieldCheck className="h-16 w-16 text-primary mb-4" />

        <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
          Bytespath
        </div>

        <div className="mt-2 font-display text-2xl font-semibold">
          Security Core
        </div>

        <div className="mt-4 text-sm text-muted-foreground max-w-[180px]">
          Trusted AI Infrastructure for BFSI
        </div>

        {/* PULSE */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-0
            rounded-full
            border-2
            border-primary/30
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-primary/20
          "
        />
      </div>

      {/* SECURITY PILLARS */}
      <div className="absolute inset-0">

        {securityPillars.map((pillar, index) => {
          const angle =
            (index / securityPillars.length) * 2 * Math.PI;

          const radius = 350;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={pillar.id}
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="
                absolute
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <div
                className="
                  w-64
                  rounded-3xl
                  bg-panel
                  border
                  border-primary/20
                  p-6
                  text-center
                  shadow-[0_0_40px_rgba(123,63,242,0.12)]
                  backdrop-blur-sm
                "
              >
                <div
                  className="
                    mx-auto
                    mb-4
                    h-14
                    w-14
                    rounded-xl
                    bg-primary/10
                    border
                    border-primary/20
                    flex
                    items-center
                    justify-center
                    text-primary
                  "
                >
                  <pillar.icon className="h-7 w-7" />
                </div>

                <h4 className="font-display text-lg font-semibold mb-2">
                  {pillar.title}
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  </div>
</section>

      {/* PARTNERS SECTION (NEW) */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="eyebrow">Ecosystem</div>
          <h2 className="mt-4 font-display text-4xl font-semibold">Trusted Technology <span className="text-gradient">Partners</span></h2>
          <div className="mt-20 flex flex-wrap justify-center gap-16 md:gap-32">
            {partners.map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="group flex flex-col items-center gap-6"
              >
                <div className="relative">
                  <img src={p.logo} alt={p.name} className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">{p.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (NEW UPGRADE) */}
      <section className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <div className="eyebrow">Client Success</div>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">What Our Clients <span className="text-gradient">Say About Us</span></h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-panel relative flex flex-col p-10 group"
              >
                <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/5 transition-colors group-hover:text-primary/10" />
                <div className="flex gap-1 text-primary mb-8">
                   {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-primary" />)}
                </div>
                <p className="flex-1 text-lg italic text-muted-foreground/90 leading-relaxed font-serif">"{t.feedback}"</p>
                <div className="mt-12 flex items-center gap-4">
                  <div className="relative">
                    <img src={t.photo} alt={t.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-white/5" />
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center border-2 border-background">
                       <ShieldCheck className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-base font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-0.5">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION (NEW UPGRADE) */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Newsroom</div>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">We <span className="text-gradient">Featured</span></h2>
            </div>
            <Link to="/" className="btn-ghost flex items-center group">View All Intelligence <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {newsroom.map((item) => (
              <motion.article
                key={item.headline}
                whileHover="hover"
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-panel p-4"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-[2rem]">
                  <motion.img
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.8 }}
                    src={item.image}
                    alt={item.headline}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                    <span className="text-primary">{item.publication}</span><span>•</span><span>{item.date}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors leading-tight">{item.headline}</h3>
                  <div className="mt-10 flex items-center gap-4">
                     <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                        Read Story <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
                </div>
                <div className="absolute top-8 right-8 h-12 w-12 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                   <div className="h-px w-6 bg-white" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION UPGRADE */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              p-12
              text-center
              rounded-[3rem]
              md:p-32
              border
              border-white/5">

            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{
                backgroundImage:"url('/circuit.png')"              }}
            />

            {/* DARK GRADIENT FOR TEXT READABILITY */}
            <div
              className="absolute inset-0 z-[2]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.55) 100%, rgba(0,0,0,0.55) 100%)",
              }}
            />

            {/* VIOLET GLOW */}
            <div className="absolute inset-0 z-[3] bg-radial-violet opacity-40" />

            {/* CONTENT */}
            <div className="relative z-10">
              <h2 className="mx-auto max-w-4xl font-display text-4xl font-semibold leading-tight md:text-7xl text-white">
                Ready to Build <br />
                <span className="text-gradient">
                  Trusted AI for BFSI?
                </span>
              </h2>

              <p className="mx-auto mt-10 max-w-2xl text-xl text-white/80 leading-relaxed">
                Enterprise-grade AI consulting, implementation and security.
                Join the leaders shaping the future of financial intelligence.
              </p>

              <div className="mt-16 flex flex-wrap justify-center gap-8">
                <Link
                  to="/contact"
                  className="btn-primary !py-5 !px-8 text-lg shadow-[0_0_30px_rgba(140,82,255,0.45)]">
                  Schedule Consultation
                </Link>

                <Link
                  to="/contact"
                  className="btn-ghost !py-5 !px-8 text-lg">
                  Talk to Experts
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}

function HeroWord({ word, progress, start, end, isFirst }: { word: string, progress: any, start: number, end: number, isFirst: boolean }) {
  const opacity = useTransform(
    progress,
    isFirst ? [0, 0, end - 0.05, end] : [start, start + 0.02, end - 0.05, end],
    isFirst ? [1, 1, 1, 0] : [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    isFirst ? [0, 0, end - 0.05, end] : [start, start + 0.02, end - 0.05, end],
    isFirst ? [0, 0, 0, -20] : [20, 0, 0, -20]
  );

  const filter = useTransform(
    progress,
    isFirst ? [0, 0, end - 0.05, end] : [start, start + 0.02, end - 0.05, end],
    isFirst ? ["blur(0px)", "blur(0px)", "blur(0px)", "blur(10px)"] : ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity, y, filter }}
    >
      <span
        className="text-[clamp(3.6rem,9.6vw,8.4rem)] font-bold font-display leading-none tracking-tight"
        style={{
          background: "linear-gradient(135deg, #A78BFA 0%, #7B3FF2 50%, #5B21B6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {word}
      </span>
    </motion.div>
  );
}

function ProcessCard({ card, index, total, progress }: { card: any; index: number; total: number; progress: any }) {
  const segment = 1 / total;
  const centerPoint = index * segment + segment / 2;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useTransform(progress, (v: number) => {
    const activeIndex = v * (total - 1);
    return (index - activeIndex) * 440;
  });

  const scale = useTransform(
    progress,
    [centerPoint - segment, centerPoint, centerPoint + segment],
    [0.9, 1, 0.9]
  );

  const opacity = useTransform(
    progress,
    [centerPoint - segment, centerPoint, centerPoint + segment],
    [0.5, 1, 0.5]
  );

  const zIndex = useTransform(
    progress,
    [centerPoint - segment, centerPoint, centerPoint + segment],
    [10, 20, 10]
  );

  return (
    <motion.div
      style={{
        left: "50%",
        x: isMobile ? 0 : x,
        translateX: isMobile ? "-50%" : "-50%",
        opacity,
        scale,
        zIndex
      }}
      className="absolute top-1/2 -translate-y-1/2 min-w-[320px] md:w-[420px] rounded-[2rem] border border-white/5 bg-panel p-8 md:p-10 flex flex-col items-start text-left group overflow-hidden transition-colors duration-500 hover:border-primary/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 w-full">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary mb-8 border border-primary/10 shadow-inner">
          <card.icon className="h-7 w-7" />
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-primary/80 font-bold mb-4">Phase 0{index + 1}</div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 tracking-tight">{card.title}</h3>
        <p className="text-sm md:text-base leading-relaxed text-muted-foreground/80 font-light">{card.desc}</p>
      </div>
    </motion.div>
  );
}

function CheckpointCard({ step, index, total, progress }: { step: any; index: number; total: number; progress: any }) {
  const segment = 1 / total;
  const centerPoint = index * segment + segment / 2;

  // Horizontal movement for desktop based on scroll
  const x = useTransform(progress, (v: number) => {
    const activeIndex = v * (total - 1);
    return (index - activeIndex) * 520; // Increased spacing for larger cards
  });

  const opacity = useTransform(
    progress,
    [centerPoint - segment, centerPoint, centerPoint + segment],
    [0.4, 1, 0.4]
  );

  const scale = useTransform(
    progress,
    [centerPoint - segment, centerPoint, centerPoint + segment],
    [0.9, 1.05, 0.9]
  );

  const statusOpacity = useTransform(progress, [centerPoint - 0.05, centerPoint], [0, 1]);

  return (
    <motion.div
      style={{
        left: "50%",
        x,
        translateX: "-50%",
        opacity,
        scale,
      }}
      className="absolute top-1/2 -translate-y-1/2 w-[340px] md:w-[480px] group"
    >
      <div className="card-panel h-full min-h-[460px] md:min-h-[500px] p-10 md:p-12 flex flex-col items-start text-left group overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(99,102,241,0.25)] bg-gradient-to-b from-panel/80 to-background/50 backdrop-blur-md border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 w-full h-full flex flex-col">
          <div className="flex items-center justify-between mb-10">
             <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <step.icon className="h-8 w-8" />
             </div>
             <div className="text-5xl font-display font-bold text-white/5 select-none group-hover:text-primary/10 transition-colors">
               {step.n}
             </div>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="flex items-center gap-3">
               <div className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Checkpoint {step.n}</div>
               <div className="h-px w-8 bg-primary/30" />
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
              {step.title}
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground/90 group-hover:text-muted-foreground transition-colors font-light">
              {step.body}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/40">Real-time status:</div>
                <motion.div
                  style={{ opacity: statusOpacity }}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                >
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Active Intelligence</span>
                </motion.div>
             </div>
             <div className="text-[10px] font-bold text-primary/50 uppercase tracking-widest">{step.detail}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function IndustryShowcaseItem({ pillar, index, total, progress }: { pillar: any; index: number; total: number; progress: any }) {
  const segment = 1 / total;
  const start = index * segment;
  const end = (index + 1) * segment;

  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0.9, 1, 1, 0.95]);
  const x = useTransform(progress, [start, start + 0.05, end - 0.05, end], [50, 0, 0, -50]);

  return (
    <motion.div
      style={{ opacity, scale, x }}
      className="absolute inset-0 flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-1 w-full flex justify-center">
         <div className="relative h-[300px] w-[300px] md:h-[450px] md:w-[450px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-primary/20 border-dashed"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="h-24 w-24 md:h-32 md:w-32 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_50px_rgba(123,63,242,0.2)]">
                  <pillar.icon className="h-12 w-12 md:h-16 md:w-16" />
               </div>
            </div>

            {/* Visual Nodes for Industry */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="absolute h-3 w-3 rounded-full bg-primary/30"
                style={{
                  left: "50%",
                  top: "50%",
                  x: Math.cos((i / 6) * 2 * Math.PI) * 150,
                  y: Math.sin((i / 6) * 2 * Math.PI) * 150,
                  translateX: "-50%",
                  translateY: "-50%"
                }}
              />
            ))}
         </div>
      </div>

      <div className="flex-1 text-left">
         <div className="eyebrow text-primary">0{index + 1} / {pillar.title}</div>
         <h3 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">{pillar.title} <span className="text-gradient">AI</span></h3>
         <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">{pillar.desc}</p>

         <div className="mt-12 flex items-center gap-8">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-1">
               <div className="text-[10px] uppercase tracking-widest text-primary font-bold">Industry Impact</div>
               <div className="text-3xl font-display font-bold">{pillar.metrics}</div>
            </div>
            <Link to="/contact" className="btn-ghost flex items-center gap-2">View Case Study <ArrowRight className="h-4 w-4" /></Link>
         </div>
      </div>
    </motion.div>
  );
}

function SecurityPillarItem({ pillar, index, total, progress }: { pillar: any; index: number; total: number; progress: any }) {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 400;

  const initialX = Math.cos(angle) * radius;
  const initialY = Math.sin(angle) * radius;

  const segment = 0.75 / total;
  const start = index * segment;
  const end = (index + 1) * segment;

  const revealStart = start + segment * 0.2;
  const revealEnd = start + segment * 0.8;

  const lineActivated = useTransform(progress, [start, revealStart], [0, 1], { clamp: true });
  const activated = useTransform(progress, [revealStart, revealEnd], [0, 1], { clamp: true });

  const opacity = useTransform(
    progress,
    [revealStart, revealStart + 0.05, end, end + 0.05, 0.85, 0.95],
    [0, 1, 1, 0.25, 0.25, 0],
    { clamp: true }
  );

  const scale = useTransform(
    progress,
    [revealStart, revealStart + 0.05, end, end + 0.05, 0.85, 0.95],
    [0.8, 1, 1, 0.9, 0.9, 0.7],
    { clamp: true }
  );

  const borderColor = useTransform(activated, [0, 1], ["rgba(255,255,255,0.05)", "rgba(123,63,242,0.6)"]);
  const glow = useTransform(activated, [0, 1], ["0 0 0 rgba(0,0,0,0)", "0 0 40px rgba(123,63,242,0.25)"]);

  const lineLength = radius - 130;

  return (
    <>
       {/* Orbit Node Dot */}
       <motion.div
         style={{
           left: "50%",
           top: "50%",
           x: Math.cos(angle) * 350, // On the 700px diameter ring
           y: Math.sin(angle) * 350,
           translateX: "-50%",
           translateY: "-50%",
           opacity: useTransform(progress, [start, revealStart, 0.85, 0.95], [0.2, 1, 1, 0], { clamp: true }),
           scale: useTransform(activated, [0, 1], [1, 1.8]),
           boxShadow: useTransform(activated, [0, 1], ["0 0 0px rgba(0,0,0,0)", "0 0 20px #7B3FF2"])
         }}
         className="absolute h-2 w-2 rounded-full bg-primary z-30"
       />

       <motion.div
        style={{
          opacity: useTransform(progress, [start, revealStart, 0.85, 0.95], [0, 1, 1, 0], { clamp: true }),
          scaleX: lineActivated,
          transformOrigin: "0% 50%",
          width: lineLength,
          left: "50%",
          top: "50%",
          rotate: angle * (180 / Math.PI),
          translateX: "0%",
          translateY: "-50%",
          zIndex: 15
        }}
        className="absolute h-[2px] bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"
      />

      <motion.div
        style={{
          x: initialX,
          y: initialY,
          left: '50%',
          top: '50%',
          translateX: '-50%',
          translateY: '-50%',
          opacity,
          scale,
          borderColor,
          boxShadow: glow,
          zIndex: 20
        }}
        className="absolute p-6 rounded-3xl bg-panel border w-48 md:w-64 text-center transition-all duration-500"
      >
         <motion.div
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
         >
           <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <pillar.icon className="h-6 w-6" />
           </div>
           <h4 className="font-display text-lg font-semibold mb-2">{pillar.title}</h4>
           <p className="text-[10px] text-muted-foreground leading-relaxed">{pillar.desc}</p>
         </motion.div>
      </motion.div>
    </>
  );
}