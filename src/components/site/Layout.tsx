import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-violet" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.4] grid-bg [mask-image:radial-gradient(900px_500px_at_50%_0%,black,transparent_70%)]" />
      <div>
        <Nav />
        <main className="w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
