const express = require("express");
const app = express();

const routes = require("./routes");
const middlewares = require("./middlewares");

app.use(express.json());
app.use(middlewares);
app.use(routes);

app.use(function(req, res, next){
  res.status(404).send("La ruta indicada no existe");
  next();
});

module.exports = app;
