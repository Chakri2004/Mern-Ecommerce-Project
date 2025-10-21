import React from "react";
import "../QuickLinks/QuickLinks.css";

const PrivacyPolicy = () => {
  return (
    <div className="quickPage" style={{ lineHeight: "1.7", padding: "3rem", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#222" }}>Privacy Policy</h1>
      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
        At Aura, your privacy is a top priority. We are committed to protecting your personal data and using it responsibly to improve your experience.
      </p>

      <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#000" }}>1. Information We Collect</h2>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        We collect information such as your name, email, shipping address, and payment details to process orders and provide personalized services.
      </p>

      <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#000" }}>2. How We Use Your Information</h2>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Your information is used to fulfill orders, respond to inquiries, send updates about our products, and improve your overall shopping experience.
      </p>

      <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#000" }}>3. Sharing of Data</h2>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        We never sell your personal information. Data may be shared with trusted third parties solely to fulfill orders or provide services on our behalf.
      </p>

      <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#000" }}>4. Cookies & Tracking</h2>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        We use cookies and similar technologies to enhance site functionality, analyze usage, and improve your shopping experience.
      </p>

      <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#000" }}>5. Contact Us</h2>
      <p style={{ color: "#555" }}>
        For any questions or concerns about this privacy policy, reach out to us at:{" "}
        <a href="mailto:privacy@aurashop.com" style={{ color: "#0077cc", textDecoration: "none" }}>privacy@aurashop.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
