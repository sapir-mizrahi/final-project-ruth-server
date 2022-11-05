const express = require("express");
const router = express.Router();

const {
    getAllCourses, getCourseByCategoryName, addCourse, 
    updateCourse, deleteCourse, saveDetailsCourse,
    getDetailsByCourseID
} = require("../controller/courseController")

router.get("/", getAllCourses)
router.get("/name", getCourseByCategoryName)
router.get("/getDetailsByCourseID/:courseID", getDetailsByCourseID)
router.post("/", addCourse)
router.post("/details", saveDetailsCourse)
router.put("/:id", updateCourse)
router.delete("/:id", deleteCourse)

module.exports = router;
