"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useScroll";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.classList.remove("menu-open");
      }
    };
  }, []);

  function setMenu(next) {
    setOpen(next);
    if (typeof document !== "undefined") {
      document.body.classList.toggle("menu-open", next);
    }
  }

  return (
    <header className="navbar-header">
      <nav className="navbar-nav" aria-label="Primary navigation">
        <a href="#home" className="navbar-brand">
          <Image
            src="/images/profile.webp"
            alt={SITE.name}
            width={36}
            height={36}
            className="navbar-avatar"
            priority
          />
          <span className="navbar-brand-name">M. Shoaib Asghar</span>
        </a>

        <ul id="site-navigation" className={`navbar-links ${open ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.replace("#", "") ? "active" : ""}
                onClick={() => setMenu(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <ThemeToggle />
          <a href="#contact" className="navbar-cta">
            Let&apos;s talk
          </a>
          <button
            type="button"
            className={`menu-btn ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-controls="site-navigation"
            aria-expanded={open}
            onClick={() => setMenu(!open)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
      <div
        className={`nav-backdrop ${open ? "open" : ""}`}
        onClick={() => setMenu(false)}
      ></div>
    </header>
  );
}
