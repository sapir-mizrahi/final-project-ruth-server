const express = require("express");
const router = express.Router();
const controller = require('../controller/packageController')


router.get("/", controller.getAllPackages)
// router.get("/:id", controller.getById)
router.post("/", controller.createNewPackage)
// router.put("/:id", controller.updateLesson)
router.delete("/:packageId", controller.deletePackage)

module.exports = router;