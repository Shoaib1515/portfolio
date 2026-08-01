"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/hooks/useAnimation";
import { aiSkills } from "@/data/skills";
import { projects } from "@/data/projects";

export default function AI() {
  const aiProjects = projects.filter((p) => p.category === "ai");

  return (
    <section
      id="ai"
      className="section"
      style={{
        borderTop: "1px solid var(--border)",
        "--accent": "var(--ai)",
        "--accent-dim": "var(--ai-dim)",
      }}
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
            <span className="dot ai"></span>Artificial Intelligence
          </div>
          <h2 className="text-[clamp(28px,4vw,38px)] mb-3.5">
            Designing systems that reason
          </h2>
          <p style={{ color: "var(--text-dim)" }}>
            Generative AI, language models, agents, and the automation built
            around them.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-3 mb-14"
        >
          {aiSkills.map((skill) => (
            <motion.div
              variants={fadeUp}
              key={skill}
              className="flex items-center gap-2.5 rounded-[10px] px-4 py-3.5 text-[14.5px] transition-all hover:-translate-y-0.5"
              style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
            >
              <span className="dot ai"></span>
              {skill}
            </motion.div>
          ))}
        </motion.div>

        <div
          className="uppercase tracking-wider text-[13px] mb-5"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
        >
          Projects
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-[18px]"
        >
          {aiProjects.map((p) => (
            <motion.div
              variants={fadeUp}
              key={p.id}
              className="rounded-[14px] p-6 transition-all hover:-translate-y-1"
              style={{
                background: "var(--bg-elev)",
                border: "1px solid var(--border)",
              }}
            >
              <h4 className="text-[17px] mb-2">{p.title}</h4>
              <p className="text-sm mb-3.5" style={{ color: "var(--text-dim)" }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: "var(--ai-dim)",
                      color: "var(--ai)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
        </motion.div>
      </div>
    </section>
  );
}
