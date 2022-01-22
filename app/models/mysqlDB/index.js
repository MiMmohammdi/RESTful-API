// Database config
const dbConfig = require("../../config");
const mysql = require("mysql2/promise");

// Sequlize ORM
const Sequelize = require("sequelize");
// User model
const user = require("./users");


async () => {
  try {
    // Create db if it doesn't already exist
    const connection = await mysql.createConnection({
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.username,
      password: dbConfig.password,
    });
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\`;`
    );
 
  } catch (error) {
    console.log("error :>> ", error);
  }
};

// Config sequlize for connection
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: dbConfig.dialect,

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

// Package the necessary tools to communicate with the database and export
module.exports = { Sequelize, sequelize, users: user(sequelize, Sequelize)}
