const express = require("express");
const router = express.Router();
const controller = require('../controller/lessonController')


router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.addLesson)
router.put("/:id", controller.updateLesson)
router.delete("/:id", controller.deleteLesson)

module.exports = router;
