const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("./models/userModel"); // adjust path if needed

// Load config
dotenv.config({ path: "backend/config/config.env" });

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Admin user data
const adminData = {
  name: "Admin User",
  email: "admin@example.com",
  password: "admin123", // your new password
  role: "admin",
};

// Create admin user
const createAdmin = async () => {
  try {
    const userExist = await User.findOne({ email: adminData.email });
    if (userExist) {
      console.log("Admin already exists, updating password...");
      userExist.password = await bcrypt.hash(adminData.password, 10);
      await userExist.save();
      console.log("Admin password updated!");
    } else {
      const user = await User.create({
        ...adminData,
        password: await bcrypt.hash(adminData.password, 10),
      });
      console.log("Admin user created!");
    }
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
