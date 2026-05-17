import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SectionLink from "@/components/SectionLink";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--rule)",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 250ms ease",
      }}
    >
      <div className="container-x flex items-center justify-between py-4 gap-4">
        <Link
          to="/"
          onClick={handleLogoClick}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            color: "var(--ink)",
          }}
        >
          AllyCheck
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          style={{ fontSize: "0.875rem" }}
        >
          <SectionLink sectionId="services" className="text-link">
            Services
          </SectionLink>

          <SectionLink sectionId="process" className="text-link">
            Our Process
          </SectionLink>

          <SectionLink sectionId="why-manual" className="text-link">
            Why Manual?
          </SectionLink>

          <Link to="/book" className="text-link">
            Book a Call
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book"
            className="btn-primary"
            style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem" }}
          >
            Request Audit →
          </Link>
        </div>
      </div>
    </header>
  );
}
