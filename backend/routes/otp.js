const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");
const otpStore = {}; // { email: { otp, expires } }

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

router.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const otp = generateOtp();
    otpStore[email] = { otp, expires: Date.now() + 5 * 60 * 1000 };

    await sendEmail({
      email,
      subject: "Aura OTP Verification",
      message: `Your OTP is: ${otp}. Valid for 5 minutes.`,
    });

    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ message: "Email and OTP required" });

  const record = otpStore[email];
  if (!record) return res.status(400).json({ message: "No OTP sent to this email" });
  if (record.expires < Date.now()) return res.status(400).json({ message: "OTP expired" });
  if (record.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

  delete otpStore[email];
  res.json({ message: "OTP verified successfully" });
});

module.exports = router;
