// Tools
const swaggerDocument = require("../swagger.json");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");

// Models
const { mysqlDB, mongoDB } = require("./models");

// Express App
const express = require("express");
const app = express();

// Routers
const router = require("./router/index");

try {
  // mySQL Connection
  mysqlDB.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync Database.");
  });
} catch (error) {
  console.log("Dont drop and re-sync Database.");
}

// MongoDB Connection
mongoDB.mongoose
  .connect(mongoDB.url)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Cannot connecting :>> ", err);
    process.exit();
  });
// Body Parser config for JSON parse and URLencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start use Swagger for Documention
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Main Route and Setup another routers for mySQL database
app.use("/api/1.0/users/sql", router.mysqlRouter);

// Main Route and Setup another routers for MongoDB database
app.use("/api/1.0/users/nosql", router.mongodbRouter);

// Root address
app.get("/", (req, res) => {
  let message =
    "This is my first Restfull API. To use the documentation, go to this address.";
  res.json({ message: message, address: "http://localhost:8080/api-doc" });
});
console.log('proce :>> ', process.env);

module.exports = (port, host) => {
  // Listening on 8080 port LocalHost
  app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
};
