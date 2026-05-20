"use client";

import { useState, type FormEvent } from "react";
import GlassCard from "./GlassCard";
import Button from "./Button";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const fieldClass =
  "w-full bg-transparent px-1 py-3 placeholder:opacity-40 focus:outline-none transition-colors duration-300";
const fieldStyle = {
  borderBottom: "1px solid rgba(198, 167, 94, 0.28)",
  color: "var(--text-primary-dark)",
};
const fieldFocusStyle = {
  borderBottomColor: "var(--gold-400)",
};

const labelClass = "smallcaps mb-2 block";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <GlassCard corners className="text-center" padding="px-8 py-16 md:px-12 md:py-20">
        <p
          className="smallcaps mb-6"
          style={{ color: "var(--text-gold-dark)" }}
        >
          Received
        </p>
        <h3
          className="display gold-text mb-5"
          style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Your inquiry has been received.
        </h3>
        <p className="mx-auto max-w-md" style={{ color: "var(--text-secondary-dark)" }}>
          A member of the house will respond within 48 hours. Until then, consider the
          door already open.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard padding="p-8 md:p-12" className="relative" corners>
      <p
        className="smallcaps mb-3"
        style={{ color: "var(--text-gold-dark)" }}
      >
        Inquiry
      </p>
      <h3
        className="display mb-3"
        style={{
          fontSize: "clamp(28px, 3.4vw, 42px)",
          color: "var(--text-primary-dark)",
        }}
      >
        Request Membership.
      </h3>
      <p className="mb-10" style={{ color: "var(--text-secondary-dark)" }}>
        A short note. We respond in fragments, never forms.
      </p>

      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div className="md:col-span-1">
          <label
            htmlFor="name"
            className={labelClass}
            style={{ color: "var(--text-gold-dark)" }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className={fieldClass}
            style={fieldStyle}
            placeholder="Full name"
            onFocus={(e) =>
              Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
            }
            onBlur={(e) =>
              ((e.target as HTMLElement).style.borderBottomColor =
                "rgba(198, 167, 94, 0.28)")
            }
          />
        </div>
        <div className="md:col-span-1">
          <label
            htmlFor="email"
            className={labelClass}
            style={{ color: "var(--text-gold-dark)" }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            style={fieldStyle}
            placeholder="you@domain.com"
            onFocus={(e) =>
              Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
            }
            onBlur={(e) =>
              ((e.target as HTMLElement).style.borderBottomColor =
                "rgba(198, 167, 94, 0.28)")
            }
          />
        </div>
        <div className="md:col-span-1">
          <label
            htmlFor="phone"
            className={labelClass}
            style={{ color: "var(--text-gold-dark)" }}
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass}
            style={fieldStyle}
            placeholder="Optional"
            onFocus={(e) =>
              Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
            }
            onBlur={(e) =>
              ((e.target as HTMLElement).style.borderBottomColor =
                "rgba(198, 167, 94, 0.28)")
            }
          />
        </div>
        <div className="md:col-span-1">
          <label
            htmlFor="party"
            className={labelClass}
            style={{ color: "var(--text-gold-dark)" }}
          >
            Party Size
          </label>
          <input
            id="party"
            name="party"
            type="number"
            min={1}
            max={20}
            className={fieldClass}
            style={fieldStyle}
            placeholder="1"
            onFocus={(e) =>
              Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
            }
            onBlur={(e) =>
              ((e.target as HTMLElement).style.borderBottomColor =
                "rgba(198, 167, 94, 0.28)")
            }
          />
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="night"
            className={labelClass}
            style={{ color: "var(--text-gold-dark)" }}
          >
            Preferred Night
          </label>
          <select
            id="night"
            name="night"
            className={fieldClass}
            style={{ ...fieldStyle, background: "rgba(13, 21, 37, 0.5)" }}
            defaultValue=""
          >
            <option value="" disabled style={{ background: "#1F2A44" }}>
              Choose an evening
            </option>
            {DAYS.map((d) => (
              <option key={d} value={d} style={{ background: "#1F2A44" }}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className={labelClass}
            style={{ color: "var(--text-gold-dark)" }}
          >
            A note
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${fieldClass} resize-none`}
            style={fieldStyle}
            placeholder="Tell us about your evening."
            onFocus={(e) =>
              Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
            }
            onBlur={(e) =>
              ((e.target as HTMLElement).style.borderBottomColor =
                "rgba(198, 167, 94, 0.28)")
            }
          />
        </div>
        <div className="md:col-span-2 mt-2">
          <Button type="submit" variant="gold">
            Submit Inquiry
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
