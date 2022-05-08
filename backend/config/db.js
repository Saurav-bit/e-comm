require("dotenv").config();
const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017';

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    console.log(error)
    // console.log(process.env.MONGO_URI)
    process.exit(1);
  }
};

module.exports = connectDB;
