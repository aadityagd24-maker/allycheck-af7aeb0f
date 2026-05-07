import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, FormEvent } from "react";
import { createBooking } from "@/utils/booking.functions";

export const Route = createFileRoute("/book-a-call")({
  component: BookACall,
  head: () => ({
    meta: [
      { title: "Book a Call — AllyCheck" },
      { name: "description", content: "Book a 30-minute intro call with AllyCheck to scope your accessibility audit and VPAT certification." },
      { property: "og:title", content: "Book a Call — AllyCheck" },
      { property: "og:description", content: "Pick a time that works for you. We'll confirm by email." },
    ],
  }),
});

// Availability: every day, 12:00–14:00 IST (UTC+5:30) = 06:30–08:30 UTC, 30-min slots
const SLOT_MINUTES = 30;
const WINDOW_START_UTC_MIN = 6 * 60 + 30; // 06:30 UTC
const WINDOW_END_UTC_MIN = 8 * 60 + 30;   // 08:30 UTC

function startOfDayUTC(d: Date) {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function buildSlotsForDay(dayUTC: Date): Date[] {
  const slots: Date[] = [];
  for (let m = WINDOW_START_UTC_MIN; m + SLOT_MINUTES <= WINDOW_END_UTC_MIN; m += SLOT_MINUTES) {
    slots.push(new Date(dayUTC.getTime() + m * 60 * 1000));
  }
  return slots;
}

function buildDays(count: number): Date[] {
  const today = startOfDayUTC(new Date());
  const days: Date[] = [];
  for (let i = 0; i < count; i++) {
    days.push(new Date(today.getTime() + i * 24 * 60 * 60 * 1000));
  }
  return days;
}

function fmtDayLabel(d: Date) {
  return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}
function fmtTime(d: Date) {
  return d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function BookACall() {
  const days = useMemo(() => buildDays(14), []);
  const [selectedDay, setSelectedDay] = useState<Date>(days[0]);
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tz, setTz] = useState<string>("your local time");
  useEffect(() => {
    setTz(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const slots = useMemo(() => {
    const all = buildSlotsForDay(selectedDay);
    // Filter past slots (for today)
    return all.filter((s) => s.getTime() > Date.now());
  }, [selectedDay]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (!selectedSlot) {
      setError("Please pick a time slot.");
      return;
    }
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      website: String(fd.get("website") || "").trim(),
      startISO: selectedSlot.toISOString(),
    };
    setSubmitting(true);
    try {
      await createBooking({ data: payload });
      setDone(true);
    } catch (err) {
      console.error(err);
      setError("Could not book your call. Please try again or email us.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    border: "1px solid var(--rule)",
    borderRadius: "2px",
    padding: "0.85rem 1rem",
    background: "#fff",
    width: "100%",
    fontFamily: "var(--font-sans)",
    fontSize: "0.95rem",
    color: "var(--ink)",
  };

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <header style={{ borderBottom: "1px solid var(--rule)", background: "var(--bg)" }}>
        <div className="container-x flex items-center justify-between py-4">
          <Link to="/" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--ink)" }}>
            AllyCheck
          </Link>
          <Link to="/" className="text-link" style={{ fontSize: "0.875rem" }}>← Back to site</Link>
        </div>
      </header>

      <main className="container-x py-16">
        <div className="max-w-3xl">
          <div className="eyebrow">Book a Call</div>
          <h1 className="h2 mt-5">Schedule a 30-minute intro.</h1>
          <p className="mt-4" style={{ color: "var(--ink-secondary)", maxWidth: "640px" }}>
            Pick a time that works for you. Times are shown in your local timezone ({tz}). We'll confirm by email.
          </p>
        </div>

        {done ? (
          <div
            className="mt-12"
            style={{ background: "#fff", border: "1px solid var(--rule)", padding: "3rem 2rem", textAlign: "center", maxWidth: "640px" }}
          >
            <h3 className="h3">You're booked.</h3>
            <p className="mt-3" style={{ color: "var(--ink-secondary)" }}>
              {selectedSlot && (
                <>
                  We've added <strong>{fmtDayLabel(selectedSlot)} at {fmtTime(selectedSlot)}</strong> to the calendar and sent you a confirmation.
                </>
              )}
            </p>
            <div className="mt-6">
              <Link to="/" className="btn-outline">Back to home</Link>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            {/* LEFT — calendar */}
            <section aria-label="Pick a time">
              <div className="eyebrow">1. Pick a time</div>
              <div className="mt-4" style={{ background: "#fff", border: "1px solid var(--rule)", padding: "1.25rem" }}>
                <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Select day">
                  {days.map((d) => {
                    const active = d.getTime() === selectedDay.getTime();
                    return (
                      <button
                        key={d.toISOString()}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => { setSelectedDay(d); setSelectedSlot(null); }}
                        style={{
                          flex: "0 0 auto",
                          padding: "0.6rem 0.85rem",
                          border: "1px solid var(--rule)",
                          background: active ? "var(--accent)" : "#fff",
                          color: active ? "#fff" : "var(--ink)",
                          fontSize: "0.85rem",
                          borderRadius: "2px",
                          cursor: "pointer",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {fmtDayLabel(d)}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {slots.length === 0 && (
                    <p style={{ gridColumn: "1 / -1", color: "var(--ink-secondary)", fontSize: "0.9rem" }}>
                      No more slots today. Try another day.
                    </p>
                  )}
                  {slots.map((s) => {
                    const active = selectedSlot?.getTime() === s.getTime();
                    return (
                      <button
                        key={s.toISOString()}
                        type="button"
                        onClick={() => setSelectedSlot(s)}
                        aria-pressed={active}
                        style={{
                          padding: "0.7rem",
                          border: `1px solid ${active ? "var(--accent)" : "var(--rule)"}`,
                          background: active ? "var(--accent)" : "#fff",
                          color: active ? "#fff" : "var(--ink)",
                          fontSize: "0.9rem",
                          borderRadius: "2px",
                          cursor: "pointer",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {fmtTime(s)}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-4" style={{ fontSize: "0.75rem", color: "var(--ink-secondary)" }}>
                  Availability: every day, 12:00–14:00 IST. Each call is 30 minutes.
                </p>
              </div>
            </section>

            {/* RIGHT — details */}
            <section aria-label="Your details">
              <div className="eyebrow">2. Your details</div>
              <form onSubmit={onSubmit} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input id="name" name="name" required placeholder="Full Name" style={inputStyle} maxLength={100} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Work Email</label>
                  <input id="email" name="email" type="email" required placeholder="Work Email" style={inputStyle} maxLength={255} />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">Company Name</label>
                  <input id="company" name="company" required placeholder="Company Name" style={inputStyle} maxLength={150} />
                </div>
                <div>
                  <label htmlFor="website" className="sr-only">Company Website</label>
                  <input id="website" name="website" placeholder="https://yourcompany.com" style={inputStyle} maxLength={255} />
                </div>

                {selectedSlot && (
                  <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", padding: "0.85rem 1rem", fontSize: "0.9rem" }}>
                    <strong>{fmtDayLabel(selectedSlot)}</strong> at <strong>{fmtTime(selectedSlot)}</strong> ({tz})
                  </div>
                )}

                {error && (
                  <div role="alert" style={{ color: "var(--danger, #b00020)", fontSize: "0.9rem" }}>{error}</div>
                )}

                <button
                  type="submit"
                  disabled={submitting || !selectedSlot}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "1rem", opacity: submitting || !selectedSlot ? 0.6 : 1 }}
                >
                  {submitting ? "Booking…" : "Confirm Booking →"}
                </button>
                <p style={{ fontSize: "0.8rem", color: "var(--ink-secondary)" }}>
                  By booking you'll receive a calendar invite at the email above.
                </p>
              </form>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
