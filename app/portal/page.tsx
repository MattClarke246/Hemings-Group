"use client";

import { useState, type FormEvent } from "react";
import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import Button from "../_components/Button";

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

export default function PortalPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  }

  return (
    <>
      <section className="relative flex min-h-[90svh] min-h-[90dvh] items-center pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Container>
          <div className="max-w-md mx-auto">
            {success ? (
              <Reveal direction="scale">
                <GlassCard corners className="text-center" padding="px-8 py-16">
                  <p
                    className="smallcaps mb-6"
                    style={{ color: "var(--text-gold-dark)" }}
                  >
                    Welcome
                  </p>
                  <h3
                    className="display gold-text mb-5 text-3xl"
                  >
                    Access Granted.
                  </h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-secondary-dark)" }}>
                    Redirecting to the private directory...
                  </p>
                  <Button href="/" variant="obsidian">
                    Go to Dashboard
                  </Button>
                </GlassCard>
              </Reveal>
            ) : (
              <Reveal direction="up">
                <GlassCard padding="p-8 md:p-10" corners>
                  <div className="text-center mb-8">
                    <p
                      className="smallcaps mb-3"
                      style={{ color: "var(--text-gold-dark)" }}
                    >
                      Hemings Circle
                    </p>
                    <h2
                      className="display text-3xl mb-4"
                      style={{ color: "var(--text-primary-dark)" }}
                    >
                      Members Portal
                    </h2>
                    <div className="flex justify-center">
                      <MetallicDivider width={80} />
                    </div>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)", fontSize: "11px" }}
                      >
                        Registered Email
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
                    <div>
                      <label
                        htmlFor="memberKey"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)", fontSize: "11px" }}
                      >
                        Membership Key
                      </label>
                      <input
                        id="memberKey"
                        name="memberKey"
                        type="password"
                        required
                        className={fieldClass}
                        style={fieldStyle}
                        placeholder="••••••••••••"
                        onFocus={(e) =>
                          Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderBottomColor =
                            "rgba(198, 167, 94, 0.28)")
                        }
                      />
                    </div>
                    <div className="pt-4">
                      <Button type="submit" variant="gold" className="w-full justify-center">
                        {loading ? "Authenticating..." : "Enter Portal"}
                      </Button>
                    </div>
                    <div className="text-center pt-2">
                      <a
                        href="/membership"
                        className="smallcaps text-[10px] transition-colors duration-300 hover:opacity-100"
                        style={{ color: "var(--text-secondary-dark)", opacity: 0.6 }}
                      >
                        Lost your key? Request support
                      </a>
                    </div>
                  </form>
                </GlassCard>
              </Reveal>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
