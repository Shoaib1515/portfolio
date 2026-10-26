const resumes = [
  {
    title: "Software engineering",
    note: "Python, FastAPI, Flutter & full-stack work",
    file: "/resume/software-resume.pdf",
  },
  {
    title: "Cybersecurity",
    note: "Security operations, labs & threat intelligence",
    file: "/resume/cybersecurity-resume.pdf",
  },
  {
    title: "Quality assurance",
    note: "Manual testing, API testing & documentation",
    file: "/resume/qa-resume.pdf",
  },
];
export default function Resume() {
  return (
    <section id="resume" className="section section-bordered">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A closer look</p>
            <h2>The right CV for the role.</h2>
          </div>
          <p>Download a version tailored to your team.</p>
        </div>
        <div className="resume-grid">
          {resumes.map((item) => (
            <a
              href={item.file}
              download
              className="resume-link"
              key={item.file}
            >
              <span className="mono small muted">PDF / RESUME</span>
              <h3>{item.title}</h3>
              <p className="small muted">{item.note}</p>
              <span className="resume-download">
                Download CV <span aria-hidden="true">↓</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
