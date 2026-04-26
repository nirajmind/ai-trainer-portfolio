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
        <h3>Trainer Profile</h3>
        <p>
          I help teams and individuals move from GenAI curiosity to production-grade AI systems —
          with a focus on RAG, agents, and secure, cloud-native delivery.
        </p>
        <div className="hero-meta">
          <span>17+ years engineering</span>
          <span>Cloud: GCP • Azure • AWS</span>
          <span>GenAI: Claude • OpenAI • LangGraph</span>
          <span>Domains: BFSI • Trading • Platforms</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
