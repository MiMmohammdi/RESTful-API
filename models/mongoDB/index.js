const dbConfig = require("../../config/db.config.js");
const mongoose = require("mongoose");
const user = require("./users.js");

// const mongoDB = {};
// mongoDB.mongoose = mongoose;
// mongoDB.url = dbConfig.URL;
// mongoDB.users = user(mongoose);

// Package the necessary tools to communicate with the database and export
module.exports = {
  mongoose: mongoose,
  url: dbConfig.URL,
  users: user(mongoose),
};
