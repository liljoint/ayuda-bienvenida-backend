const express = require("express");
const home = require("./home.routes");
const product = require("./product.routes");

const router = express.Router();

router.use("/api/products", product);
router.use("/", home);


module.exports = router;