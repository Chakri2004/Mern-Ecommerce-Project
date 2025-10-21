import React from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Need Assistance?</h2>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        We're here to help you every step of the way. Choose an option below to get started.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "pointer" }}
             onClick={() => history.push("/orders")}>
          <h3 style={{ marginBottom: "10px", color: "#333" }}>Order Support</h3>
          <p style={{ color: "#555" }}>Track, modify, or cancel your orders easily with our online tools.</p>
        </div>

        <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "pointer" }}
             onClick={() => history.push("/returns")}>
          <h3 style={{ marginBottom: "10px", color: "#333" }}>Returns & Exchanges</h3>
          <p style={{ color: "#555" }}>Easily return or exchange items within our hassle-free policy period.</p>
        </div>

        <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "pointer" }}
             onClick={() => history.push("/support")}>
          <h3 style={{ marginBottom: "10px", color: "#333" }}>Live Support</h3>
          <p style={{ color: "#555" }}>Chat with our support team, call us, or send an email for quick help.</p>
        </div>

        <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "pointer" }}
             onClick={() => history.push("/faqs")}>
          <h3 style={{ marginBottom: "10px", color: "#333" }}>Help Guides</h3>
          <p style={{ color: "#555" }}>Browse step-by-step guides for shopping, account setup, and more.</p>
        </div>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center", color: "#555" }}>
        <p>Prefer direct contact? Reach out anytime:</p>
        <p><b>Email:</b> support@Aura.com | <b>Phone:</b> +91 12345 67890</p>
      </div>
    </div>
  );
};

export default Contact;
