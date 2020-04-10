const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("este es el index.....");
  res.send("index");
});

module.exports = router;
