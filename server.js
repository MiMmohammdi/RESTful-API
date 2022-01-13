const launcher = require("./app");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

launcher(process.env.APP_PORT, process.env.APP_HOST);
