import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { FaPlane, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import "./ModernAuth.css";

const ModernAuth = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();
  const location = useLocation();

  const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  const [activeTab, setActiveTab] = useState("signin");
  const [showError, setShowError] = useState(false);

  // Sign In Form
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // Sign Up Form
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  // Handle Sign In
  const handleSignIn = (e) => {
    e.preventDefault();
    setShowError(false);
    dispatch(login(signInData.email, signInData.password));
  };

  // Handle Sign Up
  const handleSignUp = (e) => {
    e.preventDefault();
    setShowError(false);

    const formData = new FormData();
    formData.set("name", signUpData.fullName);
    formData.set("email", signUpData.email);
    formData.set("password", signUpData.password);
    
    if (avatar) {
      formData.set("avatar", avatar);
    } else {
      // Use default avatar
      formData.set("avatar", "/Profile.png");
    }

    dispatch(register(formData));
  };

  // Handle input changes for Sign In
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData(prev => ({ ...prev, [name]: value }));
    if (showError) setShowError(false);
  };

  // Handle input changes for Sign Up
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({ ...prev, [name]: value }));
    if (showError) setShowError(false);
  };

  // Handle avatar change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (error) {
      setShowError(true);
      alert.error(error);
      setTimeout(() => {
        setShowError(false);
        dispatch(clearErrors());
      }, 5000);
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

  if (loading) {
    return (
      <div className="modern-auth-container">
        <div className="modern-auth-box">
          <div className="loading-spinner">
            <FaPlane className="loading-icon" />
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modern-auth-container">
      <div className="modern-auth-box">
        {/* Logo and Title */}
        <div className="auth-header">
          <div className="auth-logo">
            <FaPlane />
          </div>
          <h1 className="auth-title">AURA Store</h1>
          <p className="auth-subtitle">Your next shopping adventure awaits</p>
        </div>

        {/* Tab Navigation */}
        <div className="auth-tabs">
          <button
            className={`tab-button ${activeTab === "signin" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`tab-button ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Error Message */}
        {showError && error && (
          <div className="modern-error-message">
            <span className="error-title">Error</span>
            <p className="error-text">{error}</p>
          </div>
        )}

        {/* Sign In Form */}
        {activeTab === "signin" && (
          <form onSubmit={handleSignIn} className="auth-form">
            <div className="form-group">
              <label htmlFor="signin-email">Email</label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="signin-email"
                  name="email"
                  placeholder="your.email@university.edu"
                  value={signInData.email}
                  onChange={handleSignInChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="signin-password">Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="signin-password"
                  name="password"
                  placeholder="Enter your password"
                  value={signInData.password}
                  onChange={handleSignInChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              Sign In
            </button>
          </form>
        )}

        {/* Sign Up Form */}
        {activeTab === "signup" && (
          <form onSubmit={handleSignUp} className="auth-form">
            <div className="form-group">
              <label htmlFor="signup-name">Full Name</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="signup-name"
                  name="fullName"
                  placeholder="John Doe"
                  value={signUpData.fullName}
                  onChange={handleSignUpChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  placeholder="your.email@university.edu"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  placeholder="Create a strong password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="avatar">Profile Picture (Optional)</label>
              <div className="avatar-upload">
                {avatarPreview && (
                  <img src={avatarPreview} alt="Avatar Preview" className="avatar-preview" />
                )}
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="avatar-input"
                />
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModernAuth;