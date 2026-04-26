import React from "react";
import "../styles/LeadInstructor.css";

const LeadInstructor = () => {
  return (
    <section id="lead-instructor" className="instructor-section">
      <h2 className="instructor-title">Meet the Lead Instructor</h2>
      <p className="instructor-subtitle">
        The expertise behind our AI/ML and GenAI training programs.
      </p>

      <div className="instructor-card">
        <div className="instructor-glow" />

        <h3 className="instructor-name">Niraj Kumar Adhikary</h3>
        <p className="instructor-role">Lead Instructor • AI Architect • GenAI Engineer</p>

        <p className="instructor-bio">
          With 17+ years of experience in cloud-native platforms, AI/ML engineering,
          GenAI systems, RAG pipelines, vector search, LangGraph, and enterprise
          architecture, Niraj leads the training and engineering programs at
          Open Trade Technologies.  
          <br /><br />
          He specializes in building production-grade GenAI systems, agentic workflows,
          and enterprise-ready AI solutions that help teams move from AI curiosity to
          real-world impact.
        </p>

        <div className="instructor-tags">
          <span>GenAI Engineering</span>
          <span>RAG Pipelines</span>
          <span>Vector Databases</span>
          <span>LangGraph</span>
          <span>Cloud Architecture</span>
        </div>

        <a
          href="https://www.linkedin.com/in/nirajadhikary"
          target="_blank"
          rel="noreferrer"
          className="instructor-link"
        >
          LinkedIn Profile →
        </a>
      </div>
    </section>
  );
};

export default LeadInstructor;
