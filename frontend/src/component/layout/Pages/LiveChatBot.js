import React, { useState } from "react";

const LiveChatBot = () => {
  const [showChat, setShowChat] = useState(true); // always show

  return (
    <>
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "300px",
            height: "150px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Arial, sans-serif",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "10px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <span>Live Support</span>
            <button
              onClick={() => setShowChat(false)}
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>

          <div style={{ padding: "10px" }}>
            Hello! How can we help you today?
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatBot;
