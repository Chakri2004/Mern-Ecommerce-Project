import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div style={{ padding: "3rem", maxWidth: "900px", margin: "0 auto", lineHeight: "1.7", fontFamily: "'Arial', sans-serif", color: "#333" }}>
      <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Terms & Conditions</h1>
        <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: "700px", margin: "1rem auto 0 auto" }}>
          These Terms & Conditions govern your use of Aura's website and services. Please read them carefully before using our platform.
        </p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>1. Agreement to Terms</h2>
        <p>
          By accessing or using our website, you acknowledge that you have read, understood, and agree to comply with these terms. If you disagree, please refrain from using our services.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>2. Orders and Purchases</h2>
        <p>
          All orders are subject to product availability, verification, and confirmation. Aura reserves the right to refuse or cancel orders at its discretion.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>3. User Responsibilities</h2>
        <p>
          Users are responsible for safeguarding their account details. Any activity under your account is considered your responsibility.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>4. Modifications</h2>
        <p>
          Aura may update these Terms & Conditions at any time. Continued use of our services constitutes acceptance of the updated terms.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>5. Contact & Support</h2>
        <p>
          For questions or concerns regarding these terms, please contact our support team at{" "}
          <Link to="/support" style={{ color: "#0077cc", textDecoration: "none" }}>Support</Link>. 
          We are happy to assist you.
        </p>
      </section>

      <footer style={{ textAlign: "center", marginTop: "3rem", color: "#888", fontSize: "0.9rem" }}>
        © 2025 Aura, Inc. All Rights Reserved
      </footer>
    </div>
  );
};

export default TermsAndConditions;
