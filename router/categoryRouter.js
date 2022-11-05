const express = require("express");
const router = express.Router();

const {
    getAllCategories, getCategory, addCategory, updateCategory, deleteCategory
} = require("../controller/categoryController")

router.get("/", getAllCategories)
router.get("/:id", getCategory)
router.post("/", addCategory)
router.patch("/:id", updateCategory)
router.delete("/:id", deleteCategory)

module.exports = router;