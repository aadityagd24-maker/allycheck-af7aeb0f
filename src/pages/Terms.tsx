import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sections = [
  { t: "Services", b: "AllyCheck provides manual accessibility auditing, VPAT certification, and developer remediation roadmap services to SaaS companies. All engagements are governed by a separate service agreement issued at the point of engagement." },
  { t: "Use of This Website", b: "This website is provided for informational purposes. You may not reproduce, distribute, or repurpose any content from this site without written permission from AllyCheck." },
  { t: "Limitation of Liability", b: "AllyCheck's liability in connection with any service is limited to the fees paid for that specific engagement. We are not liable for indirect or consequential losses." },
  { t: "Governing Law", b: "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts of India." },
  { t: "Contact", b: "For any questions regarding these terms, contact us at hello@allycheck.in." },
];

export default function Terms() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Helmet>
        <title>Terms of Service — AllyCheck</title>
        <meta name="description" content="AllyCheck terms of service." />
      </Helmet>
      <Nav />
      <main className="section">
        <div className="container-x" style={{ maxWidth: 720 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Terms of Service
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
