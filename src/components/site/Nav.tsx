import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-[oklch(0.16_0.03_285_/_0.75)] px-4 py-2 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 pl-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.72_0.18_295)] to-[oklch(0.45_0.22_295)] shadow-[0_0_24px_oklch(0.55_0.22_295_/_0.6)]">
            <span className="block h-2 w-2 rounded-full bg-white/90" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Bytespath</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground bg-white/[0.06]" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-full px-4 py-1.5 text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn-primary !py-2 !px-4 text-xs">
          Schedule Consultation
        </Link>
      </div>
    </header>
  );
}
