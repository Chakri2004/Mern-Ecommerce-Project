import React from "react";

const DispatchDelivery = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto", fontFamily: "Arial, sans-serif", lineHeight: "1.7", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Delivery Information</h2>
      <ul style={{ paddingLeft: "20px", color: "#555" }}>
        <li><b>Standard Delivery:</b> Receive your order in 3–5 business days.</li>
        <li><b>Express Delivery:</b> Fast delivery within 1–2 business days.</li>
        <li><b>Weekend Orders:</b> Orders placed on weekends are processed the next business day.</li>
      </ul>
      <h3 style={{ marginTop: "30px", marginBottom: "10px", color: "#333" }}>Order Tracking</h3>
      <p style={{ color: "#555" }}>
        Track your shipment easily using the tracking link sent to your email after your purchase.
      </p>
    </div>
  );
};

export default DispatchDelivery;
