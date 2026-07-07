"use client";

import { useState } from "react";

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

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        method?: string;
        mailto?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Unable to send message.");
      }

      if (data.method === "mailto" && data.mailto) {
        window.location.href = data.mailto;
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
        <p className="text-lg font-medium">Message prepared successfully</p>
        <p className="text-muted-foreground mt-2 text-sm">
          Your email client should open shortly. If it didn&apos;t, reach out
          directly at{" "}
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="text-foreground underline underline-offset-4"
          >
            {siteConfig.author.email}
          </a>
          .
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
