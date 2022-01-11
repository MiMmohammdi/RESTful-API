module.exports = {
  // MySQL Configuration
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DATABASE: "CRUD",
  PORT: "3306",

  // Database type
  dialect: "mysql",

  // Pooling configuration for better connection
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  // MongoDB Configuration
  URL: "mongodb://localhost:27017/CRUD",
};
