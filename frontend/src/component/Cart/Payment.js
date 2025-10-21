import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const history = useHistory();

  const orderInfo = JSON.parse(localStorage.getItem("orderInfo")) || {
    subtotal: 1200,
    shippingFee: 50,
    total: 1250,
  };

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const placeOrderHandler = () => {
    localStorage.setItem("paymentMethod", paymentMethod);

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now().toString(),
      items: JSON.parse(localStorage.getItem("cartItems"))?.length || 0,
      total: orderInfo.total,
      status: "Confirmed",
      paymentMethod: paymentMethod,
    };

    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));
    localStorage.setItem("orderInfo", JSON.stringify(orderInfo));
    localStorage.removeItem("cartItems");

    history.push("/order-success");
  };

  return (
    <div className="payment-wrapper">
      <div className="payment-card">
        <h2 className="payment-title">Secure Payment</h2>
        <p className="payment-subtext">Select your preferred payment method</p>

        <div className="payment-options">
          <label className={`option ${paymentMethod === "cod" ? "active" : ""}`}>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>Cash on Delivery</span>
          </label>

          <label className={`option ${paymentMethod === "upi" ? "active" : ""}`}>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>UPI / Net Banking</span>
          </label>

          <label className={`option ${paymentMethod === "card" ? "active" : ""}`}>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>Debit / Credit Card</span>
          </label>
        </div>

        <div className="payment-details">
          {paymentMethod === "upi" && (
            <div>
              <h4>Enter UPI ID</h4>
              <input
                type="text"
                placeholder="example@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="card-inputs">
              <h4>Card Information</h4>
              <input
                type="text"
                placeholder="Card Number"
                maxLength="16"
                value={cardDetails.number}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, number: e.target.value })
                }
              />
              <div className="card-row">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, expiry: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="CVV"
                  maxLength="3"
                  value={cardDetails.cvv}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, cvv: e.target.value })
                  }
                />
              </div>
              <input
                type="text"
                placeholder="Cardholder Name"
                value={cardDetails.name}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, name: e.target.value })
                }
              />
            </div>
          )}

          {paymentMethod === "cod" && (
            <div className="cod-box">
              <h4>Cash on Delivery</h4>
              <p>You can pay securely at your doorstep when the order arrives.</p>
            </div>
          )}
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-line">
            <span>Subtotal</span>
            <span>₹{orderInfo.subtotal}</span>
          </div>
          <div className="summary-line">
            <span>Shipping Fee</span>
            <span>₹{orderInfo.shippingFee}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>₹{orderInfo.total}</span>
          </div>
        </div>

        <button className="place-order-btn" onClick={placeOrderHandler}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Payment;
