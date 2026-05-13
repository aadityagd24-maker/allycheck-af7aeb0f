import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SeoPages from "./pages/SeoPages";
import NotFound from "./pages/NotFound";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");

    const scrollTarget = () => {
      if (hash) {
        const element = document.getElementById(decodeURIComponent(hash));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      if (location.pathname === "/" && !hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const raf1 = window.requestAnimationFrame(() => {
      const raf2 = window.requestAnimationFrame(scrollTarget);
      return () => window.cancelAnimationFrame(raf2);
    });

    return () => window.cancelAnimationFrame(raf1);
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/:slug" element={<SeoPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
