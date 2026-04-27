import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Reach out to our team for training, partnerships, or enterprise AI solutions.
      </p>

      <div className="contact-grid">

        {/* --- PRIMARY CONTACT: SALES TEAM --- */}
        <div className="contact-card primary-contact">
          <h3 className="contact-heading">Primary Contact — Sales Team</h3>

          <p className="contact-name">Mr. Pariwesh Gupta</p>
          <p className="contact-role">Sales & Partnerships</p>

          <p className="contact-item">
            📞 <a href="tel:+919140762809">+91 91407 62809</a>
          </p>
          <p className="contact-item">
            ✉️ <a href="mailto:pariwesh.gupta@gmail.com">pariwesh.gupta@gmail.com</a>
          </p>
          <p className="contact-item">
            💬 <a href="https://wa.me/919140762809" target="_blank" rel="noreferrer">
              WhatsApp Sales Team
            </a>
          </p>

          <button className="contact-btn">Talk to Sales →</button>
        </div>

        {/* --- SECONDARY CONTACT: TECHNICAL QUERIES --- */}
        <div className="contact-card secondary-contact">
          <h3 className="contact-heading">Secondary Contact — Technical Queries</h3>

          <p className="contact-name">Niraj Kumar Adhikary</p>
          <p className="contact-role">Lead Instructor & Technical Advisor</p>

          <p className="contact-item">
            ✉️ <a href="mailto:niky.sway@gmail.com">niky.sway@gmail.com</a>
          </p>
          <p className="contact-item">
            🔗 <a href="https://www.linkedin.com/in/nirajadhikary" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </p>

          <p className="contact-note">
            For technical discussions, curriculum design, or enterprise AI architecture queries.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
