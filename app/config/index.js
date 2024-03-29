const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, `../../.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  port: process.env.DB_PORT,

  // Database type
  dialect: process.env.DB_TYPE,

  // Pooling configuration for better connection
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  // MongoDB Configuration
  URL: process.env.DB_APP_URL,

  // Redis config
  redisPort: process.env.REDIS_PORT,
  redisHost: process.env.REDIS_HOST,
};
