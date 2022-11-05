
const { ObjectId } = require("mongodb");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Course = require('../model/courseModel')
const CourseDetails = require('../model/courseDetailsModal')
const mongoose = require('mongoose');

module.exports = {
    addCourse: async (req, res, next) => {
        if (req.body) {
            const { name, description, categoryName } = req.body;
            const newCourse = new Course({
                _id: new mongoose.Types.ObjectId(),
                name,
                description,
                categoryName
            });
            newCourse.save().then((course) => {
                res.status(200).json({
                    message: 'Add new course',
                    data: course
                })
            }).catch(err => {
                res.status(500).json({
                    err
                })
            });
        }
    },
    saveDetailsCourse: async (req, res, next) => {
        if (req.body) {
            console.log("~~~~~~~~~~~~~~~~~~~~~~~", req.body.arrLessonsByStage);
            const { arrStagesByCourse, currentCourseID } = req.body;
            const newCourseDetails = new CourseDetails({
                _id: new mongoose.Types.ObjectId(),
                arrStagesByCourse,
                currentCourseID
            });
            newCourseDetails.save().then((courseDetails) => {
                res.status(200).json({
                    message: 'Add new course details',
                    data: courseDetails
                })
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    err
                })
            });
        }
    },
    getDetailsByCourseID: async (req, res, next) => {
        const { courseID } = req.params;
        CourseDetails.findOne({ currentCourseID: courseID }).then((courseDetails) => {
            res.status(200).json({
                courseDetails
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    },
    getAllCourses: async (req, res, next) => {
        Course.find().then((courses) => {
            res.status(200).json({
                courses
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    },
    getCourseByCategoryName: async (req, res, next) => {
        const name = req.params.name;
        try {
            let id = await categoryModel.findOne({ categoryName: name });
            let courses = await courseModel.find({ categoryId: id });
            // .populate({ path: 'orders', select: 'orderdate orderSum products' });
            res.send(courses);
        }
        catch (err) {
            next(err);
        }
    },

    updateCourse: async (req, res, next) => {
        if (req.body) {
            const id = req.params.id
            try {
                const { name, categoryId, lessonId, userId } = req.body;
                const data = {
                    name,
                    categoryId,
                    lessonId,
                    userId
                }
                let updateCourse = await courseModel.findByIdAndUpdate(id, data, {
                    new: true
                });
                res.send(updateCourse);
            }
            catch (err) {
                next(err);
            }
        }
    },
    deleteCourse: async (req, res, next) => {
        const id = req.params.id
        try {

            let deletedCourse = await courseModel.findByIdAndRemove(ObjectId(id));
            res.send(deletedCourse);
        }
        catch (err) {
            next(err);
        }
    }
}