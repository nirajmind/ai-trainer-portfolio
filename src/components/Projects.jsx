import React from "react";
import { projects } from "../config";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Selected Projects</h2>
      <p className="section-subtitle">
        A snapshot of my work across GenAI agents, microservices, and AI/ML experimentation.
      </p>
      <div className="card-grid">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="card">
            <h3>{p.title}</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{p.description}</p>
            <p style={{ marginTop: 10, fontSize: "0.8rem", color: "var(--accent)" }}>
              View on GitHub →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
