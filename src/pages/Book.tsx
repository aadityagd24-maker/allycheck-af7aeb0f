import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const CAL_LINK = "allycheck/15min";

function getBrowserTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "your local timezone";
  } catch {
    return "your local timezone";
  }
}

export default function Book() {
  const browserTimeZone = getBrowserTimeZone();

  useEffect(() => {
    const w = window as any;
    const init = () => {
      if (!w.Cal) return;
      w.Cal("init", { origin: "https://cal.com" });
      w.Cal("inline", {
        elementOrSelector: "#cal-embed",
        calLink: CAL_LINK,
        config: { layout: "month_view" },
      });
    };

    if (w.Cal) {
      init();
    } else {
      // Inline the official Cal embed snippet
      (function (C: any, A: string, L: string) {
        const p = function (a: any, ar: any) {
          a.q.push(ar);
        };
        const d = C.document;
        C.Cal = C.Cal || function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      init();
    }

    return () => {
      const el = document.getElementById("cal-embed");
      if (el) el.innerHTML = "";
    };
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Helmet>
        <title>Book a 15-Minute Call — AllyCheck</title>
        <meta
          name="description"
          content="Book a free 15-minute call with a senior accessibility auditor to assess your EAA exposure."
        />
      </Helmet>
      <Nav />
      <main className="section">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="eyebrow">Book a Call</div>
            <h2 className="h2 mt-5" style={{ fontFamily: "var(--font-display)" }}>
              Let's talk about your EAA exposure.
            </h2>
            <p className="mt-6" style={{ color: "var(--ink-secondary)", fontSize: "1.1rem", maxWidth: "520px" }}>
              Book a free 15-minute call with a senior auditor. No sales pitch — just an honest assessment of
              where your product stands before your next enterprise procurement review.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Senior auditor on every call — not a sales rep",
                "We review your product URL before the call",
                "Responses within one business day",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3" style={{ fontSize: "1rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>→</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div
              className="mt-8"
              style={{
                border: "1px solid var(--rule)",
                background: "var(--surface)",
                padding: "1rem 1.25rem",
                maxWidth: "520px",
                color: "var(--ink-secondary)",
                fontSize: "0.95rem",
              }}
            >
              Select your timezone. <strong style={{ color: "var(--ink)" }}>{browserTimeZone}</strong>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div
              id="cal-embed"
              style={{
                width: "100%",
                minHeight: 600,
                background: "var(--surface)",
                border: "1px solid var(--rule)",
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
