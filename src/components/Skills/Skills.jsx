import {
  softwareSkills,
  aiSkills,
  securitySkills,
  qaSkills,
  securityLabs,
  softSkills,
} from "@/data/skills";
const groups = [
  {
    id: "software",
    title: "Software engineering",
    note: "Interfaces, APIs, and the data behind them.",
    items: Object.values(softwareSkills).flatMap((group) =>
      group.items.map((skill) => skill.name),
    ),
  },
  {
    id: "ai",
    title: "Applied AI",
    note: "Language models connected to practical workflows.",
    items: aiSkills,
  },
  {
    id: "security",
    title: "Cybersecurity",
    note: "Security operations, assessment, and hands-on labs.",
    items: securitySkills,
  },
];
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The toolkit</p>
            <h2>Skills with a purpose.</h2>
          </div>
          <p>
            The tools and practices behind my projects.
            <br />
            Always learning, always building.
          </p>
        </div>
        <div className="skills-grid">
          {groups.map((group) => (
            <article id={group.id} key={group.id} className="skill-group">
              <div className="skill-group-top">
                <span
                  className={`skill-symbol symbol-${group.id}`}
                  aria-hidden="true"
                >
                  {group.id === "software"
                    ? "</>"
                    : group.id === "ai"
                      ? "✧"
                      : "◇"}
                </span>
                <span className="mono small muted">
                  0{groups.indexOf(group) + 1}
                </span>
              </div>
              <h3>{group.title}</h3>
              <p className="muted small">{group.note}</p>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <details className="practice-details">
          <summary>Testing, collaboration & lab experience</summary>
          <div className="practice-grid">
            {[
              { title: "QA & testing", items: qaSkills },
              { title: "Security labs", items: securityLabs },
              { title: "Working together", items: softSkills },
            ].map((group) => (
              <div key={group.title}>
                <div className="skill-group-top">
                  <span
                    className={`skill-symbol symbol-${group.id}`}
                    aria-hidden="true"
                  >
                    {group.id === "software"
                      ? "</>"
                      : group.id === "ai"
                        ? "✧"
                        : "◇"}
                  </span>
                  <span className="mono small muted">
                    0{groups.indexOf(group) + 1}
                  </span>
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
