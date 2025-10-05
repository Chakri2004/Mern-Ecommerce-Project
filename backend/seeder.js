const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const bcrypt = require("bcryptjs"); // <-- add this
const Product = require("./models/productModel");
const User = require("./models/userModel");

dotenv.config({ path: __dirname + "/config/config.env" });
console.log("DB_URI =", process.env.DB_URI);

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"));

const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`, "utf-8"));
const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`, "utf-8"));

// Hash passwords
const usersWithHashedPasswords = users.map(user => ({
  ...user,
  password: bcrypt.hashSync(user.password, 10)
}));

const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const insertedUsers = await User.insertMany(usersWithHashedPasswords);
    const adminUser = insertedUsers[0]._id;

    const productsWithUser = products.map(product => ({
      ...product,
      user: adminUser
    }));

    await Product.insertMany(productsWithUser);

    console.log("Data Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedData();
