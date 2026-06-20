import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const bytesPathLogoSrc = `${import.meta.env.BASE_URL}BYTESPATH.png`;
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Company" },
  { to: "/Newsroom", label: "Newsroom" },
] as const;

export function Nav() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpacity, setNavOpacity] = useState(0);
  const [borderOpacity, setBorderOpacity] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    
    // Manual interpolation to avoid WAAPI monotonic errors
    const opacity = Math.min(0.8, latest / 100);
    const border = Math.min(0.1, latest / 100);
    
    setNavOpacity(opacity);
    setBorderOpacity(border);
  });

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 transition-all duration-300">
      <motion.div 
        style={{ 
          backgroundColor: `rgba(41, 33, 51, ${navOpacity})`,
          borderColor: `rgba(255, 255, 255, ${borderOpacity})`,
          backdropFilter: isScrolled ? "blur(12px)" : "none"
        }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-3"
      >
        <Link to="/" className="flex items-center gap-2">
          <img
            src={bytesPathLogoSrc}
            alt="BYTESPATH"
            className="h-8 w-auto rounded-md"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground bg-white/[0.06]" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary !py-2.5 !px-6 text-sm">
          Book Consultation
        </Link>
      </motion.div>
    </header>
  );
}
