"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useScroll";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import "./Navbar.css";

const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const active = useActiveSection(sectionIds);
  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 761px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className="navbar-header">
      <nav
        className="navbar-nav"
        aria-label="Primary navigation"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setOpen(false);
        }}
      >
        <a
          href="#home"
          className="navbar-brand"
          onClick={() => setOpen(false)}
          aria-label="Shoaib Asghar, home"
        >
          <span className="brand-mark" aria-hidden="true">
            sa.
          </span>
          <span>
            Shoaib Asghar<span className="brand-period">.</span>
          </span>
        </a>
        <div className="navbar-right">
          <ThemeToggle />
          <a href="#contact" className="navbar-cta">
            Let’s talk <span aria-hidden="true">↗︎</span>
          </a>
          <button
            ref={menuButton}
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="site-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
        <ul
          id="site-navigation"
          className={`navbar-links ${open ? "open" : ""}`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={
                  active === link.href.slice(1) ? "location" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
