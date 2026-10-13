import React from "react";

function Projects({ projects = [] }) {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">MY RECENT WORK</p>
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <span className="project-number">
              PROJECT 0{index + 1}
            </span>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-tag">{project.tech}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;