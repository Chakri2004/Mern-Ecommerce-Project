const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const cloudinary = require("cloudinary");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { username, email, phone, password, avatar } = req.body;

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) return next(new ErrorHander("User already exists. Please login.", 400));

  let avatarData = { public_id: "", url: "" };
  if (avatar) {
    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });
    avatarData = { public_id: myCloud.public_id, url: myCloud.secure_url };
  }

  const user = await User.create({ username, email, phone, password, avatar: avatarData });
  sendToken(user, 201, res);
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) return next(new ErrorHander("Please enter Username/Email & Password", 400));

  const user = await User.findOne({
    $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }]
  }).select("+password");

  if (!user) return next(new ErrorHander("User not found. Please signup first.", 404));

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) return next(new ErrorHander("Invalid password", 401));

  sendToken(user, 200, res);
});

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
