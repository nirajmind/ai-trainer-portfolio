import React from "react";
import { contact } from "../config";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Reach out for training, consulting, or GenAI architecture discussions.
      </p>
      <div className="card-grid">
        <div className="card">
          <h3>Direct Contact</h3>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
            I’m available for remote and hybrid engagements, workshops, and custom AI/ML programs.
          </p>
          <p style={{ marginTop: 10 }}>
            <strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">
              {contact.whatsapp}
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              {contact.linkedin}
            </a>
          </p>
        </div>
        <div className="card">
          <h3>Connect</h3>
          <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FaWhatsapp style={{ marginRight: 6 }} /> WhatsApp
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn">
              <FaLinkedin style={{ marginRight: 6 }} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
