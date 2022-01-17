// Controllers
const { mysqlRegisterController } = require("../../controllers");

// Express Router
const router = require("express").Router();

// Sign up new user
router.post("/sign_up", mysqlRegisterController.signUp);

// Sign in users
router.post("/sign_in", mysqlRegisterController.signIn);

module.exports = router;
