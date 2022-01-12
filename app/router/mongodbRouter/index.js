// Controllers
const users = require("../../controllers").mongodbController;
const { mysqlTokenController } = require("../../controllers");

// Auth middleware
const authChecker = require("../../middlewares/authChecker");

// Express Router
const router = require("express").Router();

// router.use(authChecker);

// for login and get jwt token
// router.post("/token", mysqlTokenController);

// Create new user
router.post("/create", users.create);

// Find all users
router.get("/findall", users.findAll);

// Find one user by ID
router.get("/find/:id", users.findOne);

// Update user information
router.put("/update/:id", users.update);

// Delete a user
router.delete("/delete/:id", users.deleteUser);

// Delete all users
router.delete("/deleteall", users.deleteAll);

module.exports = router;
