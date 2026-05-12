import { MouseEvent, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SCROLL_OFFSET = 112;

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  window.history.replaceState(null, "", `#${sectionId}`);
}

type SectionLinkProps = {
  sectionId: string;
  children: ReactNode;
  className?: string;
};

export default function SectionLink({ sectionId, children, className }: SectionLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (location.pathname === "/") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToSection(sectionId));
      });
      return;
    }

    navigate(`/#${sectionId}`);
  };

  return (
    <a href={`/#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
