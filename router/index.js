const users = require("../controllers");

const router = require("express").Router();

router.post("/create/:db", users.create);

router.get("/findall/:db", users.findAll);

router.get("/find/:id/:db", users.findOne);

router.put("/update/:id/:db", users.update);

router.delete("/delete/:id/:db", users.delete);

router.delete("/deleteall/:db", users.deleteAll);

module.exports = router;
