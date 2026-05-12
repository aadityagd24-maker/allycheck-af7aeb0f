import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionLink from "@/components/SectionLink";

function Hero() {
  return (
    <section id="top" style={{ background: "var(--bg)", minHeight: "90vh" }} className="flex items-center">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center py-24">
        <div>
          <div className="eyebrow fade-up">European Accessibility Act · Enforcement Begins June 2025</div>

          <h1 className="h1 mt-6 fade-up">
            Your Product Is Either
            <br />
            Compliant — Or a Liability.
          </h1>

          <p className="mt-8 fade-up" style={{ fontSize: "1.25rem", color: "var(--ink-secondary)", maxWidth: "520px" }}>
            AllyCheck provides manual accessibility audits and VPAT certification that enterprise procurement teams actually accept. Stop losing deals. Start closing them.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 fade-up">
            <Link to="/book" className="btn-primary">Book a Call</Link>
            <SectionLink sectionId="process" className="text-link">See How It Works →</SectionLink>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end fade-up">
          <div style={{ background: "#fff", border: "1px solid var(--rule)", padding: "2.5rem 2.25rem", width: "100%", maxWidth: "440px", transform: "rotate(-1.5deg)", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.18)" }}>
            <div className="eyebrow" style={{ fontSize: "0.65rem" }}>Certified Document</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginTop: "0.5rem" }}>VPAT Certification Report</h3>
            <div style={{ borderTop: "1px solid var(--rule)", margin: "1.5rem 0" }} />
            <div className="space-y-3">
              {[100, 85, 92, 70, 88, 60, 95].map((w, i) => (
                <div key={i} style={{ height: "8px", background: "#EFEDE6", width: `${w}%`, borderRadius: "1px" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    { n: "01", t: "Manual Accessibility Audit", b: "Human-led accessibility testing for SaaS products using WCAG 2.1 AA standards." },
    { n: "02", t: "VPAT Certification Report", b: "Enterprise-ready VPAT documentation procurement teams actually accept." },
    { n: "03", t: "Developer Remediation Roadmap", b: "Clear developer guidance to fix accessibility issues fast." },
  ];

  return (
    <section className="section">
      <div id="services" className="container-x" style={{ scrollMarginTop: "112px" }}>
        <div className="max-w-3xl">
          <div className="eyebrow">Our Services</div>
          <h2 className="h2 mt-5">
            Three Deliverables.
            <br />
            One Standard of Excellence.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <article key={c.n} className="card flex flex-col">
              <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--rule)" }}>{c.n}</div>
              <h3 className="h3 mt-6">{c.t}</h3>
              <p className="mt-4" style={{ color: "var(--ink-secondary)" }}>{c.b}</p>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--rule)" }}>
                <Link to="/book" className="text-link" style={{ color: "var(--accent)" }}>Book a call →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyManual() {
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div id="why-manual" className="container-x" style={{ scrollMarginTop: "112px" }}>
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow">Why Manual?</div>
          <h2 className="h2 mt-5">Widgets do not equal compliance.</h2>
          <p className="mt-6" style={{ color: "var(--ink-secondary)", fontSize: "1.05rem" }}>
            Automated overlays can hide some friction, but they do not replace real testing, real documentation, or real accountability.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <div style={{ borderLeft: "3px solid var(--danger)", paddingLeft: "2rem" }}>
            <div className="eyebrow" style={{ color: "var(--danger)" }}>What most companies do</div>
            <h3 className="h3 mt-3">Install a widget and hope procurement does not notice.</h3>
            <p className="mt-5" style={{ color: "var(--ink-secondary)" }}>
              Overlay tools may change appearance, but they do not fully validate keyboard flows, screen reader behavior, focus order, or document-ready compliance evidence. That is where deals get lost.
            </p>
          </div>

          <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "2rem" }}>
            <div className="eyebrow">The AllyCheck approach</div>
            <h3 className="h3 mt-3">Human auditors. Real reports. Better close rates.</h3>
            <p className="mt-5" style={{ color: "var(--ink-secondary)" }}>
              Every audit is manually reviewed, every issue is documented, and every report is written for legal, procurement, and engineering teams.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "WCAG 2.1 AA & 2.2 coverage",
                "VPAT 2.4 documentation",
                "Assistive technology testing",
                "Developer-ready remediation guidance",
              ].map((item) => (
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

function Process() {
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div id="process" className="container-x text-center max-w-4xl" style={{ scrollMarginTop: "112px" }}>
        <div className="eyebrow">Our Process</div>
        <h2 className="h2 mt-5">
          Audit to Certified.
          <br />
          In Three Steps.
        </h2>
        <p className="mt-8" style={{ color: "var(--ink-secondary)", fontSize: "1.05rem" }}>
          We scope your product, conduct a manual accessibility audit, and deliver VPAT certification with developer-ready remediation guidance.
        </p>
        <div className="mt-10">
          <Link to="/book" className="btn-primary">Book a 15-Minute Call</Link>
        </div>
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
        <Services />
        <WhyManual />
        <Process />
      </main>
      <Footer />
    </div>
  );
}
