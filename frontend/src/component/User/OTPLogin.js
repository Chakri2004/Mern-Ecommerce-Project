import React, { useState } from "react";
import axios from "axios";

const OTPLogin = ({ handleLogin }) => {
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    try {
      await axios.post("/api/otp/send-otp", { identifier });
      setStep(2);
      alert("OTP sent successfully!");
    } catch (err) {
      alert(err.response.data.message || "Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("/api/otp/verify-otp", { identifier, otp });
      console.log("UserId:", res.data.userId);
      handleLogin();
      alert("OTP verified! Logged in.");
    } catch (err) {
      alert(err.response.data.message || "Invalid OTP");
    }
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <input
            type="text"
            placeholder="Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default OTPLogin;
