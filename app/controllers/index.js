const mysqlController = require("./mysqlControllers");
const mongodbController = require("./mongodbControllers");
const mongodbTokenController = require("./mongodbControllers/tokenController");
const mysqlTokenController = require("./mysqlControllers/tokenController");

module.exports = {
  mysqlController,
  mongodbController,
  mongodbTokenController,
  mysqlTokenController,
};
