import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-violet" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.4] grid-bg [mask-image:radial-gradient(900px_500px_at_50%_0%,black,transparent_70%)]" />
      <div className="pt-6">
        <Nav />
        <main className="mx-auto max-w-6xl px-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
