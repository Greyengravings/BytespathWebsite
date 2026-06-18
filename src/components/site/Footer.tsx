import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/5">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.72_0.18_295)] to-[oklch(0.45_0.22_295)]">
              <span className="block h-2 w-2 rounded-full bg-white/90" />
            </span>
            <span className="font-display text-lg font-semibold">Bytespath</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Secure intelligence for modern financial institutions. Built for Banking,
            Insurance, Fintech and NBFC.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Navigate</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/capabilities" className="hover:text-foreground">Capabilities</Link></li>
            <li><Link to="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Focus</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Banking</li>
            <li>Insurance</li>
            <li>Fintech</li>
            <li>NBFC</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 border-t border-white/5 px-6 py-6 text-xs text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Bytespath Technologies. All rights reserved.</span>
        <span className="tracking-[0.2em] uppercase text-[oklch(0.7_0.12_295)]">
          BFSI · AI · Risk · Compliance · Security
        </span>
      </div>
    </footer>
  );
}
