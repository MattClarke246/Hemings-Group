"use client";

import { useState, type FormEvent } from "react";
import GlassCard from "./GlassCard";
import Button from "./Button";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const fieldClass =
  "w-full bg-transparent border-b border-ivory-300/70 px-1 py-3 text-text-primary placeholder:text-text-muted/70 focus:border-gold-500 focus:outline-none transition-colors duration-300";

const labelClass = "smallcaps text-text-gold mb-2 block";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <GlassCard corners className="text-center" padding="px-8 py-16 md:px-12 md:py-20">
        <p className="smallcaps text-text-gold mb-6">Received</p>
        <h3
          className="display gold-text mb-5"
          style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Your inquiry has been received.
        </h3>
        <p className="text-text-secondary mx-auto max-w-md">
          A member of the house will respond within 48 hours. Until then, consider the
          door already open.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard padding="p-8 md:p-12" className="relative" corners>
      <p className="smallcaps text-text-gold mb-3">Inquiry</p>
      <h3
        className="display mb-3 text-text-primary"
        style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
      >
        Request Membership.
      </h3>
      <p className="text-text-secondary mb-10">
        A short note. We respond in fragments, never forms.
      </p>

      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div className="md:col-span-1">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Full name" />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@domain.com"
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass}
            placeholder="Optional"
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="party" className={labelClass}>
            Party Size
          </label>
          <input
            id="party"
            name="party"
            type="number"
            min={1}
            max={20}
            className={fieldClass}
            placeholder="1"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="night" className={labelClass}>
            Preferred Night
          </label>
          <select id="night" name="night" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choose an evening
            </option>
            {DAYS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClass}>
            A note
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${fieldClass} resize-none`}
            placeholder="Tell us about your evening."
          />
        </div>
        <div className="md:col-span-2 mt-2">
          <Button type="submit" variant="obsidian">
            Submit Inquiry
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
