import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function Hero() {
  return (
    <section id="top" style={{ background: "var(--bg)", minHeight: "90vh" }} className="flex items-center">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center py-24">
        <div>
          <div className="eyebrow fade-up" style={{ animationDelay: "0ms" }}>
            European Accessibility Act · Enforcement Begins June 2025
          </div>
          <h1 className="h1 mt-6 fade-up" style={{ animationDelay: "120ms" }}>
            Your Product Is Either<br />Compliant — Or a Liability.
          </h1>
          <p
            className="mt-8 fade-up"
            style={{ fontSize: "1.25rem", color: "var(--ink-secondary)", maxWidth: "520px", animationDelay: "240ms" }}
          >
            AllyCheck provides manual accessibility audits and VPAT certification that enterprise procurement teams actually accept. Stop losing deals. Start closing them.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6 fade-up" style={{ animationDelay: "360ms" }}>
            <Link to="/book-a-call" className="btn-primary">Book a Call</Link>
            <a href="#process" className="text-link">See How It Works →</a>
          </div>
          <p className="mt-6 fade-up" style={{ fontSize: "0.8rem", color: "var(--ink-secondary)", animationDelay: "480ms" }}>
            Used by SaaS teams closing 6-figure enterprise contracts across the EU & UK.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end fade-up" style={{ animationDelay: "300ms" }}>
          <CertificateMock />
        </div>
      </div>
    </section>
  );
}

