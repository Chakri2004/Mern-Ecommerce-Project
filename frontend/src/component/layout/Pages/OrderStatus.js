import React, { useState } from "react";
import "./OrderStatus.css";

const mockOrders = {
  "10001": "✅ Your order #10001 has been shipped and is on the way!",
  "10002": "📦 Your order #10002 is being processed and will ship soon.",
  "10003": "🚚 Your order #10003 has been delivered.",
  "10004": "❌ Your order #10004 was cancelled. Please contact support.",
};

const OrderStatus = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const checkOrderStatus = () => {
    if (orderId.trim() === "") {
      setStatus("⚠️ Please enter a valid order ID.");
      return;
    }
    if (mockOrders[orderId]) {
      setStatus(mockOrders[orderId]);
    } else {
      setStatus(`❌ Order #${orderId} not found. Please check and try again.`);
    }
  };

  return (
    <div className="order-status-container">
      <h2>Order Status</h2>
      <p>Enter your order ID to track the current status.</p>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button onClick={checkOrderStatus}>Check Status</button>
      </div>

      {status && <div className="status-message">{status}</div>}
    </div>
  );
};

export default OrderStatus;
