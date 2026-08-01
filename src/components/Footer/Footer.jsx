import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 0" }}>
      <div className="container grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <p className="eyebrow">Portfolio footer</p>
          <h3 className="text-[20px] mb-2">Muhammad Shoaib Asghar</h3>
          <p className="text-[13.5px] max-w-[560px]" style={{ color: "var(--text-dim)" }}>
            Software, AI, and cybersecurity work with a security-first approach.
            Available for professional opportunities, collaborations, and contract work.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-3">
          <div className="flex flex-wrap gap-3 text-[13px]" style={{ color: "var(--text-dim)" }}>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>{SITE.phone}</a>
          </div>
          <div className="flex flex-wrap gap-4 text-[13px]" style={{ color: "var(--text-faint)" }}>
            <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
