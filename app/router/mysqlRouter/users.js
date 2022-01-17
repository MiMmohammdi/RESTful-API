// Controllers
const { mysqlUsersController } = require("../../controllers");

// Auth middleware
const authChecker = require("../../middlewares/authChecker");
const cacheHandler = require("../../middlewares/cacheHandler");

// Express Router
const router = require("express").Router();

// Check jwt token
router.use(authChecker);

// Create new user
router.post("/create", mysqlUsersController.create);

// Find all users
router.get("/find_all", mysqlUsersController.findAll);

// Find one user by ID
router.get("/find/:id",cacheHandler, mysqlUsersController.findOne);

// Update user information
router.put("/update/:id", mysqlUsersController.update);

// Delete a user
router.delete("/delete/:id", mysqlUsersController.deleteUser);

// Delete all users
router.delete("/delete_all", mysqlUsersController.deleteAll);

module.exports = router;
