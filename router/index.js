// Controllers
const users = require("../controllers");

// Express Router
const router = require("express").Router();

// The database type must be specified by a {db} parameter
// Create new user
router.post("/create/:db", users.create);

// Find all users
router.get("/findall/:db", users.findAll);

// Find one user by ID
router.get("/find/:id/:db", users.findOne);

// Update user information
router.put("/update/:id/:db", users.update);

// Delete a user
router.delete("/delete/:id/:db", users.delete);

// Delete all users
router.delete("/deleteall/:db", users.deleteAll);

module.exports = router;
