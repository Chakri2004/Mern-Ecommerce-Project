import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./ConfirmOrder.css";

const ConfirmOrder = () => {
  const history = useHistory();
  const { cartItems } = useSelector((state) => state.cart);

  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo")) || {};

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = 300;
  const total = subtotal + shippingFee;

  const proceedToPayment = () => {
    history.push("/process/payment");
  };

  return (
    <div className="confirmOrderPage">
      <h2>Confirm Your Order</h2>

      <div className="confirmSection">
        <h3>Shipping Info</h3>
        <p><strong>Name:</strong> {shippingInfo.name || "N/A"}</p>
        <p><strong>Phone:</strong> {shippingInfo.phone}</p>
        <p><strong>Email:</strong> {shippingInfo.email}</p>
        <p><strong>Address:</strong> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.district}, {shippingInfo.state}, {shippingInfo.country}</p>
      </div>

      <div className="confirmSection">
        <h3>Your Items</h3>
        {cartItems.map((item) => (
          <div className="confirmItem" key={item.product}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>₹ {item.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="orderSummaryBox">
        <h3>Order Summary</h3>
        <p>Subtotal: ₹ {subtotal.toLocaleString()}</p>
        <p>Shipping: ₹ {shippingFee}</p>
        <h4>Total: ₹ {total.toLocaleString()}</h4>
        <button onClick={proceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
