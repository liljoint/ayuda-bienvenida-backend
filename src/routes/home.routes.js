const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("este es el index.....");
  res.send("index");
});

module.exports = app;
