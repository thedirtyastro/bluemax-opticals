"use client";

import { FormEvent, useState } from "react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { CheckIcon, WhatsAppIcon, PhoneIcon } from "./ui/Icons";
import { business } from "@/lib/constants";

const reasons = [
  "I need new glasses",
  "I need sunglasses",
  "I need contact lenses",
  "I need progressive lenses",
  "I want an eye test",
  "I need help choosing frames",
  "I have another question",
];

export default function EnquiryForm() {
  const [reason, setReason] = useState(reasons[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [when, setWhen] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please share your name and phone number so we can reach you.");
      return;
    }
    setError("");

    const lines = [
      `Hi Bluemax Opticals, I have an enquiry.`,
      `Reason: ${reason}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      when ? `Preferred date/time: ${when}` : "",
      message ? `Message: ${message}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-white p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cobalt/10 text-cobalt">
          <CheckIcon />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">Enquiry ready to send</h3>
        <p className="mx-auto mt-2 max-w-sm text-charcoal/70">
          We've opened WhatsApp with your details filled in — just hit send
          and the store will get back to you directly.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={business.whatsappHref} variant="secondary" external icon={<WhatsAppIcon className="h-4 w-4" />}>
            Open WhatsApp again
          </Button>
          <Button href={business.phoneHref} variant="ghost" icon={<PhoneIcon className="h-4 w-4" />}>
            Or call the store
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink/10 bg-white p-6 md:p-9">
      <p className="text-sm font-semibold text-ink">What can we help you with?</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {reasons.map((r) => (
          <button
            type="button"
            key={r}
            onClick={() => setReason(r)}
            aria-pressed={reason === r}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              reason === r
                ? "border-ink bg-ink text-ivory"
                : "border-ink/15 text-ink hover:border-ink/40"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-ink">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-ink/15 bg-ivory px-4 py-3 text-charcoal outline-none focus:border-cobalt"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Phone</span>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-2 w-full rounded-lg border border-ink/15 bg-ivory px-4 py-3 text-charcoal outline-none focus:border-cobalt"
            placeholder="Your phone number"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-ink">Preferred date / time (optional)</span>
          <input
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            className="mt-2 w-full rounded-lg border border-ink/15 bg-ivory px-4 py-3 text-charcoal outline-none focus:border-cobalt"
            placeholder="e.g. Saturday afternoon"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-ink">Message (optional)</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="mt-2 w-full resize-none rounded-lg border border-ink/15 bg-ivory px-4 py-3 text-charcoal outline-none focus:border-cobalt"
            placeholder="Anything else we should know?"
          />
        </label>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <Button type="submit" className="mt-7 w-full sm:w-auto">
        Send enquiry
      </Button>
      <p className="mt-3 text-xs text-charcoal/50">
        Sends straight to our WhatsApp — no account needed.
      </p>
    </form>
  );
}
