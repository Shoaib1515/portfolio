"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/hooks/useAnimation";
import { softwareSkills, qaSkills, softSkills } from "@/data/skills";
import { projects } from "@/data/projects";
import "./Skills.css";

const CARD_META = {
  frontend: { title: "Frontend", count: softwareSkills.frontend.items.length },
  backend: { title: "Backend", count: softwareSkills.backend.items.length },
  database: { title: "Database", count: softwareSkills.database.items.length },
};

export default function Skills() {
  const softwareProjects = projects.filter((p) => p.category === "software");

  return (
    <section
      id="software"
      className="section"
      style={{ "--accent": "var(--sw)", "--accent-dim": "var(--sw-dim)" }}
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
            <span className="dot sw"></span>Software Engineering
          </div>
          <h2 className="text-[clamp(28px,4vw,38px)] mb-3.5">
            Full-stack, from interface to database
          </h2>
          <p style={{ color: "var(--text-dim)" }}>
            Everything I use to design, build, and ship software products end
            to end.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
        >
          {Object.entries(softwareSkills).map(([key, group]) => (
            <motion.div variants={fadeUp} key={key} className="skill-card">
              <div className="flex items-center gap-3 mb-5 relative">
                <span className="skill-icon">{group.icon}</span>
                <div>
                  <h4
                    className="text-sm uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {CARD_META[key].title}
                  </h4>
                  <span
                    className="text-[11px]"
                    style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
                  >
                    {CARD_META[key].count} tools
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3.5 relative">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-sm flex items-center gap-2"
                        style={{ color: "var(--text-dim)" }}
                      >
                        <span className="dot sw" style={{ width: 5, height: 5 }}></span>
                        {skill.name}
                      </span>
                      <span
                        className="text-[11px]"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.16, 0.8, 0.24, 1], delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
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
          className="grid sm:grid-cols-2 gap-[18px]"
        >
          {softwareProjects.map((p) => (
            <motion.div variants={fadeUp} key={p.id} className="proj-card">
              <h4 className="text-[17px] mb-2">{p.title}</h4>
              <p className="text-sm mb-3.5" style={{ color: "var(--text-dim)" }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span key={tag} className="proj-tag">
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

        <div
          className="uppercase tracking-wider text-[13px] mb-5 mt-14"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
        >
          QA &amp; Testing
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-3"
        >
          {qaSkills.map((skill) => (
            <motion.div
              variants={fadeUp}
              key={skill}
              className="flex items-center gap-2.5 rounded-[10px] px-4 py-3.5 text-[14.5px]"
              style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
            >
              <span className="dot sw"></span>
              {skill}
            </motion.div>
          ))}
        </motion.div>

        <div
          className="uppercase tracking-wider text-[13px] mb-5 mt-14"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
        >
          Soft Skills
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-3"
        >
          {softSkills.map((skill) => (
            <motion.div
              variants={fadeUp}
              key={skill}
              className="flex items-center gap-2.5 rounded-[10px] px-4 py-3.5 text-[14.5px]"
              style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
            >
              <span className="dot sw"></span>
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
