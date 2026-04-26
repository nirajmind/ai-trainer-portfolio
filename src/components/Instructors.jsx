import React from "react";

const instructors = [
  {
    name: "Niraj Kumar Adhikary",
    role: "Lead Instructor • AI Architect",
    bio: "17+ years in cloud-native, AI/ML, GenAI engineering, and platform architecture. Specializes in RAG, LangGraph, vector DBs, and enterprise AI systems.",
    linkedin: "https://www.linkedin.com/in/nirajadhikary"
  },
  {
    name: "Instructor 2",
    role: "Senior Data Scientist",
    bio: "Expert in ML modeling, NLP, and production deployment. Works with BFSI and retail clients.",
    linkedin: "#"
  },
  {
    name: "Instructor 3",
    role: "GenAI Engineer",
    bio: "Specializes in agentic systems, embeddings, and scalable GenAI pipelines.",
    linkedin: "#"
  }
];

const Instructors = () => {
  return (
    <section id="instructors" className="section">
      <h2 className="section-title">Our Instructors</h2>
      <p className="section-subtitle">
        Meet the experts behind our AI/ML and GenAI training programs.
      </p>

      <div className="card-grid">
        {instructors.map((i) => (
          <div key={i.name} className="card">
            <h3>{i.name}</h3>
            <p style={{ color: "var(--accent)", marginBottom: 6 }}>{i.role}</p>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{i.bio}</p>
            <a
              href={i.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ marginTop: 12 }}
            >
              LinkedIn →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
