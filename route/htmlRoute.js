const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/execise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/execise.html"));
});

module.exports = router;
