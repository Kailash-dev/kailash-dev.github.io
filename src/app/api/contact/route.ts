import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";
import type { ContactFormPayload } from "@/types";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildMailto(payload: ContactFormPayload): string {
  const subject = encodeURIComponent(
    `Discovery call request from ${payload.name}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company || "Not provided"}`,
      `Budget: ${payload.budget || "Not specified"}`,
      `Timeline: ${payload.timeline || "Not specified"}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
  );

  return `mailto:${siteConfig.author.email}?subject=${subject}&body=${body}`;
}

export async function POST(request: Request) {
  let payload: ContactFormPayload;

  try {
    payload = (await request.json()) as ContactFormPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID;

  if (formspreeId) {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        company: payload.company,
        budget: payload.budget,
        timeline: payload.timeline,
        message: payload.message,
        _subject: `Discovery call request from ${payload.name}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to send message. Please try email directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, method: "formspree" });
  }

  return NextResponse.json({
    ok: true,
    method: "mailto",
    mailto: buildMailto(payload),
  });
}
