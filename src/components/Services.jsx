import React from "react";

const Services = () => {
  const services = [
    {
      title: "Corporate AI/ML Training",
      description:
        "Custom-designed AI/ML and GenAI programs for engineering teams, product teams, and leadership groups."
    },
    {
      title: "GenAI Engineering Bootcamp",
      description:
        "Hands-on training in RAG, vector databases, LangGraph, agents, and production-grade GenAI systems."
    },
    {
      title: "AI Strategy & Architecture Consulting",
      description:
        "End-to-end guidance on AI adoption, platform design, governance, and ROI-focused implementation."
    },
    {
      title: "Custom AI Solutions",
      description:
        "We build tailored AI agents, automation workflows, and data intelligence systems for enterprises."
    }
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We help companies adopt AI with confidence — through training, engineering, and strategy.
      </p>

      <div className="card-grid">
        {services.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
