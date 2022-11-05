const express = require("express");
const router = express.Router();
const controller = require("../controller/userController")


router.get("/:email/:password", controller.loginUser)
router.get("/", controller.getAllUsers)
router.post("/", controller.addUser)
router.put("/:id", controller.updateUser)
router.delete("/:id", controller.deleteUser)

module.exports = router;
