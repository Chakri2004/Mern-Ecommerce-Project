import React, { useState } from "react";
import axios from "axios";
import "./TrackOrder.css";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderInfo, setOrderInfo] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    setError("");
    setOrderInfo(null);

    if (!orderId.trim()) {
      setError("Please enter an Order ID.");
      return;
    }

    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/track/${orderId.trim()}`
      );

      if (data.success) {
        setOrderInfo(data.order);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Order not found.");
    }
  };

  return (
    <div className="track-order-container">
      <h2>Track Your Order</h2>
      <p>Enter your order ID below to track your delivery status.</p>

      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="order-input"
      />

      <button onClick={handleTrack} className="track-btn">
        Track Order
      </button>

      {orderInfo && (
        <div className="order-status-box">
          <h3>Order ID: {orderInfo._id}</h3>
          <p><strong>Status:</strong> {orderInfo.orderStatus}</p>
          <p><strong>Total Price:</strong> ₹{orderInfo.totalPrice}</p>
          <p><strong>Items:</strong></p>
          <ul>
            {orderInfo.orderItems.map((item) => (
              <li key={item.product}>
                {item.name} - Qty: {item.quantity} - ₹{item.price}
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <p className="order-error">{error}</p>}
    </div>
  );
};

export default TrackOrder;
