const mongodbRegisterRouter = require("./mongodbRouter/register");
const mysqlRegisterRouter = require("./mysqlRouter/register");
const mongodbUsersRouter = require("./mongodbRouter/users");
const mysqlUsersRouter = require("./mysqlRouter/users");

module.exports = {
  mongodbRegisterRouter,
  mysqlRegisterRouter,
  mysqlUsersRouter,
  mongodbUsersRouter,
};
