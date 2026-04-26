import React from "react";
import { courses } from "../config";

const Courses = () => {
  return (
    <section id="courses" className="section">
      <h2 className="section-title">Courses I Offer</h2>
      <p className="section-subtitle">
        Structured, outcome-driven AI/ML and GenAI programs tailored for kids, freshers, and working
        professionals.
      </p>
      <div className="card-grid">
        {courses.map((c) => (
          <div key={c.title} className="card">
            <h3>{c.title}</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
