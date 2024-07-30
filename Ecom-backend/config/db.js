const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const link = process.env.DATABASEURL;
    const conn = await mongoose.connect(link);
    console.log(`Database connected successfully ${conn.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
