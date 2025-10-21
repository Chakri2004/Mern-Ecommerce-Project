const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "backend/config/config.env" });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const otpRoutes = require("./routes/otp");
const authRoutes = require("./routes/auth");
app.use("/api/otp", otpRoutes);
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.DB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/build/index.html")));

module.exports = app;
