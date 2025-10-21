import React from "react";

const Delivery = () => {
  return (
    <div style={{ padding: "3rem", maxWidth: "800px", margin: "auto", fontFamily: "'Helvetica Neue', sans-serif", lineHeight: 1.7 }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#222", marginBottom: "0.5rem" }}>Delivery Information</h1>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          Aura ensures your orders arrive safely and on time. Explore our delivery options and estimated timelines below.
        </p>
      </header>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#000", marginBottom: "0.5rem" }}>Standard Delivery</h2>
        <p style={{ color: "#555" }}>Reliable delivery within 3–5 business days, ideal for most orders.</p>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#000", marginBottom: "0.5rem" }}>Express Delivery</h2>
        <p style={{ color: "#555" }}>Get your order faster with 1–2 business days shipping for urgent needs.</p>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#000", marginBottom: "0.5rem" }}>Free Shipping</h2>
        <p style={{ color: "#555" }}>Enjoy complimentary shipping on all orders above ₹2,000.</p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#000", marginBottom: "0.5rem" }}>Additional Notes</h2>
        <ul style={{ color: "#555", paddingLeft: "1.2rem", listStyleType: "disc" }}>
          <li>Delivery times may vary during peak seasons.</li>
          <li>Tracking information will be provided via email once your order ships.</li>
          <li>For any delays or issues, contact our support team promptly.</li>
        </ul>
      </section>
    </div>
  );
};

export default Delivery;
