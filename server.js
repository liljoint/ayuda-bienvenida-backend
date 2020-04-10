const config = require("./src/config");
const app = require("./src/app");

app.listen(config.PORT, () => {
    console.log("server start: " + config.PORT);
  });