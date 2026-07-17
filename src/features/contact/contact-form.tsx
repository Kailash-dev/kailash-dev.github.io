"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import type { ContactFormPayload } from "@/types";

type FormState = ContactFormPayload;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  timeline: "",
  message: "",
};

type SubmitState = "idle" | "loading" | "success" | "error";

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

async function submitContactForm(
  payload: ContactFormPayload,
): Promise<{ method: "formspree" | "mailto"; mailto?: string }> {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

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
      throw new Error("Unable to send message. Please try email directly.");
    }

    return { method: "formspree" };
  }

  return { method: "mailto", mailto: buildMailto(payload) };
}

export function ContactForm({ prefill }: { prefill?: Partial<ContactFormPayload> | null }) {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceParam = searchParams ? searchParams.get("service") : null;

  useEffect(() => {
    if (serviceParam) {
      setForm((prev) => ({
        ...prev,
        message: `Hi Kailash,\n\nI'd like to discuss the "${serviceParam}" service for my project.\n\n`,
      }));
    }
  }, [serviceParam]);

  useEffect(() => {
    if (prefill) {
      setForm((prev) => ({
        ...prev,
        ...prefill,
      }));
    }
  }, [prefill]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitState("loading");
    setErrorMessage("");

    try {
      const result = await submitContactForm(form);

      if (result.method === "mailto" && result.mailto) {
        window.location.href = result.mailto;
      }

      setSubmitState("success");
      setForm(initialState);
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send message.",
      );
    }
  }

  if (submitState === "success") {
    return (
      <div
        className="rounded-xl border border-border bg-card p-8"
        role="status"
      >
        <p className="text-lg font-medium">
          {process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
            ? "Message sent successfully"
            : "Message prepared successfully"}
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          {process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
            ? "Thanks for reaching out. I'll respond within one business day."
            : "Your email client should open shortly. If it didn't, reach out directly at "}
          {!process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID && (
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="text-foreground underline underline-offset-4"
            >
              {siteConfig.author.email}
            </a>
          )}
          {!process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID && "."}
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitState("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            disabled={submitState === "loading"}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            disabled={submitState === "loading"}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={handleChange}
          disabled={submitState === "loading"}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget range (optional)</Label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            disabled={submitState === "loading"}
            className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50"
          >
            <option value="">Select a range</option>
            <option value="Under $10k">Under $10k</option>
            <option value="$10k – $25k">$10k – $25k</option>
            <option value="$25k – $50k">$25k – $50k</option>
            <option value="$50k+">$50k+</option>
            <option value="Ongoing retainer">Ongoing retainer</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline (optional)</Label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            disabled={submitState === "loading"}
            className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50"
          >
            <option value="">Select timeline</option>
            <option value="ASAP">ASAP</option>
            <option value="1–3 months">1–3 months</option>
            <option value="3–6 months">3–6 months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell me about your project</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building? What challenges are you facing?"
          value={form.message}
          onChange={handleChange}
          disabled={submitState === "loading"}
        />
      </div>

      {submitState === "error" && (
        <p className="text-destructive text-sm" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" disabled={submitState === "loading"}>
        {submitState === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
