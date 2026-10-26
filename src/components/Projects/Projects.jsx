"use client";
import { useState } from "react";
import ProjectArtwork from "./ProjectArtwork";
import { projects } from "@/data/projects";
import { filterByCategory } from "@/lib/utils";

const filters = [
  { key: "all", label: "All work" },
  { key: "software", label: "Software" },
  { key: "ai", label: "Applied AI" },
  { key: "security", label: "Security" },
];
const labels = {
  software: "Software engineering",
  ai: "Applied AI",
  security: "Cybersecurity",
};

function ProjectCard({ project, index }) {
  const links =
    project.repoUrls ||
    (project.repoUrl ? [{ label: "View source", url: project.repoUrl }] : []);
  return (
    <article className={`project-card project-${project.category}`}>
      <ProjectArtwork project={project} />
      <div className="project-card-top">
        <span className="project-number mono">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-category mono">
          {labels[project.category]}
        </span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="tag-list" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {project.details && (
        <details className="project-details">
          <summary>Inside the project</summary>
          {project.subtitle && (
            <p className="project-subtitle">{project.subtitle}</p>
          )}
          <p>{project.details}</p>
        </details>
      )}
      <div className="project-links">
        {links.length ? (
          links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label}: ${project.title}`}
            >
              {link.label} <span aria-hidden="true">↗︎</span>
            </a>
          ))
        ) : (
          <span className="muted small">Project / lab work</span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const filtered = filterByCategory(projects, filter);
  const visible =
    expanded || filter !== "all"
      ? filtered
      : filtered.filter((p) => p.featured);
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>
              Ideas turned into
              <br />
              working software.
            </h2>
          </div>
          <p>
            A selection of applications and security tools.
            <br />
            Explore the code, the stack, and the decisions behind them.
          </p>
        </div>
        <div className="project-toolbar">
          <div className="filter-list" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item.key}
                type="button"
                aria-pressed={filter === item.key}
                onClick={() => setFilter(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="mono small muted" role="status">
            {visible.length} of {projects.length} projects
          </p>
        </div>
        <div id="project-list" className="project-grid">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={projects.indexOf(project)}
            />
          ))}
        </div>
        {filter === "all" && (
          <div className="projects-more">
            <button
              type="button"
              className="btn btn-ghost"
              aria-expanded={expanded}
              aria-controls="project-list"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded
                ? "Show selected work"
                : `Explore all ${projects.length} projects`}{" "}
              <span aria-hidden="true">{expanded ? "−" : "+"}</span>
            </button>
            <a
              href="https://github.com/Shoaib1515"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              More on GitHub ↗︎
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
