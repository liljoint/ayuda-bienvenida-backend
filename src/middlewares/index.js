
const morgan = require("morgan");
const customMiddleware = require("./customMiddleware");

const morganMiddleware = morgan("tiny");

module.exports = [customMiddleware, morganMiddleware];