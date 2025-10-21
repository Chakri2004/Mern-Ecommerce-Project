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
    <div className="paymentPage">
      <h2>Payment</h2>
      <div className="paymentContainer">
        <div className="paymentOptions">
          <h3>Select Payment Method</h3>
          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI / Net Banking
          </label>
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Debit / Credit Card
          </label>
        </div>
        
        <div className="paymentDetails">
          {paymentMethod === "upi" && (
            <div>
              <h3>Enter UPI Details</h3>
              <input
                type="text"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>
          )}

          {paymentMethod === "card" && (
            <div>
              <h3>Enter Card Details</h3>
              <input
                type="text"
                placeholder="Card Number"
                maxLength="16"
                value={cardDetails.number}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, number: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
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
            <div>
              <h3>Cash on Delivery</h3>
              <p>You will pay at the time of delivery.</p>
            </div>
          )}
        </div>
      </div>

      <div className="orderSummary">
        <h3>Order Summary</h3>
        <p>Subtotal: ₹{orderInfo.subtotal}</p>
        <p>Shipping Fee: ₹{orderInfo.shippingFee}</p>
        <h4>Total: ₹{orderInfo.total}</h4>
      </div>

      <button className="placeOrderBtn" onClick={placeOrderHandler}>
        Place Order
      </button>
    </div>
  );
};

export default Payment;
