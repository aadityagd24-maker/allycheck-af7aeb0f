import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionLink from "@/components/SectionLink";

export type SeoFaq = {
  q: string;
  a: string;
};

export type SeoServicePageProps = {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  overviewLabel: string;
  overviewTitle: string;
  overviewBody: string;
  bullets: string[];
  processTitle: string;
  processBody: string;
  processSteps: { title: string; body: string }[];
  faqTitle: string;
  faqs: SeoFaq[];
  ctaLabel: string;
  ctaSection?: string;
};

export default function SeoServicePage({
  slug,
  title,
  subtitle,
  metaDescription,
  intro,
  overviewLabel,
  overviewTitle,
  overviewBody,
  bullets,
  processTitle,
  processBody,
  processSteps,
  faqTitle,
  faqs,
  ctaLabel,
  ctaSection = "contact",
}: SeoServicePageProps) {
  const pageTitle = `${title} — AllyCheck`;
  const canonicalUrl = `https://allycheck.lovable.app/${slug}`;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    serviceType: title.includes("VPAT") ? "VPAT Certification" : "Accessibility Audit",
    description: metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "Organization",
      name: "AllyCheck",
      url: "https://allycheck.lovable.app/",
    },
  };
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Nav />

      <main>
        <section className="section" style={{ background: "var(--bg)" }}>
          <div id="top" className="container-x" style={{ scrollMarginTop: "112px" }}>
            <div className="max-w-4xl">
              <div className="eyebrow">AllyCheck Service</div>
              <h1 className="mt-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 4.2rem)", lineHeight: 1.02 }}>
                {title}
              </h1>
              <p className="mt-5" style={{ color: "var(--ink-secondary)", fontSize: "1.08rem", maxWidth: "760px" }}>
                {subtitle}
              </p>
              <p className="mt-8" style={{ color: "var(--ink-secondary)", fontSize: "1.02rem", maxWidth: "760px" }}>
                {intro}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <SectionLink sectionId={ctaSection} className="btn-primary">
                  {ctaLabel}
                </SectionLink>
                <SectionLink sectionId="faq" className="text-link">
                  Read FAQs →
                </SectionLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
          <div id="overview" className="container-x grid gap-10 lg:grid-cols-[1.15fr_0.85fr]" style={{ scrollMarginTop: "112px" }}>
            <div>
              <div className="eyebrow">{overviewLabel}</div>
              <h2 className="mt-5 h2">{overviewTitle}</h2>
              <p className="mt-6" style={{ color: "var(--ink-secondary)", fontSize: "1.02rem" }}>
                {overviewBody}
              </p>
            </div>
            <div className="card" style={{ background: "#fafaf8", borderColor: "rgba(26,58,42,0.12)" }}>
              <h3 className="h3">What this page covers</h3>
              <ul className="mt-5 space-y-3" style={{ color: "var(--ink-secondary)", fontSize: "0.98rem" }}>
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: "#1a3a2a", fontWeight: 700 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "#fafaf8", borderTop: "1px solid rgba(26,58,42,0.08)" }}>
          <div id="process" className="container-x" style={{ scrollMarginTop: "112px" }}>
            <div className="max-w-3xl">
              <div className="eyebrow" style={{ color: "#1a3a2a" }}>Process</div>
              <h2 className="mt-5 h2" style={{ color: "#1a3a2a" }}>{processTitle}</h2>
              <p className="mt-6" style={{ color: "rgba(26,58,42,0.82)", fontSize: "1.02rem" }}>
                {processBody}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {processSteps.map((step, idx) => (
                <article key={step.title} style={{ border: "1px solid rgba(26,58,42,0.14)", background: "#fafaf8", padding: "1.5rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", lineHeight: 1, color: "rgba(26,58,42,0.62)" }}>
                    0{idx + 1}
                  </div>
                  <h3 className="mt-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "#1a3a2a" }}>
                    {step.title}
                  </h3>
                  <p className="mt-4" style={{ color: "rgba(26,58,42,0.82)", fontSize: "0.97rem" }}>
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
          <div id="faq" className="container-x" style={{ scrollMarginTop: "112px", maxWidth: 900 }}>
            <div className="eyebrow">FAQs</div>
            <h2 className="mt-5 h2">{faqTitle}</h2>
            <div className="mt-10 space-y-8">
              {faqs.map((faq) => (
                <article key={faq.q} style={{ borderTop: "1px solid var(--rule)", paddingTop: "1.15rem" }}>
                  <h3 className="h3">{faq.q}</h3>
                  <p className="mt-3" style={{ color: "var(--ink-secondary)", fontSize: "1rem" }}>{faq.a}</p>
                </article>
              ))}
            </div>

            <div id={ctaSection} className="mt-14 flex justify-center" style={{ scrollMarginTop: "112px" }}>
              <SectionLink sectionId="top" className="btn-primary" >
                {ctaLabel}
              </SectionLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
