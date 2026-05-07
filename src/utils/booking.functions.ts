import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_calendar/calendar/v3";

const BookingSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(150),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  startISO: z.string().min(10),
});

export const createBooking = createServerFn({ method: "POST" })
  .inputValidator((input) => BookingSchema.parse(input))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    const GOOGLE_CALENDAR_API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
    if (!GOOGLE_CALENDAR_API_KEY) throw new Error("GOOGLE_CALENDAR_API_KEY is not configured");

    const start = new Date(data.startISO);
    if (isNaN(start.getTime())) throw new Error("Invalid start time");
    const end = new Date(start.getTime() + 30 * 60 * 1000);

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
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_CALENDAR_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    const body = await res.json();
    if (!res.ok) {
      console.error("Google Calendar API error", res.status, body);
      throw new Error(`Failed to create calendar event [${res.status}]`);
    }

    return { ok: true, eventId: body.id as string, htmlLink: body.htmlLink as string };
  });
