module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  // MySQL Configuration
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE_NAME || "CRUD",
  port: process.env.DB_PORT || "3306",

  // Database type
  dialect: process.env.DB_TYPE || "mysql",

  // Pooling configuration for better connection
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  // MongoDB Configuration
  URL: process.env.DB_APP_URL || "mongodb://localhost:27017/CRUD",

  // Redis config
  redisPort: process.env.REDIS_PORT || 6379,
  redisHost: process.env.REDIS_HOST || "127.0.0.1",
};
