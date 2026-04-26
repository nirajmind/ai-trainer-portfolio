import React, { useState } from "react";
import emailjs from "emailjs-com";

const BookDemoModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your EmailJS service/template/user IDs
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3 style={{ marginTop: 0, marginBottom: 10 }}>Book a Demo</h3>
        <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: 16 }}>
          Share your details and I’ll get back to you with available slots for a live GenAI/AI/ML
          demo session.
        </p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={form.name} onChange={onChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={onChange} required />
          </div>
          <div className="form-group">
            <label>Message / Context</label>
            <textarea
              name="message"
              rows={3}
              value={form.message}
              onChange={onChange}
              placeholder="Team size, experience level, topics of interest..."
              required
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 10 }}>
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
          {status === "success" && (
            <p style={{ marginTop: 10, fontSize: "0.8rem", color: "#4ade80" }}>
              Thank you! I’ll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p style={{ marginTop: 10, fontSize: "0.8rem", color: "var(--danger)" }}>
              Something went wrong. Please try again or contact me via email/WhatsApp.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookDemoModal;
