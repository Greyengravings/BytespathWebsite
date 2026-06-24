import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const COOKIE_KEY = "bytespath-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);

    if (!consent) {
      setVisible(true);
      return;
    }

    if (consent === "accepted") {
      loadAnalytics();
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    loadAnalytics();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[9999] w-[92%] max-w-3xl -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-background/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
      {/* Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

      <div className="p-6 md:p-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="max-w-xl">
            <h4 className="font-display text-xl font-semibold text-foreground">
              We use cookies 🍪
            </h4>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We use cookies to improve your browsing experience, analyze website
              traffic, and enhance your experience. By clicking{" "}
              <span className="font-medium text-foreground">Accept</span>,
              you agree to our{" "}
              <Link
                to="/privacy-policy"
                className="text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                Privacy Policy
              </Link>.
            </p>

          </div>

          <div className="flex shrink-0 flex-wrap gap-3">

            <button
              type="button"
              onClick={decline}
              className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-white/20 hover:bg-white/[0.03] hover:text-foreground"
            >
              Decline
            </button>

            <button
              type="button"
              onClick={accept}
              className="btn-primary px-6"
            >
              Accept
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

function loadAnalytics() {
  if ((window as any).__analyticsLoaded) return;
  (window as any).__analyticsLoaded = true;

  // --------------------------
  // Google Analytics
  // --------------------------

  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src =
    "https://www.googletagmanager.com/gtag/js?id=G-P4450H3VCN";

  document.head.appendChild(gaScript);

  gaScript.onload = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];

    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }

    (window as any).gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-P4450H3VCN");
  };

  // --------------------------
  // Microsoft Clarity
  // --------------------------

  (function (
    c: any,
    l: Document,
    a: string,
    r: string,
    i: string
  ) {
    c[a] =
      c[a] ||
      function (...args: any[]) {
        (c[a].q = c[a].q || []).push(args);
      };

    const t = l.createElement(r);
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;

    const y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", "x94uv2yqmn");
}