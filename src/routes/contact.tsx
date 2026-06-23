import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bytespath" },
      {
        name: "description",
        content:
          "Talk to a BFSI strategy lead at Bytespath. We respond within one business day.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-36 pb-0">
        <div className="container mx-auto px-6">

          <div className="grid gap-20 lg:grid-cols-[0.85fr_1.15fr] items-start">

            {/* LEFT COLUMN */}
            <div>

              <div className="eyebrow">Contact</div>

              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
                Let's scope <span className="text-gradient">outcomes,</span>
                <br />
                <span className="text-gradient">not slides.</span>
              </h1>

              <p className="mt-6 max-w-xl text-muted-foreground">
                Tell us where you want to move the needle — fraud,
                compliance, AI, digital. A BFSI strategy lead
                will respond within one business day.
              </p>

              <div className="mt-16 space-y-10">

                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Email
                  </div>

                  <a
                    href="mailto:info@bytespath.com"
                    className="mt-2 block text-base hover:text-primary transition-colors"
                  >
                    info@bytespath.com
                  </a>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Headquarters
                  </div>

                  <div className="mt-2 text-base">
                    Mumbai, India
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Response Time
                  </div>

                  <div className="mt-2 text-base">
                    Under one business day
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="card-panel p-8 space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">

                <Field label="Full Name *">
                  <input
                    required
                    className="ipt"
                    placeholder="Your Good Name"
                  />
                </Field>

                <Field label="Work Email *">
                  <input
                    required
                    type="email"
                    className="ipt"
                    placeholder="name@organization.com"
                  />
                </Field>

                <Field label="Company *">
                  <input
                    required
                    className="ipt"
                    placeholder="Name of Organization"
                  />
                </Field>

                <Field label="Role">
                  <input
                    className="ipt"
                    placeholder="Designation"
                  />
                </Field>

                <Field label="Organization Type">
                  <select className="ipt">
                    <option>Banking</option>
                    <option>Insurance</option>
                    <option>Fintech</option>
                    <option>NBFC</option>
                    <option>Other</option>
                  </select>
                </Field>

                <Field label="Area of Interest">
                  <select className="ipt">
                    <option>Fraud & Risk</option>
                    <option>Compliance Technology</option>
                    <option>AI / ML</option>
                    <option>Digital Transformation</option>
                    <option>Data Platforms</option>
                    <option>Other</option>
                  </select>
                </Field>

              </div>

              <Field label="What would you like to discuss?">
                <textarea
                  rows={5}
                  className="ipt resize-none"
                  placeholder="A few sentences on the outcome you want."
                />
              </Field>

              <div className="flex items-center justify-between border-t border-white/5 pt-5">
                <span className="text-xs text-muted-foreground">
                  We respond within one business day.
                </span>

                <button
                  type="submit"
                  className="btn-primary"
                >
                  {sent
                    ? "Message sent ✓"
                    : "Schedule Consultation"}
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

      <style>{`
        .ipt {
          width: 100%;
          background: oklch(0.14 0.025 285 / 0.7);
          border: 1px solid oklch(1 0 0 / 0.08);
          border-radius: 0.75rem;
          padding: 0.75rem 0.9rem;
          font-size: 0.875rem;
          color: oklch(0.97 0.005 285);
          outline: none;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .ipt:focus {
          border-color: oklch(0.62 0.21 295 / 0.6);
          box-shadow: 0 0 0 4px oklch(0.62 0.21 295 / 0.12);
        }

        .ipt::placeholder {
          color: oklch(0.55 0.02 285);
        }
      `}</style>
    </SiteLayout>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>

      <div className="mt-2">
        {children}
      </div>
    </label>
  );
}