"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/hooks/useAnimation";

const RESUMES = [
  {
    dot: "sw",
    title: "Software Resume",
    desc: "General software engineering resume — Python, FastAPI, Flutter, and full-stack project work.",
    file: "/resume/software-resume.pdf",
  },
  {
    dot: "sec",
    title: "Cybersecurity Resume",
    desc: "SOC / security-focused resume — SIEM, penetration testing, threat intelligence, and security tooling.",
    file: "/resume/cybersecurity-resume.pdf",
  },
  {
    dot: "ai",
    title: "QA Resume",
    desc: "Quality assurance-focused resume — manual & API testing, test documentation, and QA tooling.",
    file: "/resume/qa-resume.pdf",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="section" style={{ borderTop: "1px solid var(--border)" }}>
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
            <span className="dot sec"></span>Resume
          </div>
          <h2 className="text-[clamp(28px,4vw,38px)] mb-3.5">
            Download a resume for your context
          </h2>
          <p style={{ color: "var(--text-dim)" }}>
            Three resumes tailored to different roles — download whichever
            fits the conversation.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {RESUMES.map((r) => (
            <motion.div
              variants={fadeUp}
              key={r.title}
              className="rounded-[14px] p-7"
              style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
            >
              <span className={`dot ${r.dot} mb-4 inline-block`}></span>
              <h4 className="text-[17px] mb-2">{r.title}</h4>
              <p className="text-[13.5px] mb-5" style={{ color: "var(--text-dim)" }}>
                {r.desc}
              </p>
              <a
                href={r.file}
                download
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold px-4 py-2.5 rounded-[9px] transition-colors"
                style={{ border: "1px solid var(--border-strong)" }}
              >
                Download PDF
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
