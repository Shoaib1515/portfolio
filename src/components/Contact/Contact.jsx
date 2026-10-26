"use client";
import { useRef, useState, useSyncExternalStore } from "react";
import { SITE } from "@/lib/constants";

const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export default function Contact() {
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const sending = useRef(false);
  async function handleSubmit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(
      ["name", "email", "message", "website"].map((key) => [
        key,
        String(data.get(key) || "").trim(),
      ]),
    );
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Please complete all fields. Spaces alone are not enough.");
      return;
    }
    sending.current = true;
    setStatus("sending");
    setMessage("Sending your message…");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(25000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true)
        throw new Error(
          result.error ||
            "Your message could not be sent. Please email me directly.",
        );
      form.reset();
      setStatus("sent");
      setMessage("Thanks for reaching out. Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error.name === "TimeoutError"
          ? "Delivery could not be confirmed. Please email me directly if you need to follow up."
          : error.message === "Failed to fetch"
            ? "Unable to connect. Please try again or email me directly."
            : error.message ||
              "Something went wrong. Please email me directly.",
      );
    } finally {
      sending.current = false;
    }
  }
  return (
    <section id="contact" className="section section-tinted">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">04 / Get in touch</p>
          <h2>
            Have something
            <br />
            in mind?
            <br />
            <span style={{ color: "var(--accent)" }}>Let’s build it.</span>
          </h2>
          <p className="muted">
            Open to software engineering opportunities, security-focused
            projects, and collaborations. Tell me a little about what you’re
            working on.
          </p>
          <a className="contact-email" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <div className="contact-links">
            <a
              href={SITE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗︎
            </a>
            <a
              href={SITE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗︎
            </a>
            <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
          </div>
          <p className="mono small muted">Based in {SITE.location}</p>
        </div>
        <form
          className="contact-form"
          method="post"
          action="/api/contact"
          onSubmit={handleSubmit}
          aria-busy={status === "sending"}
        >
          <div className="contact-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              required
              disabled={!ready || status === "sending"}
              maxLength={100}
              autoComplete="name"
              placeholder="How should I address you?"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              disabled={!ready || status === "sending"}
              maxLength={254}
              autoComplete="email"
              placeholder="you@company.com"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">
              What would you like to work on?
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              disabled={!ready || status === "sending"}
              maxLength={5000}
              rows={5}
              placeholder="A role, an idea, or a project. I’d love to hear about it."
            />
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              id="contact-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!ready || status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <span aria-hidden="true">↗︎</span>
          </button>
          <noscript>
            <p className="small muted">
              Please use the email link to get in touch. The form requires
              JavaScript.
            </p>
          </noscript>
          <p
            className={`form-status ${status === "error" ? "error" : ""}`}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {message}
          </p>
          <p className="small muted">
            Your name, email, and message are used to respond to your enquiry.
            Prefer email?{" "}
            <a className="underline" href={`mailto:${SITE.email}`}>
              Contact me directly.
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
