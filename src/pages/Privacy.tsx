import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sections = [
  { t: "Who We Are", b: "AllyCheck is a manual accessibility auditing agency. Our website is allycheck.in. You can contact us at addy@allycheck.in." },
  { t: "What Data We Collect", b: "We collect information you voluntarily submit via our contact form, including your name, job title, company name, email address, and product URL. We do not use tracking cookies, advertising pixels, or third-party analytics." },
  { t: "How We Use Your Data", b: "Information submitted through our contact form is used solely to respond to your enquiry and assess your accessibility requirements. We do not sell, share, or rent your data to any third parties." },
  { t: "Data Retention", b: "Enquiry data is retained for a maximum of 12 months, after which it is permanently deleted." },
  { t: "Your Rights", b: "You have the right to request access to, correction of, or deletion of your personal data at any time. Contact us at addy@allycheck.in to exercise these rights." },
  { t: "Changes to This Policy", b: "We may update this policy occasionally. The date at the top of this page reflects the most recent revision." },
];

export default function Privacy() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Helmet>
        <title>Privacy Policy — AllyCheck</title>
        <meta name="description" content="AllyCheck privacy policy." />
      </Helmet>
      <Nav />
      <main className="section">
        <div className="container-x" style={{ maxWidth: 720 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Privacy Policy
          </h1>
          <div className="mt-3" style={{ color: "var(--ink-secondary)", fontSize: "0.9rem" }}>
            Last updated: May 2025
          </div>
          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.t}>
                <h3 className="h3">{s.t}</h3>
                <p className="mt-3" style={{ color: "var(--ink-secondary)" }}>{s.b}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
