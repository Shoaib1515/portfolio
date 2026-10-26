import Image from "next/image";
import { certificates } from "@/data/certificates";
export default function Certifications() {
  return (
    <section id="certifications" className="section section-tinted">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Continued learning</p>
            <h2>Building on the fundamentals.</h2>
          </div>
          <p>
            Completed courses in cybersecurity
            <br />
            and open-source intelligence.
          </p>
        </div>
        <div className="credentials-grid">
          {certificates.map((item) => (
            <article className="credential" key={item.id}>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-preview"
                aria-label={`Open ${item.title} certificate`}
              >
                <Image
                  src={item.file}
                  alt=""
                  width={640}
                  height={360}
                  sizes="(max-width: 760px) 90vw, 40vw"
                />
              </a>
              <p className="mono small muted">{item.issuer}</p>
              <h3>{item.title}</h3>
              <p className="muted small">{item.description}</p>
              <p className="small muted">Completed {item.completedOn}</p>
              <details>
                <summary>Credential details</summary>
                <p className="small muted credential-id">
                  ID: {item.credentialId}
                </p>
                <a
                  className="text-link"
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.title} certificate`}
                >
                  View certificate ↗
                </a>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
