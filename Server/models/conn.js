const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGODB_CONNECTION_STRING;

if (url) {
  mongoose.connect(url, () => {
    console.log("connected to DB");
  });
} else {
  console.log("No MongoDB connection string provided. Skipping DB connection.");
}

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

module.exports = { db, mongoose };