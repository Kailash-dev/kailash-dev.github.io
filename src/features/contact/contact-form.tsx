"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Discovery call request from ${form.name}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company || "Not provided"}`,
        `Budget: ${form.budget || "Not specified"}`,
        `Timeline: ${form.timeline || "Not specified"}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.author.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-xl border border-border bg-card p-8 text-center"
        role="status"
      >
        <p className="text-lg font-medium">Opening your email client…</p>
        <p className="text-muted-foreground mt-2 text-sm">
          If it didn&apos;t open, email{" "}
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="text-foreground underline underline-offset-4"
          >
            {siteConfig.author.email}
          </a>{" "}
          directly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
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
            className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
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
            className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
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
        />
      </div>

      <Button type="submit" size="lg">
        Send message
      </Button>
    </form>
  );
}
