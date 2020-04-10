
const customMiddleware = (req, res, next) => {
  console.log(req.body);
  console.log("method: " + req.method);
  next();
};

module.exports = customMiddleware;
