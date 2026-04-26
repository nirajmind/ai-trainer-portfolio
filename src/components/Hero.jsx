import React from "react";
import { hero } from "../config";
import { FaBolt } from "react-icons/fa";

const Hero = ({ onBookDemo }) => {
  return (
    <section id="home" className="hero">
      <div>
        <div className="hero-badge">
          <FaBolt size={14} />
          AI/ML Trainer • GenAI Engineer • AI Architect
        </div>
        <h1 className="hero-title">
          <span className="hero-highlight">{hero.name}</span>
        </h1>
        <p className="hero-tagline">{hero.title}</p>
        <p style={{ whiteSpace: "pre-line", fontSize: "0.95rem", color: "var(--muted)" }}>
          {hero.description}
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <button className="btn btn-primary" onClick={onBookDemo}>
            {hero.cta}
          </button>
          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
      </div>
      <div className="hero-right">
        <h3>About Our Company</h3>
        <p>
          Open Trade Technologies is an AI/ML and GenAI engineering company delivering
          enterprise-grade training, automation agents, and AI strategy for modern teams.
        </p>

        <div className="hero-meta">
          <span>AI/ML Training</span>
          <span>GenAI Engineering</span>
          <span>RAG & Agents</span>
          <span>Enterprise AI Strategy</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
