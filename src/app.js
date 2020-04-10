const express = require("express");
const config = require("./config");
const app = express();

app.use(express.json());
const productRoutes = require("./routes/product.routes");
const homeRoutes = require("./routes/home.routes");

app.use(productRoutes);
app.use(homeRoutes);

app.listen(config.PORT, () => {
  console.log("server start: " + config.PORT);
});

module.exports = app;
