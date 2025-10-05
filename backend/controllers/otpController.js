// backend/controllers/otpController.js
const sendOtp = async (req, res) => {
  const { contact } = req.body; // email or phone
  // generate random OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log(`OTP for ${contact}: ${otp}`);
  
  // TODO: send via email or SMS
  res.json({ message: `OTP sent to ${contact}` });
};

const verifyOtp = async (req, res) => {
  const { contact, otp } = req.body;
  // TODO: verify OTP logic
  res.json({ message: "OTP verified successfully" });
};

module.exports = { sendOtp, verifyOtp };
