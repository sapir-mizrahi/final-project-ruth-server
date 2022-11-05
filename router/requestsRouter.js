const express = require("express");
const router = express.Router();

const {
    addRequest, getAllRequests
} = require("../controller/requestController")

router.get("/", getAllRequests)
// router.get("/:id", getCategory)
router.post("/", addRequest)
// router.patch("/:id", updateCategory)
// router.delete("/:id", deleteCategory)

module.exports = router;