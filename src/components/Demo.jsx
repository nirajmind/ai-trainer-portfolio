import React from "react";
import { demo } from "../config";

const Demo = () => {
  return (
    <section id="demo" className="section">
      <h2 className="section-title">Live Agent Demo</h2>
      <p className="section-subtitle">
        Upload a CSV and watch an AI agent analyze distributions, mean/variance, and hidden
        patterns using embeddings and vector search.
      </p>
      {demo.url && demo.url.startsWith("http") ? (
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <iframe
            src={demo.url}
            title="CSV Agent Demo"
            width="100%"
            height="600"
            style={{ border: "none" }}
          />
        </div>
      ) : (
        <p style={{ color: "var(--muted)" }}>
          Demo URL not configured yet. Update <code>demo.url</code> in <code>config.js</code> once
          your Streamlit app is deployed.
        </p>
      )}
    </section>
  );
};

export default Demo;
