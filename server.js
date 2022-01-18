const launcher = require("./app");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

launcher(process.env.APP_PORT, process.env.APP_HOST);
