module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  // MySQL Configuration
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.DB_PASSWORD || "",
  DATABASE: process.env.DB_DATABASE_NAME || "CRUD",
  PORT: process.env.DB_PORT || "3306",

  // Database type
  dialect: process.env.DB_TYPE || 'mysql',

  // Pooling configuration for better connection
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  // MongoDB Configuration
  URL: process.env.DB_APP_URL || "mongodb://localhost:27017/CRUD",
};
