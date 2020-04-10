const customMiddleware = (req, res, next) => {
  console.log("body:");
  console.log(req.body);
  next();
};

module.exports = customMiddleware;
