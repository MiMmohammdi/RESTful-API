const dbConfig = require("../../config");
const mongoose = require("mongoose");
const user = require("./users.js");

// Package the necessary tools to communicate with the database and export
module.exports = {
  mongoose: mongoose,
  url: dbConfig.URL,
  users: user(mongoose),
};
