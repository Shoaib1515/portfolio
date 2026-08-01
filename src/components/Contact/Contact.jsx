"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/hooks/useAnimation";
import { SITE } from "@/lib/constants";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data?.error || "Could not send message right now. Please try again in a moment.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setErrorMessage("Could not send message right now. Please try again in a moment.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="eyebrow">
            <span className="dot ai"></span>Contact
          </div>
          <h2 className="text-[clamp(26px,4vw,34px)] mb-3.5">Let&apos;s work together</h2>
          <p className="mb-6" style={{ color: "var(--text-dim)" }}>
            Open to software, AI, and security-related work freelance,
            full-time, or collaboration. Reach out directly or use the form.
          </p>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-dim)" }}>
              <IconBadge>@</IconBadge> {SITE.email}
            </a>
            <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-dim)" }}>
              <IconBadge>#</IconBadge> {SITE.phone}
            </a>
            <span className="flex items-center gap-3 text-sm" style={{ color: "var(--text-dim)" }}>
              <IconBadge>📍</IconBadge> {SITE.location}
            </span>
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm" style={{ color: "var(--text-dim)" }}>
              <IconBadge>in</IconBadge> LinkedIn
            </a>
            <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm" style={{ color: "var(--text-dim)" }}>
              <IconBadge>gh</IconBadge> GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <Field label="Name" name="name" type="text" placeholder="Your name" />
          <Field label="Email" name="email" type="email" placeholder="you@example.com" />
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs uppercase tracking-wide"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
            >
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="What would you like to talk about?"
              rows={5}
              className="rounded-[10px] px-4 py-3.5 text-[14.5px]"
              style={{ background: "var(--bg-elev)", border: "1px solid var(--border-strong)", color: "var(--text)" }}
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start px-[22px] py-3.5 rounded-[10px] font-semibold text-[14.5px]"
            style={{
              background: "linear-gradient(100deg, var(--sw), var(--ai) 60%, var(--sec))",
              color: "#0b0e13",
              opacity: status === "sending" ? 0.75 : 1,
            }}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
                ? "Message sent ✓"
                : "Send Message"}
          </button>
          {status === "error" && (
            <p className="text-sm" style={{ color: "#fca5a5" }}>
              {errorMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-wide"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-[10px] px-4 py-3.5 text-[14.5px]"
        style={{ background: "var(--bg-elev)", border: "1px solid var(--border-strong)", color: "var(--text)" }}
      />
    </div>
  );
}

function IconBadge({ children }) {
  return (
    <span
      className="w-9 h-9 rounded-[9px] flex items-center justify-center shrink-0 text-xs"
      style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
    >
      {children}
    </span>
  );
}
