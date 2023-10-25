require("dotenv").config();
const mongoose = require("mongoose");
const mongodbURL = process.env.MONGO_URL;

mongoose
  .connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Atlas database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// mongoose.connect("mongodb://localhost/product_order");
// const db = mongoose.connection;

// db.on("error", console.error.bind("Error connecting to MongoDB"));

// db.once("open", function () {
//   console.log("Connected to Database :: MongoDB");
// });

// module.exports = db;
