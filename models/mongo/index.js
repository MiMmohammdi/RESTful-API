const dbConfig = require("../../config/db.config.js");
const mongoose = require("mongoose");
const user = require("./users.js");


const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URL;
db.users = user(mongoose);

module.exports = db;
