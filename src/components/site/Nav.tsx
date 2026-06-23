import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="relative mx-auto max-w-7xl">
        <motion.div 
          style={{ 
            backgroundColor: `rgba(41, 33, 51, ${navOpacity})`,
            borderColor: `rgba(255, 255, 255, ${borderOpacity})`,
            backdropFilter: isScrolled ? "blur(12px)" : "none"
          }}
          className="relative z-50 flex items-center justify-between rounded-full border px-4 py-1.5 md:px-6 md:py-2.5"
        >
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img
              src={bytesPathLogoSrc}
              alt="BYTESPATH"
              className="h-5 w-auto rounded-md md:h-8"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-foreground bg-white/[0.06]" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="rounded-full px-4 py-1.5 text-xs font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block translate-x-3">
  <Link
    to="/contact"
    className="btn-primary !py-2 !px-5 text-xs font-bold"
  >
    Book Consultation
  </Link>
</div>
          {/* Mobile Menu Button */}
          <button 
            className="flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 top-[calc(100%+12px)] w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#3b2a54]/80 p-4 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    onClick={() => setIsOpen(false)}
                    activeOptions={{ exact: true }}
                    activeProps={{ className: "text-white bg-white/10" }}
                    inactiveProps={{ className: "text-white/70 hover:text-white hover:bg-white/5" }}
                    className="rounded-xl px-4 py-2.5 text-base font-medium transition-all"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-3 pt-3 border-t border-white/10">
                  <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="btn-primary flex w-full justify-center !py-3.5 text-sm font-bold"
                  >
                    Book Consultation
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
