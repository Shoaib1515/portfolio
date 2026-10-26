import Image from "next/image";
import HeroCharacter from "./HeroCharacter";
import { SITE } from "@/lib/constants";
import { projects } from "@/data/projects";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> SOFTWARE / AI / SECURITY
            </p>
            <p className="hero-intro">Hello, I’m</p>
            <h1>
              <span className="hero-first-name">Muhammad</span>
              <br />
              <span className="hero-name">
                Shoaib Asghar<span className="hero-period">.</span>
              </span>
            </h1>
            <p className="hero-headline">
              Building intelligent systems.
              <br />
              <span>Keeping security at the core.</span>
            </p>
            <div className="hero-roles">
              <span>Software Engineer</span>
              <span>AI Enthusiast</span>
              <span>Cybersecurity</span>
            </div>
            <p className="hero-description">
              From thoughtful interfaces to resilient backends. I turn ideas
              into practical software, AI workflows, and security tools.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore my work <span aria-hidden="true">↗︎</span>
              </a>
              <a
                href="/resume/software-resume.pdf"
                download
                className="btn btn-ghost"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-socials">
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗︎</span>
              </a>
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗︎</span>
              </a>
              <span className="hero-location">
                Pakistan · Open to opportunities
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <HeroCharacter />
            <a
              className="orbit-label orbit-label-software"
              href="#software"
              aria-label="View Software engineering skills"
            >
              <span className="orbit-label-icon" aria-hidden="true">
                &lt;/&gt;
              </span>
              <span>
                <small>BUILD</small>Software engineering
              </span>
              <svg
                className="orbit-link-arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="m9 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="orbit-label orbit-label-ai"
              href="#ai"
              aria-label="View Applied AI skills"
            >
              <span className="orbit-label-icon" aria-hidden="true">
                ✧
              </span>
              <span>
                <small>INTELLIGENCE</small>Applied AI
              </span>
              <svg
                className="orbit-link-arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="m9 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="orbit-label orbit-label-security"
              href="#security"
              aria-label="View Cybersecurity skills"
            >
              <svg
                width="23"
                height="26"
                viewBox="0 0 24 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 2 22 6v8c0 6-10 12-10 12S2 20 2 14V6Z" />
                <path d="m7 13 3 3 7-7" />
              </svg>
              <span>
                <small>PROTECT</small>Cybersecurity
              </span>
              <svg
                className="orbit-link-arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="m9 5 7 7-7 7" />
              </svg>
            </a>
            <div className="hero-identity">
              <Image
                src="/images/profile.webp"
                alt="Muhammad Shoaib Asghar"
                width={48}
                height={48}
                className="profile-photo"
              />
              <div>
                <p>Engineering with curiosity.</p>
                <span className="mono">Software × Intelligence × Security</span>
              </div>
              <svg
                className="identity-star"
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M16 1v30M1 16h30M5.4 5.4l21.2 21.2M5.4 26.6 26.6 5.4" />
              </svg>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-facts">
            <p>
              <strong>
                {projects.length}
                <span>+</span>
              </strong>
              <span>Projects & experiments</span>
            </p>
            <p>
              <strong>03</strong>
              <span>Connected disciplines</span>
            </p>
          </div>
          <a href="#projects" className="hero-scroll">
            <span className="scroll-mouse" aria-hidden="true" />
            Scroll to discover <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
