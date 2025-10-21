const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    user = new User({ name, email, password });
    await user.save();

    const token = user.getJWTToken();
    res.status(201).json({ success: true, token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email & password required" });

  const user = await User.findOne({ email }).select("+password");
  if (!user) return res.status(401).json({ message: "Invalid Email or Password" });

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) return res.status(401).json({ message: "Invalid Email or Password" });

  const token = user.getJWTToken();
  res.status(200).json({ success: true, token, user });
});

module.exports = router;
