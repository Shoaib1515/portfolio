import { SITE } from "@/lib/constants";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <p className="footer-name">{SITE.name}</p>
          <p className="small muted">
            Software, AI & security. Built with care.
          </p>
        </div>
        <div className="footer-links">
          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗︎
          </a>
          <a
            href={SITE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗︎
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
