const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const { sendOtp, verifyOtp } = require("../controllers/otpController");

const User = require("../models/userModel"); // Your User model

const otpStore = {}; // { userId: otp }

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Send OTP
router.post("/send-otp", async (req, res) => {
  const { identifier } = req.body; // identifier = email OR phone
  if (!identifier) return res.status(400).json({ message: "Email or Phone is required" });

  try {
    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[user._id] = otp; // store OTP against userId

    if (identifier.includes("@")) {
      // Send OTP to email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Aura OTP",
        text: `Your OTP is: ${otp}`,
      });
    } else {
      // Send OTP via SMS
      await twilioClient.messages.create({
        body: `Your OTP is: ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: user.phone,
      });
    }

    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending OTP" });
  }
});

// Verify OTP
router.post("/verify-otp", async (req, res) => {
  const { identifier, otp } = req.body;
  if (!identifier || !otp) return res.status(400).json({ message: "All fields required" });

  try {
    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    if (otpStore[user._id] && otpStore[user._id] === otp) {
      delete otpStore[user._id]; // OTP used
      // Here you can generate JWT or session for login
      return res.json({ message: "OTP verified", userId: user._id });
    } else {
      return res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error verifying OTP" });
  }
});

module.exports = router;
