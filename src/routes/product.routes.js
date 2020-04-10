const express = require("express");
const router = express.Router();
const { param, check, validationResult } = require("express-validator");

const product = require("../controllers/product.controller");

router.get("/available", (req, res) => {
  product.list(req, res);
});
router.get("/available/:id", [param("id").isNumeric(true)], (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
  product.find(req, res);
});

router.post(
  "/add",
  [check("user").isLength({ min: 5 }), param("id").isNumeric()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    product.save(req, res);
  }
);
router.put(
  "/update/:id",
  [check("user").isLength({ min: 5 }), param("id").isNumeric()],
  (req, res) => {
    product.update(req, res);
  }
);
router.delete("/delete/:id", (req, res) => {
  product.erase(req, res);
});

module.exports = router;
