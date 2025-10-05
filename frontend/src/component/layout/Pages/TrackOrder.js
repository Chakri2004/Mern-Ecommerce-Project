import React from "react";
import "../QuickLinks/QuickLinks.css";

const TrackOrder = () => {
  return (
    <div className="quickPage">
      <h1>Track Your Order</h1>
      <p>Enter your order ID below to track your delivery status.</p>
      <input type="text" placeholder="Order ID" />
      <button>Track Order</button>
    </div>
  );
};

export default TrackOrder;
