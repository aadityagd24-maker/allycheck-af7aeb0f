import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_calendar/calendar/v3";

function getAuthHeaders() {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
  const GOOGLE_CALENDAR_API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
  if (!GOOGLE_CALENDAR_API_KEY) throw new Error("GOOGLE_CALENDAR_API_KEY is not configured");
  return {
    Authorization: `Bearer ${LOVABLE_API_KEY}`,
    "X-Connection-Api-Key": GOOGLE_CALENDAR_API_KEY,
    "Content-Type": "application/json",
  };
}

const BookingSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(150),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  startISO: z.string().min(10),
});

const RangeSchema = z.object({
  timeMinISO: z.string().min(10),
  timeMaxISO: z.string().min(10),
});

// Returns ISO start times of existing events overlapping the window
export const listBookedSlots = createServerFn({ method: "POST" })
  .inputValidator((input) => RangeSchema.parse(input))
  .handler(async ({ data }) => {
    const url = new URL(`${GATEWAY_URL}/calendars/primary/events`);
    url.searchParams.set("timeMin", data.timeMinISO);
    url.searchParams.set("timeMax", data.timeMaxISO);
    url.searchParams.set("singleEvents", "true");
    url.searchParams.set("orderBy", "startTime");
    url.searchParams.set("maxResults", "250");

    const res = await fetch(url.toString(), { method: "GET", headers: getAuthHeaders() });
    const body = await res.json();
    if (!res.ok) {
      console.error("Google Calendar list error", res.status, body);
      throw new Error(`Failed to list events [${res.status}]`);
    }
    const busy: { start: string; end: string }[] = (body.items || [])
      .filter((e: any) => e.status !== "cancelled" && e.start?.dateTime && e.end?.dateTime)
      .map((e: any) => ({ start: e.start.dateTime as string, end: e.end.dateTime as string }));
    return { busy };
  });

export const createBooking = createServerFn({ method: "POST" })
  .inputValidator((input) => BookingSchema.parse(input))
  .handler(async ({ data }) => {
    const headers = getAuthHeaders();

    const start = new Date(data.startISO);
    if (isNaN(start.getTime())) throw new Error("Invalid start time");
    const end = new Date(start.getTime() + 30 * 60 * 1000);

    // Re-check availability — prevent double-booking of same slot
    const checkUrl = new URL(`${GATEWAY_URL}/calendars/primary/events`);
    checkUrl.searchParams.set("timeMin", start.toISOString());
    checkUrl.searchParams.set("timeMax", end.toISOString());
    checkUrl.searchParams.set("singleEvents", "true");
    const checkRes = await fetch(checkUrl.toString(), { method: "GET", headers });
    const checkBody = await checkRes.json();
    if (!checkRes.ok) {
      console.error("Availability check failed", checkRes.status, checkBody);
      throw new Error("Could not verify availability");
    }
    const conflict = (checkBody.items || []).some(
      (e: any) => e.status !== "cancelled" && e.start?.dateTime && e.end?.dateTime,
    );
    if (conflict) {
      throw new Error("SLOT_TAKEN");
    }

    const event = {
      summary: `Intro call: ${data.name} (${data.company})`,
      description: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company}`,
        data.website ? `Website: ${data.website}` : null,
        "",
        "Booked via AllyCheck website.",
      ].filter(Boolean).join("\n"),
      start: { dateTime: start.toISOString() },
      end: { dateTime: end.toISOString() },
      attendees: [{ email: data.email, displayName: data.name }],
      reminders: { useDefault: true },
    };

    const res = await fetch(`${GATEWAY_URL}/calendars/primary/events?sendUpdates=all`, {
      method: "POST",
      headers,
      body: JSON.stringify(event),
    });

    const body = await res.json();
    if (!res.ok) {
      console.error("Google Calendar API error", res.status, body);
      throw new Error(`Failed to create calendar event [${res.status}]`);
    }

    return { ok: true, eventId: body.id as string, htmlLink: body.htmlLink as string };
  });
