const mongodbRegisterController = require("./mongodbControllers/register");
const mysqlRegisterController = require("./mysqlControllers/register");
const mongodbUsersController = require("./mongodbControllers/users");
const mysqlUsersController = require("./mysqlControllers/users");

module.exports = {
  mysqlUsersController,
  mongodbUsersController,
  mongodbRegisterController,
  mysqlRegisterController,
};
