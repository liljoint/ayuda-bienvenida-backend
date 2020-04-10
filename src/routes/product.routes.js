const express = require("express");
const app = express();

var router = express.Router();
const { check, validationResult } = require("express-validator");

const customMiddleware = require("../middlewares/customMiddleware");
const product = require("../controllers/product.controller");

app.use(customMiddleware);

app.get("/api/products/available", (req, res) => {
  product.list(req, res);
});
app.get("/api/products/available/:id", (req, res) => {
  product.find(req, res);
});

app.post(
  "/api/products/add",
  [check("user").isLength({ min: 5 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    product.save(req, res);
  }
);
app.put(
  "/api/products/update/:id",
  [check("user").isLength({ min: 5 })],
  (req, res) => {
    product.update(req, res);
  }
);
app.delete("/api/products/delete/:id", (req, res) => {
  product.erase(req, res);
});

module.exports = app;
