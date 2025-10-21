const sendOtp = async (req, res) => {
  const { contact } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log(`OTP for ${contact}: ${otp}`);
  
  res.json({ message: `OTP sent to ${contact}` });
};

const verifyOtp = async (req, res) => {
  const { contact, otp } = req.body;
  res.json({ message: "OTP verified successfully" });
};

module.exports = { sendOtp, verifyOtp };
