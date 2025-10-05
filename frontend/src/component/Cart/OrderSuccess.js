import React from "react";
import { useHistory } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const history = useHistory();

  return (
    <div className="orderSuccessPage">
      <div className="successIcon">✅</div>
      <h2>Order Placed Successfully!</h2>
      <p>Your order is confirmed and will be delivered soon 🚚</p>

      <div className="successActions">
        <button
          className="actionButton"
          onClick={() => history.push("/orders")}
        >
          View Orders
        </button>
        <button
          className="actionButton"
          onClick={() => history.push("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
