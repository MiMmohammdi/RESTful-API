// Database config
const dbConfig = require("../../config");
const mysql = require("mysql2/promise");

// Sequlize ORM
const Sequelize = require("sequelize");
// User model
const user = require("./users");

const db = {};

initDataBase();

async function initDataBase() {
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

   
    // Config sequlize for connection
    const sequelize = await new Sequelize(
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
    await sequelize.sync({ alter: true });

    // Connection stability test
    sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });

    db.user = user(sequelize, Sequelize);
    db.sequelize = sequelize;
  } catch (error) {
    console.log("error :>> ", error);
  }
}

// Package the necessary tools to communicate with the database and export
module.exports = { Sequelize, sequelize: db.sequelize, users: db.user };
