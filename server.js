const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const db = require("./model");
const app = express();
require("dotenv").config();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || process.env.mongoDBConnectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

const htmlRoute = require("./route/htmlRoute");
const apiRoute = require("./route/apiRoute");

app.use(apiRoute);
app.use(htmlRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
