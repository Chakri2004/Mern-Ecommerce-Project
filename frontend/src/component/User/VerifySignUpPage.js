import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

const VerifySignUpPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { name, email, password, avatar } = location.state || {};

  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleResendOtp = async () => {
    await axios.post("/api/otp/send-otp", { email });
    setResendTimer(30);
    alert("OTP resent!");
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/otp/verify-otp", { email, otp });
      const formData = new FormData();
      formData.set("name", name);
      formData.set("email", email);
      formData.set("password", password);
      formData.set("avatar", avatar);

      await axios.post("/api/auth/register", formData);
      alert("Account created successfully!");
      history.push("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div>
      <h2>Verify Your Account</h2>
      <p>OTP sent to {email}</p>
      <form onSubmit={handleVerify}>
        <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
        <p>
          Resend in {resendTimer}s {resendTimer === 0 && <span onClick={handleResendOtp}>Resend</span>}
        </p>
        <button type="submit">Verify & Create Account</button>
      </form>
    </div>
  );
};

export default VerifySignUpPage;
