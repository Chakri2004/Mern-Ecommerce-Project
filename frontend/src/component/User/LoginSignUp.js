import React, { Fragment, useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  const history = useHistory();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          setAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/otp/send-otp", { email });
      history.push({ pathname: "/verify-signup", state: { name, email, password, avatar } });
    } catch (err) {
      alert(err.response?.data?.message || "Error sending OTP");
    }
  };

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    } else {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");
      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div className="login_signUp_toggle">
            <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
            <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
          </div>
          <button ref={switcherTab}></button>

          {/* Login Form */}
          <form className="loginForm" ref={loginTab}>
            <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            <input type="submit" value="Login" className="loginBtn" />
          </form>

          {/* Register Form */}
          <form className="signUpForm" ref={registerTab} encType="multipart/form-data" onSubmit={registerSubmit}>
            <input type="text" placeholder="Name" name="name" value={name} onChange={registerDataChange} required />
            <input type="email" placeholder="Email" name="email" value={email} onChange={registerDataChange} required />
            <input type="password" placeholder="Password" name="password" value={password} onChange={registerDataChange} required />
            <input type="file" name="avatar" accept="image/*" onChange={registerDataChange} />
            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignUp;
