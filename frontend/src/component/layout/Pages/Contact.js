import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Add this import

const Contact = () => {
  const [showChat, setShowChat] = useState(false);
  const history = useHistory(); // Initialize history

  const handleLiveSupport = () => {
    setShowChat(true);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Need Assistance?</h2>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        We're here to help you every step of the way. Choose an option below to get started.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div
          style={cardStyle}
          onClick={() => history.push("/orders")} // Correct usage of history.push
        >
          <h3 style={cardTitleStyle}>Order Support</h3>
          <p style={cardTextStyle}>Track, modify, or cancel your orders easily with our online tools.</p>
        </div>

        <div
          style={cardStyle}
          onClick={() => history.push("/returns")} // Correct usage of history.push
        >
          <h3 style={cardTitleStyle}>Returns & Exchanges</h3>
          <p style={cardTextStyle}>Easily return or exchange items within our hassle-free policy period.</p>
        </div>
        <div style={cardStyle} onClick={handleLiveSupport}>
          <h3 style={cardTitleStyle}>Live Support</h3>
          <p style={cardTextStyle}>Chat with our support team, call us, or send an email for quick help.</p>
        </div>

        <div
          style={cardStyle}
          onClick={() => history.push("/faqs")} // Correct usage of history.push
        >
          <h3 style={cardTitleStyle}>Help Guides</h3>
          <p style={cardTextStyle}>Browse step-by-step guides for shopping, account setup, and more.</p>
        </div>
      </div>

      {showChat && (
        <div style={chatWidgetStyle}>
          <div style={chatHeaderStyle}>
            <span>Live Support</span>
            <button style={closeBtnStyle} onClick={() => setShowChat(false)}>X</button>
          </div>
          <div style={chatBodyStyle}>
            {/* Replace this with Aura bot container or iframe */}
            <p>Hello! How can we help you today?</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const cardStyle = {
  padding: "20px",
  background: "#f9f9f9",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  cursor: "pointer",
};
const cardTitleStyle = { marginBottom: "10px", color: "#333" };
const cardTextStyle = { color: "#555" };

const chatWidgetStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  width: "300px",
  height: "400px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  zIndex: 1000,
};

const chatHeaderStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const chatBodyStyle = { padding: "10px", flex: 1, overflowY: "auto" };

const closeBtnStyle = {
  background: "red",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  cursor: "pointer",
};

export default Contact;
