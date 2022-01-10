module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DATABASE: "crud_api",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  URL: "mongodb://localhost:27017/crud_api"
};
