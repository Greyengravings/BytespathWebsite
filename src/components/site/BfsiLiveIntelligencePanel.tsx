import * as React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

type NetworkNode = {
  name: string;
  color: string;
};

type LiveDatum = {
  t: number;
  // Network traffic bytes/sec (simulated)
  [nodeKey: string]: number | string;
  fraudProb: number; // 0..1
  riskPct: number; // 0..100
};

const NODES: NetworkNode[] = [
  { name: "Banking Core A", color: "oklch(0.78 0.16 295)" },
  { name: "Insurance Co B", color: "oklch(0.68 0.18 270)" },
  { name: "Fintech C", color: "oklch(0.75 0.16 332)" },
  { name: "NBFC D", color: "oklch(0.70 0.16 200)" },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateSimulatedTick(prev: LiveDatum | null, stepIndex: number): LiveDatum {
  const baseSeed = 1337 + stepIndex * 97;
  const rand = mulberry32(baseSeed);

  const lastFraud = prev?.fraudProb ?? 0.18;
  const lastRisk = prev?.riskPct ?? 28;

  const driftFraud = (rand() - 0.5) * 0.06; // +/- 3%
  const driftRisk = (rand() - 0.5) * 8; // +/- 4pp

  const fraudProb = clamp(lastFraud + driftFraud, 0.02, 0.75);
  const riskPct = clamp(lastRisk + driftRisk + fraudProb * 8, 5, 95);

  const traffic: Record<string, number> = {};
  const base = 1.2e6 * (0.7 + rand() * 0.6);

  for (const node of NODES) {
    const nodeKey = node.name;
    const nodeBias = (rand() - 0.5) * 0.3;
    const fraudAmplifier = 0.7 + fraudProb * 1.4;
    const riskAmplifier = 0.8 + riskPct / 120;
    const v = base * fraudAmplifier * riskAmplifier * (1 + nodeBias);
    traffic[nodeKey] = Math.max(1e4, v);
  }

  const t = (prev?.t ?? Date.now()) + 10_000;
  return {
    t,
    ...traffic,
    fraudProb,
    riskPct,
  };
}

async function fetchLiveFromWeb(): Promise<{ fraudProb: number; riskPct: number; traffic: Record<string, number> } | null> {
  const candidates = [
    (import.meta as any)?.env?.VITE_BFSI_LIVE_ENDPOINT,
    (import.meta as any)?.env?.BFSI_LIVE_ENDPOINT,
  ].filter(Boolean) as string[];

  const endpoint = candidates[0];
  if (!endpoint) return null;

  try {
    const res = await fetch(endpoint, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    if (
      typeof json?.fraudProb !== "number" ||
      typeof json?.riskPct !== "number" ||
      typeof json?.traffic !== "object"
    ) {
      return null;
    }
    return json;
  } catch {
    return null;
  }
}

export function BfsiLiveIntelligencePanel() {
  const [history, setHistory] = React.useState<LiveDatum[]>(() => {
    const initial: LiveDatum[] = [];
    let prev: LiveDatum | null = null;
    for (let i = 0; i < 12; i++) {
      const tick = generateSimulatedTick(prev, i);
      initial.push(tick);
      prev = tick;
    }
    return initial;
  });

  const [lastUpdatedAt, setLastUpdatedAt] = React.useState<number>(Date.now());

  React.useEffect(() => {
    let alive = true;
    const run = async () => {
      if (!alive) return;
      setHistory((prev) => {
        const prevLast = prev[prev.length - 1] ?? null;
        const nextSim = generateSimulatedTick(prevLast, prev.length);
        return [...prev.slice(-24), nextSim];
      });

      const web = await fetchLiveFromWeb();
      if (!alive) return;

      if (web) {
        setHistory((prev) => {
          const prevLast = prev[prev.length - 1] ?? null;
          const t = (prevLast?.t ?? Date.now()) + 10_000;
          const webTick: LiveDatum = {
            t,
            fraudProb: clamp(web.fraudProb, 0, 1),
            riskPct: clamp(web.riskPct, 0, 100),
          };
          for (const node of NODES) {
            webTick[node.name] = Math.max(1e4, Number(web.traffic?.[node.name] ?? 0));
          }
          return [...prev.slice(-24), webTick];
        });
      }
      setLastUpdatedAt(Date.now());
    };
    const id = window.setInterval(run, 10_000);
    run();
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  const chartConfig = React.useMemo(() => {
    const cfg: Record<string, { label: string; color: string }> = {
      fraudProb: { label: "Fraud-prone probability", color: "oklch(0.78 0.16 332)" },
      riskPct: { label: "Risk %", color: "oklch(0.78 0.16 295)" },
    };
    for (const n of NODES) {
      cfg[n.name] = { label: n.name, color: n.color };
    }
    return cfg;
  }, []);

  const last = history[history.length - 1];

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Live Intelligence</div>
          <div className="mt-0.5 font-display text-xs font-semibold">
            {new Date(lastUpdatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground text-right">Fraud</div>
            <div className="mt-0.5 font-display text-xs font-semibold text-right">
              {last ? `${(last.fraudProb * 100).toFixed(1)}%` : "—"}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground text-right">Risk</div>
            <div className="mt-0.5 font-display text-xs font-semibold text-right">
              {last ? `${last.riskPct.toFixed(1)}%` : "—"}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-4 min-h-0">
        <ChartContainer id="bfsi-live-lines" config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={history} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="t" hide />
              <YAxis
                tick={{ fontSize: 8, fill: "#A0A0B8" }}
                axisLine={false}
                tickLine={false}
                domain={[0, "auto"]}
              />
              <Tooltip
                content={(props) => (
                  <ChartTooltipContent
                    {...(props as any)}
                    formatter={(value: any) => {
                      const key = (props as any)?.payload?.[0]?.dataKey;
                      if (key === "fraudProb") return `${(Number(value) * 100).toFixed(2)}%`;
                      if (key === "riskPct") return `${Number(value).toFixed(2)}%`;
                      return Number(value).toLocaleString();
                    }}
                  />
                )}
              />
              {NODES.map((n) => (
                <Line
                  key={n.name}
                  type="monotone"
                  dataKey={n.name}
                  stroke={n.color}
                  strokeWidth={1.5}
                  dot={false}
                  isAnimationActive={false}
                  connectNulls
                />
              ))}
              <Line
                type="monotone"
                dataKey="fraudProb"
                stroke={"oklch(0.78 0.16 332)"}
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="riskPct"
                stroke={"oklch(0.78 0.16 295)"}
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
