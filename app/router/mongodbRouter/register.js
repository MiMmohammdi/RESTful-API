// Controllers
const { mongodbRegisterController } = require("../../controllers");

// Express Router
const router = require("express").Router();

// Sign up new user
router.post("/sign_up", mongodbRegisterController.signUp);

// Sign in users
router.post("/sign_in", mongodbRegisterController.signIn);

module.exports = router;
