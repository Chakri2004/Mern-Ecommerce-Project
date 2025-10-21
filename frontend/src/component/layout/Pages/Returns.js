import React from "react";

const Returns = () => {
  return (
    <div style={{
      padding: "40px",
      maxWidth: "700px",
      margin: "auto",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.7",
      backgroundColor: "#fdfdfd",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Returns & Exchanges</h2>
      <p style={{ color: "#555" }}>
        Not completely happy with your order? No worries! You can return or exchange your items within <b>15 days</b> of delivery with ease.
      </p>
      <ul style={{ paddingLeft: "20px", color: "#555" }}>
        <li>Simple online return process</li>
        <li>Get a full refund or replacement</li>
        <li>24/7 customer support for any assistance</li>
      </ul>
      <p style={{ marginTop: "20px", color: "#777" }}>
        *Please ensure items are unused and in original packaging for a smooth return process.
      </p>
    </div>
  );
};

export default Returns;
