// Database config
const dbConfig = require("../../config/db.config.js");
// Sequlize ORM
const Sequelize = require("sequelize");
// User model
const user = require("./users");

// Config sequlize for connection
const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

// Connection stability test
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.users = require("./users")(sequelize, Sequelize);

// Package the necessary tools to communicate with the database and export
module.exports = { Sequelize, sequelize, users: user(sequelize, Sequelize) };
