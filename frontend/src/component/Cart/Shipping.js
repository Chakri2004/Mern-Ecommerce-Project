// src/component/Cart/Shipping.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Shipping.css";

const countryStateData = {
  India: [
    "Andhra Pradesh",
    "Telangana",
    "Tamil Nadu",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Delhi",
    "West Bengal",
    "Uttar Pradesh",
    "Punjab",
    "Rajasthan",
  ],
  USA: [
    "California",
    "Texas",
    "New York",
    "Florida",
    "Illinois",
    "Washington",
    "Ohio",
  ],
  UK: [
    "England",
    "Scotland",
    "Wales",
    "Northern Ireland",
  ],
};

const Shipping = () => {
  const history = useHistory();

  // 🛒 Get cart items from Redux
  const { cartItems } = useSelector((state) => state.cart);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = 300;
  const total = subtotal + shippingFee;

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "India",
    state: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("shippingInfo", JSON.stringify(form));
    history.push("/order/confirm");
  };

  return (
    <div className="checkoutContainer">
      {/* Left Side */}
      <div className="checkoutLeft">
        <h2>Shipping Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            name="address"
            placeholder="Street Address"
            value={form.address}
            onChange={handleChange}
            required
          />
          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />
          <input
            name="postalCode"
            placeholder="Postal Code"
            value={form.postalCode}
            onChange={handleChange}
            required
          />

          {/* Country Dropdown */}
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          >
            {Object.keys(countryStateData).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* State/District Dropdown */}
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          >
            <option value="">-- Select State/District --</option>
            {countryStateData[form.country]?.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button type="submit">Continue</button>
        </form>
      </div>

      {/* Right Side */}
      <div className="checkoutRight">
        <h3>Order Summary</h3>
        <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
        <p>Shipping: ₹{shippingFee}</p>
        <hr />
        <p>
          <b>Total: ₹{total.toLocaleString()}</b>
        </p>
      </div>
    </div>
  );
};

export default Shipping;
