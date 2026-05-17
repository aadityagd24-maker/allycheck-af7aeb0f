import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BrandMark from "@/components/BrandMark";

export default function BookACall() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Helmet>
        <title>Book a Call — AllyCheck</title>
        <meta name="description" content="Get in touch with AllyCheck to scope your accessibility audit and VPAT certification." />
      </Helmet>

      <header style={{ borderBottom: "1px solid var(--rule)", background: "var(--bg)" }}>
        <div className="container-x flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <BrandMark size={42} />

            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--ink)" }}>
              AllyCheck
            </span>
          </Link>

          <Link to="/" className="text-link" style={{ fontSize: "0.875rem" }}>
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="container-x py-24">
        <div className="max-w-2xl">
          <div className="eyebrow">Get in Touch</div>
          <h1 className="h2 mt-5">Let's scope your audit.</h1>

          <p className="mt-6" style={{ color: "var(--ink-secondary)", fontSize: "1.1rem" }}>
            Email us with a short note about your product, target markets, and timeline. We'll reply within
            one business day to schedule a 15-minute briefing call.
          </p>

          <div
            className="mt-10"
            style={{
              background: "#fff",
              border: "1px solid var(--rule)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <div>
              <div className="eyebrow" style={{ fontSize: "0.7rem" }}>
                Email
              </div>

              <a
                href="mailto:addy@allycheck.in?subject=Accessibility%20audit%20enquiry"
                className="text-link"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--accent)" }}
              >
                addy@allycheck.in
              </a>
            </div>

            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "1.25rem" }}>
              <div className="eyebrow" style={{ fontSize: "0.7rem" }}>
                What to include
              </div>

              <ul className="mt-3 space-y-2" style={{ color: "var(--ink-secondary)", fontSize: "0.95rem" }}>
                <li>• Your company and product URL</li>
                <li>• Target markets (EU, UK, US)</li>
                <li>• Compliance deadline, if any</li>
                <li>• Approximate scope (pages or user flows)</li>
              </ul>
            </div>

            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "1.25rem" }}>
              <a
                href="mailto:addy@allycheck.in?subject=Accessibility%20audit%20enquiry"
                className="btn-primary"
                style={{ display: "inline-flex" }}
              >
                Email us →
              </a>
            </div>
          </div>

          <p className="mt-8" style={{ fontSize: "0.85rem", color: "var(--ink-secondary)" }}>
            We respond to all enquiries within one business day, Monday to Friday.
          </p>
        </div>
      </main>
    </div>
  );
}
