const express = require("express");
const router = express.Router();
const controller = require("../controller/stageController")


router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.addStage)
router.put("/:id", controller.updateStage)
router.delete("/:id", controller.deleteStage)


module.exports = router;