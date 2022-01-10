const swaggerDocument = require("./swagger.json");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const router = require("./router/index");
const db = require("./models/index");
const mongodb = require("./models/mongo");
const express = require("express");
const app = express();

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users", router);

app.get("/", (req, res) => {
  let message =
    "This is my first Restfull API. To use the documentation, go to this address.";
  res.json({ message: message, address: "http://localhost:8000/api-doc" });
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});
