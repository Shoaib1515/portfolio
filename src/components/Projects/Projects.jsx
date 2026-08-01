"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/hooks/useAnimation";
import { projects } from "@/data/projects";
import { filterByCategory } from "@/lib/utils";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "software", label: "Software Engineering" },
  { key: "ai", label: "AI" },
  { key: "security", label: "Cybersecurity" },
];

const ACCENT = { software: "var(--sw)", ai: "var(--ai)", security: "var(--sec)" };

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = filterByCategory(projects, filter);

  return (
    <section
      id="projects"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[640px] mb-14"
        >
          <div className="eyebrow">
            <span className="dot sw"></span>
            <span className="dot ai"></span>
            <span className="dot sec"></span>Projects
          </div>
          <h2 className="text-[clamp(28px,4vw,38px)] mb-3.5">
            Everything I&apos;ve built, in one place
          </h2>
          <p style={{ color: "var(--text-dim)" }}>
            Filter by domain to see work from a specific discipline.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2.5 mb-9">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className="text-[13px] px-4 py-2 rounded-full transition-all"
              aria-pressed={filter === f.key}
              style={{
                fontFamily: "var(--font-mono)",
                border: `1px solid ${filter === f.key ? "var(--text)" : "var(--border-strong)"}`,
                background: filter === f.key ? "var(--text)" : "transparent",
                color: filter === f.key ? "var(--bg)" : "var(--text-dim)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-[14px] p-6 transition-transform hover:-translate-y-1"
                style={{
                  background: "var(--bg-elev)",
                  border: "1px solid var(--border)",
                  borderTop: `2px solid ${ACCENT[p.category]}`,
                }}
              >
                <span
                  className="block text-[11px] uppercase tracking-wide mb-2.5"
                  style={{ fontFamily: "var(--font-mono)", color: ACCENT[p.category] }}
                >
                  {p.category}
                </span>
                <h4 className="text-[16.5px] mb-2">{p.title}</h4>
                <p className="text-[13.5px]" style={{ color: "var(--text-dim)" }}>
                  {p.description}
                </p>
                {(p.repoUrl || p.repoUrls) && (
                  <div className="flex flex-wrap gap-3 mt-3">
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs underline underline-offset-2"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
                      >
                        View on GitHub →
                      </a>
                    )}
                    {p.repoUrls?.map((r) => (
                      <a
                        key={r.url}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs underline underline-offset-2"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
                      >
                        {r.label} →
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
