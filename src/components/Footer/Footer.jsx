export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "36px 0" }}>
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3.5">
        <p
          className="text-[13px]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
        >
          © 2026 Muhammad Shoaib Asghar. Built with Next.js, Tailwind &amp; Framer Motion.
        </p>
        <a href="#home" className="text-[13px]" style={{ color: "var(--text-dim)" }}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
