import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./SignInPage.css";

const SignInPage = ({ handleLogin }) => {
  const [step, setStep] = useState(1);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const history = useHistory();

  const handleCredentialsSubmit = (e) => {
    e.preventDefault();
    setStep(2); 
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      handleLogin(); 
      history.push("/"); 
    }
  };

  return (
    <div className="authContainer">
      <div className="authBox">
        <div className="logo">
          <h1 style={{ color: "#111", fontSize: "2.5rem" }}>AURA</h1>
        </div>
        <h2>Sign In to Aura</h2>

        {step === 1 ? (
          <form onSubmit={handleCredentialsSubmit}>
            <input
              type="text"
              placeholder="Username or Email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">
              Next <FiLogIn className="icon" />
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <p>Enter OTP sent to your registered mobile</p>
            <input
              type="text"
              placeholder="6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required
            />
            <button type="submit">
              Verify <FiLogIn className="icon" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
