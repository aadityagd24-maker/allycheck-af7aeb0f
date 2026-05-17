import { Link } from "react-router-dom";
import SectionLink from "@/components/SectionLink";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
      <div className="container-x py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark size={48} />

            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}>
              AllyCheck
            </div>
          </div>

          <p className="mt-3" style={{ color: "var(--ink-secondary)", fontSize: "0.95rem", maxWidth: "320px" }}>
            Manual Accessibility Audits & VPAT Certification for SaaS Companies.
          </p>

          <a
            href="mailto:addy@allycheck.in"
            className="mt-4 inline-block hover:underline"
            style={{ color: "var(--ink-secondary)", fontSize: "0.95rem" }}
          >
            addy@allycheck.in
          </a>
        </div>

        <div className="flex flex-col gap-2" style={{ fontSize: "0.95rem" }}>
          <SectionLink sectionId="services" className="text-link w-fit">
            Services
          </SectionLink>

          <SectionLink sectionId="process" className="text-link w-fit">
            Our Process
          </SectionLink>

          <SectionLink sectionId="why-manual" className="text-link w-fit">
            Why Manual
          </SectionLink>

          <Link to="/book" className="text-link w-fit">
            Book a Call
          </Link>

          <Link to="/privacy" className="text-link w-fit">
            Privacy Policy
          </Link>

          <Link to="/terms" className="text-link w-fit">
            Terms of Service
          </Link>
        </div>

        <div>
          <Link to="/book" className="btn-outline">
            Book a Call
          </Link>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="container-x py-6 flex flex-col gap-2" style={{ fontSize: "0.8rem", color: "var(--ink-secondary)" }}>
          <div className="flex flex-wrap justify-between gap-3">
            <div>© 2026 AllyCheck. All rights reserved.</div>

            <div className="flex gap-6">
              <Link to="/privacy" className="text-link">
                Privacy Policy
              </Link>

              <Link to="/terms" className="text-link">
                Terms of Service
              </Link>
            </div>
          </div>

          <div style={{ fontSize: "0.75rem" }}>
            AllyCheck is a registered accessibility consultancy. Registered in India.
          </div>
        </div>
      </div>
    </footer>
  );
}
