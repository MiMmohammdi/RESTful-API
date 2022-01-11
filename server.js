// Tools
const swaggerDocument = require("./swagger.json");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");

// Models
const mongodb = require("./models").mongoDB;
const db = require("./models").mysqlDB;

// Express App
const express = require("express");
const app = express();

// Routers
const router = require("./router/index");

// mySQL Connection
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// MongoDB Connection
mongodb.mongoose
  .connect(mongodb.url)
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

// Main Route and Setup another routers
app.use("/api/users", router);

// Root address
app.get("/", (req, res) => {
  let message =
    "This is my first Restfull API. To use the documentation, go to this address.";
  res.json({ message: message, address: "http://localhost:8080/api-doc" });
});

// Listening on 8080 port LocalHost
app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});
