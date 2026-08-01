"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { fadeUp } from "@/hooks/useAnimation";
import ParticleBackground from "@/components/ParticleBackground/ParticleBackground";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <ParticleBackground />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.05}
              className="eyebrow"
            >
              <span className="dot sw"></span>
              <span className="dot ai"></span>
              <span className="dot sec"></span> Portfolio — Software / AI /
              Security
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15}
              className="hero-heading"
            >
              {SITE.name}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="flex flex-wrap gap-2.5 mb-6"
            >
              {SITE.roles.map((role, i) => (
                <span key={role} className="role-chip">
                  <span
                    className={`dot ${["sw", "ai", "sec"][i % 3]}`}
                  ></span>
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.42}
              className="text-[17px] max-w-[540px] mb-8"
              style={{ color: "var(--text-dim)" }}
            >
              {SITE.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.54}
              className="flex flex-wrap gap-3 mb-9"
            >
              <a href="#resume" className="btn btn-primary">
                View resume (PDF)
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact me
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.66}
              className="hero-socials flex flex-wrap gap-4"
            >
              <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${SITE.email}`}>Email</a>
              <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>{SITE.phone}</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
