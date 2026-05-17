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

      window.scrollTo({ top: 0, behavior: "auto" });
    };

    const raf1 = window.requestAnimationFrame(() => {
      const raf2 = window.requestAnimationFrame(scrollTarget);
      return () => window.cancelAnimationFrame(raf2);
    });

    return () => window.cancelAnimationFrame(raf1);
  }, [location.pathname, location.hash]);

  return null;
}

function RouteTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="route-transition">
      <style>
        {`
          .route-transition {
            animation: routeFade 320ms cubic-bezier(0.22, 1, 0.36, 1);
            will-change: opacity, transform;
          }

          @keyframes routeFade {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />

      <RouteTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/:slug" element={<SeoPages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RouteTransition>
    </>
  );
}
