const express = require("express");
const router = express.Router();

const {
    addPackageByUsers,getPackagesByUser, getAllPackagesByUser
} = require("../controller/packagesByUsersController")

router.get("/", getAllPackagesByUser)
router.get("/:userId", getPackagesByUser)
router.post("/", addPackageByUsers)
// router.patch("/:id", updateCategory)
// router.delete("/:id", deleteCategory)

module.exports = router;