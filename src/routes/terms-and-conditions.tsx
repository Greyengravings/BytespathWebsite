import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Bytespath" },
      {
        name: "description",
        content:
          "Terms & Conditions governing the use of Bytespath Solutions LLP website, consulting services, software solutions, and related offerings.",
      },
    ],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <SiteLayout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <div className="eyebrow">Terms & Conditions</div>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
              Terms & Conditions
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Last Updated:{" "}
              <span className="text-foreground/80 font-medium">
                February 2026
              </span>
            </p>

            <div className="mt-10 card-panel p-8">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Bytespath Solutions LLP (“Bytespath”, “we”, “our”,
                or “us”). These Terms & Conditions govern your access to and
                use of our website, products, consulting services, software
                solutions, and related offerings available through
                <span className="text-foreground/80">
                  {" "}
                  www.bytespath.in
                </span>
                .
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                By accessing our website or engaging with our services, you
                agree to comply with these Terms & Conditions.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                1. Company Information
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Bytespath Solutions LLP is a technology consulting and
                implementation company specializing in Artificial Intelligence,
                Digital Transformation, Cloud Infrastructure, Software
                Engineering, Data Solutions, and BFSI-focused technology
                services.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                2. Use of Website
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                You agree to use this website only for lawful purposes.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                You must not:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Attempt unauthorized access to systems or networks</li>
                <li>Distribute malicious software or harmful code</li>
                <li>Interfere with website functionality</li>
                <li>Misrepresent your identity or organization</li>
                <li>Use website content without authorization</li>
              </ul>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                3. Professional Services
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Any consulting, implementation, development, deployment,
                support, or advisory services provided by Bytespath shall be
                governed by separate project agreements, proposals, statements
                of work, or contracts where applicable.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Project-specific terms shall prevail in the event of any
                conflict with these website terms.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                4. Intellectual Property
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                All content available on this website, including:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Logos</li>
                <li>Branding</li>
                <li>Graphics</li>
                <li>Website design</li>
                <li>Text content</li>
                <li>Reports</li>
                <li>Frameworks</li>
                <li>Methodologies</li>
              </ul>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                are the intellectual property of Bytespath Solutions LLP unless
                otherwise stated.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                No content may be copied, reproduced, distributed, modified, or
                commercially used without prior written permission.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                5. Client Confidentiality
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Bytespath treats client information, business data, project
                documentation, technical assets, and confidential materials
                with strict confidentiality.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Information shared during consultations, discovery sessions,
                project execution, or support engagements is handled in
                accordance with contractual obligations and applicable laws.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                6. Data Protection & Security
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Bytespath maintains reasonable technical, organizational, and
                administrative safeguards to protect information entrusted to
                us.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                We are committed to responsible data handling practices and
                continuously work to improve security controls, operational
                resilience, and governance processes.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                While we strive to maintain a secure environment, no technology
                system can guarantee absolute security.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                7. Third-Party Services
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our website and services may utilize or integrate third-party
                platforms, cloud providers, analytics services, communication
                tools, and software products.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Bytespath is not responsible for the availability, security,
                accuracy, or practices of third-party services beyond our
                direct control.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                8. No Professional Financial Advice
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Information provided through our website, articles, reports,
                presentations, or communications is for informational purposes
                only.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nothing on this website constitutes financial, investment,
                legal, accounting, regulatory, or professional advice.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Users should seek qualified professional guidance before making
                business, financial, or regulatory decisions.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                9. Limitation of Liability
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                To the maximum extent permitted by applicable law, Bytespath
                shall not be liable for any indirect, incidental,
                consequential, special, or punitive damages arising from:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Use of the website</li>
                <li>Service interruptions</li>
                <li>Data loss</li>
                <li>Third-party failures</li>
                <li>Business interruption</li>
                <li>Reliance on information published on the website</li>
              </ul>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our total liability, where applicable, shall be limited to the
                amount paid for the specific services giving rise to the claim.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                10. Compliance & Ethical Use
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Bytespath supports lawful, ethical, and responsible use of
                technology.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Clients and users are responsible for ensuring their use of
                services complies with applicable laws, regulations, industry
                standards, and internal governance requirements.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                11. Changes to These Terms
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may update these Terms & Conditions periodically to reflect
                changes in legal requirements, industry practices, business
                operations, or service offerings.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Updated versions will be published on this page with a revised
                “Last Updated” date.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                12. Governing Law
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                These Terms & Conditions shall be governed by and interpreted
                in accordance with the laws of India.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms shall be subject to the
                exclusive jurisdiction of the courts located in Mumbai,
                Maharashtra, India.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                13. Contact Information
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                For questions regarding these Terms & Conditions, please
                contact:
              </p>

              <div className="mt-4 text-muted-foreground leading-relaxed space-y-2">
                <p>
                  <span className="text-foreground/80 font-medium">
                    Bytespath Solutions LLP
                  </span>
                </p>

                <p>
                  Email:{" "}
                  <a
                    className="text-primary hover:underline"
                    href="mailto:legal@bytespath.in"
                  >
                    legal@bytespath.in
                  </a>
                </p>

                <p>
                  Website:{" "}
                  <a
                    className="text-primary hover:underline"
                    href="https://www.bytespath.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.bytespath.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}