function CertificateMock() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid var(--rule)",
        padding: "2.5rem 2.25rem",
        width: "100%",
        maxWidth: "440px",
        transform: "rotate(-1.5deg)",
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.18)",
        position: "relative",
      }}
    >
      <div className="eyebrow" style={{ fontSize: "0.65rem" }}>Certified Document</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginTop: "0.5rem", lineHeight: 1.2 }}>
        VPAT Certification Report
      </h3>
      <div style={{ fontSize: "0.75rem", color: "var(--ink-secondary)", marginTop: "0.25rem", letterSpacing: "0.05em" }}>
        VOLUNTARY PRODUCT ACCESSIBILITY TEMPLATE 2.4 · ITPC
      </div>
      <div style={{ borderTop: "1px solid var(--rule)", margin: "1.5rem 0" }} />
      <div className="space-y-3">
        {[100, 85, 92, 70, 88, 60, 95].map((w, i) => (
          <div key={i} style={{ height: "8px", background: "#EFEDE6", width: `${w}%`, borderRadius: "1px" }} />
        ))}
      </div>
      <div style={{ borderTop: "1px solid var(--rule)", margin: "1.5rem 0 1rem" }} />
      <div className="flex justify-between items-end">
        <div>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-secondary)" }}>
            Conformance
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginTop: "0.25rem" }}>
            WCAG 2.1 AA
          </div>
        </div>
        <div
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "50%",
            border: "1px solid var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", inset: "5px", borderRadius: "50%", border: "1px dashed var(--accent)" }} />
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              color: "var(--accent)",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Ally<br/>Check
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const names = ["Meridian SaaS", "Callbridge", "Vaultly", "Opentrack", "NorthLayer", "Compliant.io"];
  return (
    <section style={{ background: "var(--surface)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div className="container-x py-10 text-center">
        <div className="eyebrow" style={{ color: "var(--ink-secondary)" }}>
          Trusted by teams building for compliance-first buyers
        </div>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4" style={{ color: "var(--ink-secondary)" }}>
          {names.map((n, i) => (
            <div key={n} className="flex items-center gap-x-8">
              <span style={{ fontSize: "0.95rem", fontFamily: "var(--font-display)", fontStyle: "italic" }}>{n}</span>
              {i < names.length - 1 && (
                <span style={{ height: "16px", width: "1px", background: "var(--rule)" }} className="hidden md:inline-block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RiskSection() {
  return (
    <section id="why-manual" className="section" style={{ background: "var(--surface)" }}>
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow">The Hard Truth About Accessibility Compliance</div>
          <h2 className="h2 mt-5">Overlays Don't Pass Audits.<br/>Manual Experts Do.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <div style={{ borderLeft: "3px solid var(--danger)", paddingLeft: "2rem" }}>
            <div className="eyebrow" style={{ color: "var(--danger)" }}>What most companies do</div>
            <h3 className="h3 mt-3">Plug in a widget and hope for the best.</h3>
            <p className="mt-5" style={{ color: "var(--ink-secondary)" }}>
              Accessibility overlay tools like UserWay or accessiBe claim to fix compliance in one line of code. They don't. The European Accessibility Act requires conformance to WCAG 2.1 AA — a standard that automated tools miss between 30–70% of actual violations. When a procurement team sends your product to their legal department, a widget receipt isn't documentation. It's a red flag.
            </p>
            <div
              className="mt-6"
              style={{ background: "var(--danger-bg)", borderLeft: "3px solid var(--danger)", padding: "1rem 1.25rem", fontSize: "0.95rem", color: "var(--ink)" }}
            >
              <strong>⚠ Enforcement under the EAA begins June 28, 2025.</strong> Non-compliant companies face market exclusion and fines.
            </div>
          </div>
          <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "2rem" }}>
            <div className="eyebrow">The AllyCheck approach</div>
            <h3 className="h3 mt-3">Human auditors. Real documentation. Accepted by legal.</h3>
            <p className="mt-5" style={{ color: "var(--ink-secondary)" }}>
              Every AllyCheck audit is conducted by certified accessibility specialists — not bots. We test with real assistive technologies (JAWS, NVDA, VoiceOver), produce VPAT 2.4 reports recognised under Section 508 and EN 301 549, and provide developer-ready remediation guides your engineering team can act on immediately.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["WCAG 2.1 AA & 2.2 coverage", "VPAT 2.4 (ITPC format)", "Assistive technology testing", "Named auditor, not an algorithm", "Legal-grade documentation"].map((item) => (
                <li key={item} className="flex items-start gap-3" style={{ fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    { n: "01", t: "Manual Accessibility Audit", b: "A page-by-page review of your SaaS product by a certified human auditor. We test keyboard navigation, screen reader compatibility, colour contrast, focus management, and 50+ WCAG 2.1 success criteria. You receive a detailed findings report — not a spreadsheet, a proper document." },
    { n: "02", t: "VPAT Certification Report", b: "A Voluntary Product Accessibility Template (VPAT 2.4) is the only document enterprise procurement, government buyers, and legal departments accept as proof of accessibility compliance. We author it. We stand behind it. It carries AllyCheck's named certification." },
    { n: "03", t: "Developer Remediation Roadmap", b: "Compliance paperwork means nothing if your product still breaks. Every audit includes a prioritised, developer-ready remediation guide — ordered by severity, written in plain language, with code-level guidance your engineers can execute in their next sprint." },
  ];
  return (
    <section id="services" className="section" style={{ background: "var(--bg)" }}>
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">Our Services</div>
          <h2 className="h2 mt-5">Three Deliverables.<br/>One Standard of Excellence.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <article key={c.n} className="card flex flex-col">
              <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--rule)", lineHeight: 1 }}>
                {c.n}
              </div>
              <h3 className="h3 mt-6">{c.t}</h3>
              <p className="mt-4" style={{ color: "var(--ink-secondary)", fontSize: "1rem" }}>{c.b}</p>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--rule)" }}>
                <Link to="/book-a-call" className="text-link" style={{ color: "var(--accent)" }}>Book a call →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "1", t: "Scope & Discovery", b: "We begin with a 30-minute briefing call to understand your product, your target markets, and your compliance deadlines. We agree the scope — pages, user flows, assistive technology targets — and issue a fixed-price proposal within 24 hours." },
    { n: "2", t: "Manual Audit", b: "Our certified auditors test your product against WCAG 2.1 AA criteria using real assistive technologies. The audit takes 5–10 business days depending on scope. You are kept informed throughout — no black box." },
    { n: "3", t: "Report & Certification", b: "You receive a full findings report, a signed VPAT 2.4 document, and a developer remediation roadmap. Your documentation is ready to share with procurement teams, legal departments, and enterprise buyers immediately." },
  ];
  return (
    <section id="process" className="section" style={{ background: "var(--surface)" }}>
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">Our Process</div>
          <h2 className="h2 mt-5">Audit to Certified. In Three Steps.</h2>
        </div>
        <div className="mt-16 relative grid md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute" style={{ top: "2.5rem", left: "8%", right: "8%", height: "1px", background: "var(--rule)" }} aria-hidden />
          {steps.map((s) => (
            <div key={s.n} className="relative" style={{ background: "var(--surface)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "5rem", color: "var(--rule)", lineHeight: 1, background: "var(--surface)", display: "inline-block", paddingRight: "1rem" }}>
                {s.n}
              </div>
              <h3 className="h3 mt-4">{s.t}</h3>
              <p className="mt-4" style={{ color: "var(--ink-secondary)", fontSize: "1rem" }}>{s.b}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center" style={{ color: "var(--ink-secondary)", fontSize: "0.95rem" }}>
          Average time from kickoff to certification: 8 business days.
        </p>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section style={{ background: "var(--accent)", color: "#fff" }} className="section">
      <div className="container-x relative text-center">
        <span aria-hidden style={{ position: "absolute", top: "-3rem", left: "0", fontFamily: "var(--font-display)", fontSize: "8rem", opacity: 0.2, lineHeight: 1 }}>
          "
        </span>
        <blockquote style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.75rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.4 }}>
          We'd lost two enterprise deals in one quarter because procurement flagged our accessibility documentation. AllyCheck fixed that. We now lead with our VPAT in every sales process.
        </blockquote>
        <div className="mt-8" style={{ fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.75 }}>
          — Chief Product Officer, B2B SaaS Platform (Series B)
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="container-x text-center">
        <div className="eyebrow">Who We Are</div>
        <h2 className="h2 mt-5" style={{ maxWidth: "780px", margin: "1.25rem auto 0" }}>
          Senior auditors. No juniors. No automation.
        </h2>
        <p className="mt-6" style={{ color: "var(--ink-secondary)", maxWidth: "600px", margin: "1.5rem auto 0", fontSize: "1.05rem" }}>
          AllyCheck was founded to fill a gap in the market — accessible, senior-led auditing for SaaS companies who need compliance documentation that actually holds up to enterprise scrutiny. Every audit is conducted by a certified accessibility professional with hands-on assistive technology experience.
        </p>
        <p className="mt-6" style={{ color: "var(--ink-secondary)", fontSize: "0.85rem", letterSpacing: "0.02em" }}>
          Certified under IAAP CPACC framework. Operating across EU, UK, and Indian SaaS markets.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <Helmet>
        <title>AllyCheck — Manual Accessibility Audits & VPAT Certification</title>
        <meta name="description" content="Manual accessibility audits and VPAT certification for SaaS companies navigating the European Accessibility Act and UK Equality Act." />
      </Helmet>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <RiskSection />
        <Services />
        <Process />
        <WhoWeAre />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
