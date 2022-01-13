// Tools
const swaggerDocument = require("../swagger.json");
const swaggerUi = require("swagger-ui-express");

// Models
const { mysqlDB, mongoDB } = require("./models");

// Express App
const express = require("express");
const app = express();

// Middlewares
require("./middlewares")(app);

// Routers
const router = require("./router/index");

try {
  // mySQL Connection
  mysqlDB.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync mySQL Database.");
  });
} catch (error) {
  console.log("Dont drop and re-sync mySQL Database.");
}

// MongoDB Connection
mongoDB.mongoose
  .connect(mongoDB.url)
  .then(() => {
    console.log("Connected to the MongoDB database");
  })
  .catch((err) => {
    console.log("Cannot connecting MongoDB :>> ", err);
    process.exit();
  });

// Start use Swagger for Documention
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Main Route and Setup another routers for mySQL database
app.use("/api/v1/users/sql", router.mysqlRouter);

// Main Route and Setup another routers for MongoDB database
app.use("/api/v1/users/nosql", router.mongodbRouter);

// Root address
app.get("/", (req, res) => {
  let message =
    "This is my first Restfull API. To use the documentation, go to this address.";
  res.json({ message: message, address: "http://localhost:8080/api-doc" });
});

// Error handler and non route page handler
require("./middlewares/404page")(app);
require("./middlewares/errorHandler")(app);

module.exports = (port, host) => {
  // Listening on 8080 port LocalHost
  app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
};
