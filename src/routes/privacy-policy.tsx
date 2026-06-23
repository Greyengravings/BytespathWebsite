import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Bytespath" }, // Some versions prefer this
      {
        name: "description",
        content: "Bytespath Solutions LLP privacy policy describing how we collect, use, disclose, and safeguard personal information.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <SiteLayout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <div className="eyebrow">Privacy Policy</div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
              Bytespath Solutions LLP
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Effective Date: <span className="text-foreground/80 font-medium">25th December 2025</span>
            </p>

            <div className="mt-10 card-panel p-8">
              <p className="text-muted-foreground leading-relaxed">
                Bytespath Solutions LLP (“Bytespath”, “we”, “our”, or “us”) values the trust you place in us and
                is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard personal and business information when you visit our website
                <span className="text-foreground/80"> www.bytespath.in</span>, engage with our services, or
                communicate with us.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                By accessing our website or using our services, you agree to the practices described in this
                Privacy Policy.
              </p>

              <h2 className="mt-8 font-display text-2xl font-semibold">1. Information We Collect</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We collect information only when it is necessary to provide our services or respond to business
                inquiries.
              </p>

              <h3 className="mt-6 font-display text-lg font-semibold">a. Personal Information</h3>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name and designation</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                This information is typically collected when you:
              </p>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Fill out a contact or inquiry form</li>
                <li>Communicate with us via email or phone</li>
                <li>Engage with us for consulting or project discussions</li>
              </ul>

              <h3 className="mt-6 font-display text-lg font-semibold">b. Business & Project Information</h3>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Project requirements and specifications</li>
                <li>Technical documentation and assets shared for development or consulting</li>
                <li>
                  Access credentials provided temporarily for project execution or support
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                All business and project-related information is treated as strictly confidential.
              </p>

              <h3 className="mt-6 font-display text-lg font-semibold">c. Technical Information</h3>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>IP address</li>
                <li>Browser type and device information</li>
                <li>Website usage data (pages visited, time spent, etc.)</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                This data is collected through standard analytics and cookies to improve website performance.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">2. How We Use Your Information</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">BytesPath uses collected information for the following purposes:</p>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>To respond to inquiries, proposals, and business communications</li>
                <li>To deliver IT consulting, software development, and technology services</li>
                <li>To manage client relationships, contracts, and billing</li>
                <li>To improve our website, services, and internal processes</li>
                <li>To comply with legal, regulatory, and contractual obligations</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We do not use your information for unsolicited marketing or unrelated purposes.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">3. Data Sharing & Disclosure</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Bytespath does not sell, rent, or trade personal or business information.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">Information may be shared only under the following circumstances:</p>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>With authorized internal team members involved in service delivery</li>
                <li>
                  With trusted third-party service providers (such as hosting, analytics, or CRM tools) strictly
                  for operational purposes
                </li>
                <li>When required by law, regulation, or legal process</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                All third parties are required to maintain confidentiality and data security standards.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">4. Data Security</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We implement reasonable technical and organizational safeguards to protect your information against
                unauthorized access, alteration, disclosure, or destruction. Access to sensitive data is restricted to
                authorized personnel only.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                While we take appropriate security measures, no digital system can be guaranteed to be completely
                secure.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">5. Data Retention</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We retain personal and business information only for as long as necessary to:
              </p>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Fulfill business and contractual obligations</li>
                <li>Comply with legal and regulatory requirement</li>
                <li>
                  Client project data is retained and handled according to contractual agreements or confidentiality
                  terms
                </li>
              </ul>

              <h2 className="mt-10 font-display text-2xl font-semibold">6. Cookies & Analytics</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                BytesPath uses cookies and similar technologies to:
              </p>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Analyze website traffic and performance</li>
                <li>Improve user experience</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You can manage or disable cookies through your browser settings. Disabling cookies may affect certain
                website functionalities.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">7. Your Rights</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Subject to applicable laws (including the Digital Personal Data Protection Act, 2023, and GDPR where applicable),
                you may have the right to:
              </p>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Request access to your personal information</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Requests can be made by contacting us at the details provided below.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">8. Third-Party Links</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. BytesPath is not responsible for the privacy practices
                or content of such external sites. We encourage you to review their privacy policies separately.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">9. Updates to This Privacy Policy</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                BytesPath may update this Privacy Policy from time to time to reflect changes in legal requirements or business
                practices. Updates will be posted on this page with a revised effective date.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">10. Contact Information</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact:
              </p>

              <div className="mt-4 text-muted-foreground leading-relaxed space-y-2">
                <p>
                  <span className="text-foreground/80 font-medium">BytesPath Solutions LLP</span>
                </p>
                <p>
                  Email:{" "}
                  <a className="text-primary hover:underline" href="mailto:vishakha.parikh.legal@bytespath.in">
                    vishakha.parikh.legal@bytespath.in
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a className="text-primary hover:underline" href="https://www.bytespath.in" target="_blank" rel="noopener noreferrer">
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

