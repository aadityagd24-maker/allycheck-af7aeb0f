import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function Hero() {
  return (
    <section
      id="top"
      style={{ background: "var(--bg)", minHeight: "90vh" }}
      className="flex items-center"
    >
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center py-24">
        <div>
          <div className="eyebrow fade-up">
            European Accessibility Act · Enforcement Begins June 2025
          </div>

          <h1 className="h1 mt-6 fade-up">
            Your Product Is Either
            <br />
            Compliant — Or a Liability.
          </h1>

          <p
            className="mt-8 fade-up"
            style={{
              fontSize: "1.25rem",
              color: "var(--ink-secondary)",
              maxWidth: "520px",
            }}
          >
            AllyCheck provides manual accessibility audits and VPAT
            certification that enterprise procurement teams actually accept.
            Stop losing deals. Start closing them.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 fade-up">
            <Link to="/book" className="btn-primary">
              Book a Call
            </Link>

            <a href="#process" className="text-link">
              See How It Works →
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end fade-up">
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--rule)",
              padding: "2.5rem 2.25rem",
              width: "100%",
              maxWidth: "440px",
              transform: "rotate(-1.5deg)",
              boxShadow: "0 30px 60px -30px rgba(0,0,0,0.18)",
            }}
          >
            <div className="eyebrow" style={{ fontSize: "0.65rem" }}>
              Certified Document
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                marginTop: "0.5rem",
              }}
            >
              VPAT Certification Report
            </h3>

            <div
              style={{
                borderTop: "1px solid var(--rule)",
                margin: "1.5rem 0",
              }}
            />

            <div className="space-y-3">
              {[100, 85, 92, 70, 88, 60, 95].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: "8px",
                    background: "#EFEDE6",
                    width: `${w}%`,
                    borderRadius: "1px",
                  }}
                />
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
    {
      n: "01",
      t: "Manual Accessibility Audit",
      b: "Human-led accessibility testing for SaaS products using WCAG 2.1 AA standards.",
    },
    {
      n: "02",
      t: "VPAT Certification Report",
      b: "Enterprise-ready VPAT documentation procurement teams actually accept.",
    },
    {
      n: "03",
      t: "Developer Remediation Roadmap",
      b: "Clear developer guidance to fix accessibility issues fast.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container-x">
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
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  color: "var(--rule)",
                }}
              >
                {c.n}
              </div>

              <h3 className="h3 mt-6">{c.t}</h3>

              <p
                className="mt-4"
                style={{ color: "var(--ink-secondary)" }}
              >
                {c.b}
              </p>

              <div
                className="mt-8 pt-6"
                style={{ borderTop: "1px solid var(--rule)" }}
              >
                <Link
                  to="/book"
                  className="text-link"
                  style={{ color: "var(--accent)" }}
                >
                  Book a call →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="process"
      className="section"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-x text-center max-w-4xl">
        <div className="eyebrow">Our Process</div>

        <h2 className="h2 mt-5">
          Audit to Certified.
          <br />
          In Three Steps.
        </h2>

        <p
          className="mt-8"
          style={{ color: "var(--ink-secondary)", fontSize: "1.05rem" }}
        >
          We scope your product, conduct a manual accessibility audit, and
          deliver VPAT certification with developer-ready remediation guidance.
        </p>

        <div className="mt-10">
          <Link to="/book" className="btn-primary">
            Book a 15-Minute Call
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <Helmet>
        <title>
          AllyCheck — Manual Accessibility Audits & VPAT Certification
        </title>

        <meta
          name="description"
          content="Manual accessibility audits and VPAT certification for SaaS companies navigating the European Accessibility Act and UK Equality Act."
        />
      </Helmet>

      <Nav />

      <main>
        <Hero />
        <Services />
        <Process />
      </main>

      <Footer />
    </div>
  );
}
