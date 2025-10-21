import React from "react";

const Promotions = () => {
  return (
    <div style={{ padding: "2.5rem", maxWidth: "700px", margin: "auto", fontFamily: "'Arial', sans-serif" }}>
      <h1 style={{ marginBottom: "20px", color: "#222" }}>Promotions & Offers</h1>
      <p style={{ fontSize: "16px", color: "#444", marginBottom: "25px" }}>
        Discover our latest promotions and exclusive deals. Hurry — these offers are available for a limited time only!
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#333", fontSize: "15px" }}>
        <li style={{ marginBottom: "10px" }}>Save up to 50% on selected products.</li>
        <li style={{ marginBottom: "10px" }}>Exclusive seasonal discounts for members.</li>
      </ul>
    </div>
  );
};

export default Promotions;
