const { corsService } = require("../services");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = (app) => {
  // CORS
  app.use(cors(corsService));

  // Body Parser config for JSON parse and URLencoded
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

};
