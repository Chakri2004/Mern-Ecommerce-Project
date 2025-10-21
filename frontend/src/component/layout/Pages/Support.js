import React from "react";
import { Link } from "react-router-dom";
import "../QuickLinks/QuickLinks.css";

const Support = () => {
  return (
    <div className="quickPage" style={{ fontFamily: "'Arial', sans-serif", lineHeight: "1.7", padding: "3rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#222" }}>Customer Support</h1>
      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
        At Aura, we are dedicated to providing exceptional support. Whether you have questions, need guidance, or want to provide feedback, our team is here to assist you.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Email Support</h2>
        <p style={{ color: "#555" }}>
          Reach out to our support team for inquiries or assistance via email: <a href="mailto:support@aurashop.com" style={{ color: "#0077cc" }}>support@aurashop.com</a>.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Phone Support</h2>
        <p style={{ color: "#555" }}>
          Speak with a representative directly by calling <b>+91 98765 43210</b> (Monday – Friday, 9 AM – 6 PM).
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Live Chat</h2>
        <p style={{ color: "#555" }}>
          Connect instantly with our support team through the live chat feature available on the bottom-right corner of the website for real-time assistance.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Help Center</h2>
        <p style={{ color: "#555" }}>
          Explore our <Link to="/faqs" style={{ color: "#0077cc" }}>FAQs</Link> for guidance on common questions, product usage, and more.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Feedback</h2>
        <p style={{ color: "#555" }}>
          Your feedback helps us improve. Share your thoughts with us at <a href="mailto:feedback@aurashop.com" style={{ color: "#0077cc" }}>feedback@aurashop.com</a>.
        </p>
      </section>

      <footer style={{ textAlign: "center", color: "#888", marginTop: "3rem", fontSize: "0.9rem" }}>
        &copy; 2025 Aura, Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Support;
