import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Youtube, Mail, ArrowRight, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.121 1.12.33 2.301.509 3.527.509 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638 0 12.017 0z" />
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState("");  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/bytespathglobal/" },
    { icon: Twitter, href: "https://x.com/bytespath" },
    { icon: Instagram, href: "https://www.instagram.com/bytespathglobal" },
    { icon: Facebook, href: "https://www.facebook.com/bytespath/" },
    { icon: PinterestIcon, href: "#" },
    { icon: Youtube, href: "https://www.youtube.com/@bytespath" },
    { icon: Mail, href: "#" },
  ];
  const handleNewsletterSignup = async () => {
  if (!email) return;

  setLoading(true);

  try {
    await fetch(
  "https://script.google.com/macros/s/AKfycbx6LRXSI2VOoFxsxYRCiykVmtBVwbAq-TcSa-22-KwX1jcdrxJ1GMcUtuOJ6SIM_ri2/exec",
  {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      email,
      source: "Bytespath Website",
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    }),
  }
);

    setSuccess(true);
    setEmail("");
  } catch (error) {
    console.error(error);
  }

  setLoading(false);
};

  return (
    <footer className="mt-32 border-t border-white/5 bg-background pb-12 pt-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <img
              src={`${import.meta.env.BASE_URL}BYTESPATH.png`}
              alt="BYTESPATH"
                className="h-9 w-auto rounded-lg shadow-lg shadow-primary/1"
              />
            </Link>
            <div>
              <h4 className="font-display text-sm font-semibold text-foreground mb-4">About Bytespath</h4>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Bytespath Global is an AI implementation company helping BFSI organizations adopt AI securely with the right foundation, consulting, deployment, governance and long-term support.
              </p>
            </div>
            <div className="flex gap-5">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a 
                  key={i}
                  href={href} 
                  whileHover={{ y: -3, color: "var(--primary)" }}
                  className="text-muted-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground tracking-tight">Company</h4>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Vision & Mission</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Founders</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground tracking-tight">Legal & Security</h4>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies-policy" className="hover:text-primary transition-colors">Cookies Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Security Practices</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Compliance</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Governance</Link></li>
            </ul>
          </div>
<div>
  <h4 className="font-display text-sm font-semibold text-foreground tracking-tight">
    Newsletter
  </h4>

  <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
    Subscribe to get the latest BFSI AI intelligence, industry updates, and insights delivered directly to your inbox.
  </p>

  <div className="mt-6">
    <a
      href="http://greyengravings.github.io/cms-frontend/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 transition-all hover:border-primary/50 hover:bg-white/[0.05]"
    >
      <span className="text-sm text-muted-foreground">
        Join our newsletter
      </span>

      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
        <ArrowRight className="h-4 w-4" />
      </span>
    </a>
  </div>
  </div>
</div>{/* CLOSE GRID HERE */}

      <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
        <p className="text-xs text-muted-foreground/60">
          © 2026 Bytespath Global. All Rights Reserved. Enterprise-grade AI for BFSI.
        </p>
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-semibold">
          <span>Mumbai (HQ)</span>
          <span className="h-1 w-1 rounded-full bg-white/10" />
          <span>Austin (USA)</span>
        </div>
      </div>
    </div>
  </footer>
  );
}

