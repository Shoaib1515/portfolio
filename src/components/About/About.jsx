"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/hooks/useAnimation";
import { education } from "@/data/experience";

export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[640px] mb-14"
        >
          <div className="eyebrow">
            <span className="dot ai"></span>About
          </div>
          <h2 className="text-[clamp(28px,4vw,38px)] mb-3.5">
            The person behind the stack
          </h2>
          <p style={{ color: "var(--text-dim)" }}>
            Introduction, education, experience, and where this is all headed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-4 text-[15.5px]" style={{ color: "var(--text-dim)" }}>
              I&apos;m Muhammad Shoaib Asghar, Bachelor of Science in Software Engineering from Islamia University
              Bahawalpur, with hands-on experience building backend APIs, mobile UIs, and
              security-focused tools. I started as a Flutter frontend developer, moved into backend
              development with Python and FastAPI, and have since gravitated toward cybersecurity
              operations, penetration testing, and threat intelligence.
            </p>
            <p className="mb-4 text-[15.5px]" style={{ color: "var(--text-dim)" }}>
              My vision is to combine AI with cybersecurity to build intelligent systems that
              detect, prevent, and respond to threats more efficiently, turning security
              requirements into working, well-documented software rather than just theory.
            </p>
            <div
              className="mt-8 p-6 rounded-2xl"
              style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
            >
              <div className="eyebrow mb-2.5">
                <span className="dot sec"></span>Career Vision
              </div>
              <p className="text-sm" style={{ color: "var(--text-dim)" }}>
                To contribute to the development of secure, AI-powered solutions that help
                organizations protect their digital assets, improve incident response, and make
                cybersecurity more proactive while continuing to grow as a Cybersecurity and AI
                professional.
              </p>
            </div>
          </motion.div>

          <div>
            <TimelineBlock title="Education" items={education} delay={0.1} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineBlock({ title, items, delay }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
      className="mb-9"
    >
      <div
        className="mb-5 uppercase tracking-wider text-[13px]"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
      >
        {title}
      </div>
      <div
        className="flex flex-col gap-7 pl-6"
        style={{ borderLeft: "1px solid var(--border)" }}
      >
        {items.map((item) => (
          <div key={item.title} className="relative">
            <span
              className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full"
              style={{
                background: "var(--ai)",
                boxShadow: "0 0 0 4px var(--bg), 0 0 0 5px var(--border-strong)",
              }}
            />
            <div
              className="text-xs mb-1"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
            >
              {item.when}
            </div>
            <h4 className="text-base mb-1">{item.title}</h4>
            <p className="text-sm" style={{ color: "var(--text-dim)" }}>
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
