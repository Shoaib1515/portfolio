"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/hooks/useAnimation";
import { blogPosts } from "@/data/blog";
import { filterByCategory } from "@/lib/utils";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "software", label: "Software Development" },
  { key: "ai", label: "AI" },
  { key: "security", label: "Cybersecurity" },
];

const ACCENT = { software: "var(--sw)", ai: "var(--ai)", security: "var(--sec)" };

export default function Blog() {
  const [filter, setFilter] = useState("all");
  const visible = filterByCategory(blogPosts, filter);

  return (
    <section id="blog" className="section" style={{ borderTop: "1px solid var(--border)" }}>
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
            <span className="dot sec"></span>Blog
          </div>
          <h2 className="text-[clamp(28px,4vw,38px)] mb-3.5">Notes from the field</h2>
          <p style={{ color: "var(--text-dim)" }}>
            Writing on software, AI, and security replace with your real posts.
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
            {visible.map((post) => (
              <motion.div
                layout
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-[14px] overflow-hidden transition-transform hover:-translate-y-1"
                style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
              >
                <div
                  className="h-[130px] flex items-center justify-center text-xs uppercase tracking-wide"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: ACCENT[post.category],
                    background: `linear-gradient(140deg, ${ACCENT[post.category]}30, transparent)`,
                  }}
                >
                  {post.category}
                </div>
                <div className="p-5">
                  <div
                    className="text-[11.5px] mb-2"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
                  >
                    {post.date}
                  </div>
                  <h4 className="text-[15.5px] mb-2 leading-snug">{post.title}</h4>
                  <p className="text-[13.5px]" style={{ color: "var(--text-dim)" }}>
                    {post.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
