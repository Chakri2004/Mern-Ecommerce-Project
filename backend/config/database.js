const mongoose = require("mongoose");

const connectDatabase = () => {
  if (!process.env.DB_URI) {
    console.error("DB_URI is not defined in .env");
    process.exit(1);
  }
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
};

module.exports = connectDatabase;
