import React from "react";

const Navbar = ({ onNavClick, onBookDemo }) => {
  return (
    <div className="navbar">
      <div className="nav-inner">
        <div style={{ fontWeight: 700, letterSpacing: "0.08em", fontSize: "0.9rem" }}>
          NIRAJ • <span style={{ color: "var(--accent)" }}>GENAI</span>
        </div>
        <div className="nav-links">
          <span className="nav-link" onClick={() => onNavClick("home")}>
            Home
          </span>
          <span className="nav-link" onClick={() => onNavClick("courses")}>
            Courses
          </span>
          <span className="nav-link" onClick={() => onNavClick("projects")}>
            Projects
          </span>
          <span className="nav-link" onClick={() => onNavClick("demo")}>
            Demo
          </span>
          <span className="nav-link" onClick={() => onNavClick("contact")}>
            Contact
          </span>
          <button className="btn btn-primary" onClick={onBookDemo}>
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
