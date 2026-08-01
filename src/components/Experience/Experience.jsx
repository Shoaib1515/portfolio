"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/hooks/useAnimation";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
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
            <span className="dot sw"></span>Experience
          </div>
          <h2 className="text-[clamp(28px,4vw,38px)] mb-3.5">Where I&apos;ve worked</h2>
          <p style={{ color: "var(--text-dim)" }}>
            A quick look at the roles that shaped how I build things.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {experience.map((item) => (
            <motion.div
              variants={fadeUp}
              key={item.title}
              className="p-6 rounded-2xl"
              style={{
                background: "var(--bg-elev)",
                border: "1px solid var(--border)",
                borderTop: "2px solid var(--sw)",
              }}
            >
              <div
                className="text-xs mb-2"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
              >
                {item.when}
              </div>
              <h4 className="text-base mb-2">{item.title}</h4>
              <p className="text-sm" style={{ color: "var(--text-dim)" }}>
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
