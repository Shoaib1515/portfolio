import { experience } from "@/data/experience";
export default function Experience() {
  return (
    <section id="experience" className="section section-bordered">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Experience</p>
            <h2>Learning through doing.</h2>
          </div>
          <p>
            From mobile interfaces to IT operations.
            <br />
            Experience that informs how I build.
          </p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={item.title} className="experience-row">
              <p className="mono small muted">{item.when}</p>
              <div>
                <h3>{item.title}</h3>
                <p className="muted">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
