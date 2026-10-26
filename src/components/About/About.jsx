import { education } from "@/data/experience";
export default function About() {
  return (
    <section id="about" className="section section-tinted">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">02 / About me</p>
          <h2>
            Curious by nature.
            <br />
            Practical by approach.
          </h2>
          <p className="about-lead">
            I’m Muhammad Shoaib Asghar, a software engineering graduate who
            enjoys connecting how things work with how they can work better.
          </p>
          <p className="muted">
            My path started with Flutter interfaces, moved into Python and
            FastAPI backends, and grew into security operations and AI tooling.
            I care about clear interfaces, reliable systems, and making security
            part of the development process.
          </p>
          <p className="muted mt-4">
            I’m looking for opportunities to build useful software, learn with a
            strong team, and bring software engineering and cybersecurity closer
            together.
          </p>
        </div>
        <div className="education-panel">
          <h3 className="mono small">EDUCATION & TRAINING</h3>
          {education.map((item) => (
            <div className="education-item" key={item.title}>
              <p className="mono small muted">{item.when}</p>
              <h4>{item.title}</h4>
              <p className="muted small">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
