// Controllers
const { mongodbUsersController } = require("../../controllers");

// Auth middleware
const authChecker = require("../../middlewares/authChecker");

// Express Router
const router = require("express").Router();

router.use(authChecker);

// Create new user
router.post("/create", mongodbUsersController.create);

// Find all users
router.get("/find_all", mongodbUsersController.findAll);

// Find one user by ID
router.get("/find/:id", mongodbUsersController.findOne);

// Update user information
router.put("/update/:id", mongodbUsersController.update);

// Delete a user
router.delete("/delete/:id", mongodbUsersController.deleteUser);

// Delete all users
router.delete("/delete_all", mongodbUsersController.deleteAll);

module.exports = router;
