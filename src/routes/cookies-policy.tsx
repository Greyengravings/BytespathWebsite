import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/cookies-policy")({
  head: () => ({
    meta: [
      { title: "Cookies Policy — Bytespath" },
      {
        name: "description",
        content:
          "Bytespath Solutions LLP Cookies Policy explaining how cookies and similar technologies are used on our website.",
      },
    ],
  }),
  component: CookiesPolicy,
});

function CookiesPolicy() {
  return (
    <SiteLayout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <div className="eyebrow">Cookies Policy</div>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
              Cookies Policy
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Latest Updated:{" "}
              <span className="text-foreground/80 font-medium">
                February 2026
              </span>
            </p>

            <div className="mt-10 card-panel p-8">
              <p className="text-muted-foreground leading-relaxed">
                Bytespath Solutions LLP (“Bytespath”, “we”, “our”, or “us”)
                uses cookies and similar technologies on our website
                <span className="text-foreground/80">
                  {" "}
                  www.bytespath.in
                </span>
                .
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                By using our website, you consent to the use of cookies in
                accordance with this Cookie Policy.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                1. What Are Cookies
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you
                visit a website.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cookies help websites function properly and improve user
                experience by remembering preferences and collecting usage
                information.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cookies generally do not contain personal information but may
                be linked to personal data stored by us.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                2. How We Use Cookies
              </h2>

              <h3 className="mt-6 font-display text-lg font-semibold">
                a. Essential Cookies
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                These cookies are necessary for the website to function
                properly.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                They help with:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Website security</li>
                <li>Basic functionality</li>
                <li>Form submissions</li>
                <li>Page navigation</li>
              </ul>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Without these cookies, the website may not work correctly.
              </p>

              <h3 className="mt-8 font-display text-lg font-semibold">
                b. Analytics Cookies
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                We use analytics tools to understand how visitors interact
                with our website.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                This helps us:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Improve website performance</li>
                <li>Understand visitor behavior</li>
                <li>Optimize user experience</li>
              </ul>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                We may use:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Google Analytics</li>
                <li>Microsoft Clarity</li>
                <li>RB2B</li>
              </ul>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                These tools may collect:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>Country or region</li>
                <li>Referring website</li>
              </ul>

              <h3 className="mt-8 font-display text-lg font-semibold">
                c. Functional Cookies
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                These cookies remember your preferences such as:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Language settings</li>
                <li>Form data</li>
                <li>User preferences</li>
              </ul>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                They improve the user experience on future visits.
              </p>

              <h3 className="mt-8 font-display text-lg font-semibold">
                d. Marketing Cookies
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may use marketing cookies to understand visitor interests
                and improve our services.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                These cookies help us:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Measure campaign performance</li>
                <li>Improve marketing strategies</li>
              </ul>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                We may use:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>LinkedIn tracking</li>
                <li>Google Ads tracking</li>
              </ul>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                3. Third-Party Cookies
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Some cookies are placed by third-party services that appear on
                our website.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                These may include:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Google Analytics</li>
                <li>Microsoft Clarity</li>
                <li>LinkedIn</li>
                <li>Google Ads</li>
              </ul>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                These third-party providers have their own privacy and cookie
                policies.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                4. How Long Cookies Stay
              </h2>

              <ul className="mt-4 list-disc pl-5 text-muted-foreground leading-relaxed space-y-3">
                <li>
                  <strong>Session Cookies</strong> – These expire when you
                  close your browser.
                </li>
                <li>
                  <strong>Persistent Cookies</strong> – These remain on your
                  device for a defined period or until deleted.
                </li>
              </ul>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                5. Managing Cookies
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                You can control and manage cookies through your browser
                settings.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                You can:
              </p>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                <li>Delete cookies</li>
                <li>Block cookies</li>
                <li>Allow only certain cookies</li>
              </ul>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Browser settings can usually be found under:
                <span className="text-foreground/80">
                  {" "}
                  Settings &gt; Privacy &gt; Cookies
                </span>
                .
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Disabling cookies may affect website functionality.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                6. Changes to This Cookie Policy
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Any updates will be posted on this page with a revised
                “Last Updated” date.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold">
                7. Contact Us
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                If you have any questions about this Cookie Policy, please
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
                    href="mailto:info@bytespath.in"
                  >
                    info@bytespath.in
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