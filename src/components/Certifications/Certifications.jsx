"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/hooks/useAnimation";
import { certificates } from "@/data/certificates";
import { filterByCategory } from "@/lib/utils";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "security", label: "Cybersecurity" },
];

export default function Certifications() {
  const [filter, setFilter] = useState("all");
  const visible = useMemo(() => filterByCategory(certificates, filter), [filter]);

  return (
    <section id="certifications" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[640px] mb-14"
        >
          <div className="eyebrow">
            <span className="dot sec"></span>Certifications
          </div>
          <h2 className="text-[clamp(28px,4vw,38px)] mb-3.5">Credentials that support the work</h2>
          <p style={{ color: "var(--text-dim)" }}>
            Certifications, completed training, and security-focused learning.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2.5 mb-9">
          {FILTERS.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              className="text-[13px] px-4 py-2 rounded-full transition-all"
              aria-pressed={filter === item.key}
              style={{
                fontFamily: "var(--font-mono)",
                border: `1px solid ${filter === item.key ? "var(--text)" : "var(--border-strong)"}`,
                background: filter === item.key ? "var(--text)" : "transparent",
                color: filter === item.key ? "var(--bg)" : "var(--text-dim)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((certificate) => (
              <motion.article
                variants={fadeUp}
                layout
                key={certificate.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-[18px] overflow-hidden"
                style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
              >
                <div
                  className="relative aspect-video"
                  style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
                >
                  <Image
                    src={certificate.file}
                    alt={certificate.title}
                    fill
                    className="object-contain p-5"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6">
                  <div
                    className="text-[11px] uppercase tracking-wide mb-2.5"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
                  >
                    {certificate.issuer}
                  </div>
                  <h4 className="text-[17px] mb-2">{certificate.title}</h4>
                  <p className="text-[13.5px] mb-4" style={{ color: "var(--text-dim)" }}>
                    {certificate.description}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px]" style={{ color: "var(--text-faint)" }}>
                    <span>Completed {certificate.completedOn}</span>
                    <span>ID {certificate.credentialId}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
