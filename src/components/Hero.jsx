import React from "react";
import "../styles/Hero.css";

const Hero = ({ onBookDemo }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="glow">Open Trade Technologies</span>
        </h1>

        <p className="hero-tagline">
          AI Training • GenAI Engineering • Enterprise AI Solutions
        </p>

        <p className="hero-description">
          We help companies adopt AI responsibly and effectively through
          hands‑on engineering, structured learning programs, and
          production‑ready GenAI systems.  
          <br />
          From RAG pipelines to agentic workflows — we build the future with you.
        </p>

        <button className="hero-cta" onClick={onBookDemo}>
          Book a Demo →
        </button>

        <div className="hero-meta">
          <span>AI/ML Training</span>
          <span>GenAI Engineering</span>
          <span>RAG & Vector Search</span>
          <span>Agentic Systems</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
