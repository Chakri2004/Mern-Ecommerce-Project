import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Enter your name & email");

    try {
      await axios.post("/api/auth/signup/send-otp", { email });
      history.push({
        pathname: "/verify-signup",
        state: { name, email },
      });
    } catch (err) {
      alert(err.response?.data?.message || "Error sending OTP");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Create Aura Account</h1>
        <form onSubmit={handleSendOtp} className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
