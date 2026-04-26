import React from "react";
import "../styles/Services.css";   // <-- CLEAN, PROFESSIONAL IMPORT

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

      {/* --- MAIN SERVICES GRID --- */}
      <div className="card-grid">
        {services.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            <p className="service-desc">{s.description}</p>
          </div>
        ))}
      </div>

      {/* --- CLOUD CERTIFICATION COMPARISON SECTION --- */}
      <section className="cloud-compare-section">
        <h3 className="cloud-compare-title">Cloud Certification Comparison</h3>
        <p className="cloud-compare-subtitle">
          We help your team choose the right cloud provider based on cost, job role, and company strategy.
        </p>

        <div className="cloud-table-wrapper">
          <table className="cloud-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Exam Cost (INR)</th>
                <th>Difficulty</th>
                <th>Validity</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AWS</td>
                <td>₹8,000 – ₹12,000</td>
                <td>Medium</td>
                <td>3 years</td>
                <td>Beginners, Enterprise Teams</td>
              </tr>
              <tr>
                <td>Azure</td>
                <td>₹4,800 – ₹12,000</td>
                <td>Medium – High</td>
                <td>1 year</td>
                <td>Enterprise IT, Cloud Migration</td>
              </tr>
              <tr>
                <td>GCP</td>
                <td>₹6,500 – ₹12,000</td>
                <td>Medium</td>
                <td>2 years</td>
                <td>Data/ML‑Focused Teams</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="cloud-note">
          All our AI/ML and GenAI programs include optional cloud certification preparation.  
          Your team can choose AWS, Azure, or GCP — and we guide them end‑to‑end.
        </p>
      </section>
    </section>
  );
};

export default Services;
