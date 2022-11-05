const { ObjectId } = require("mongodb");
const db = require("../db/mongoose")
const lessonModel = require('../model/lessonModel')

module.exports.getAll = async function (req, res, next) {


    try {
        let lessons = await lessonModel.find()
        res.send(lessons);
    }
    catch (err) {
        next(err);
    }
}

module.exports.getById = async function (req, res, next) {
    const id = req.params.id
    try {
        let currentStage = await lessonModel.findOne({id})
        // .populate({ path: 'orders', select: 'orderdate orderSum products' });
        res.send(currentStage);
    }
    catch (err) {
        next(err);
    }
}


module.exports.getlessonCourses = async function (req, res, next) {
    const id = req.params.id
    try {
        let currentlesson = await lessonModel.findOne({ _id: ObjectId(id) });
        res.send(currentlesson);
    }
    catch (err) {
        next(err);
    }
}


module.exports.addLesson = async function (req, res, next) {
    if (req.body) {
        try {
            const { name, lessonNumber, stageId } = req.body;
            const data = new lessonModel({
                name,
                lessonNumber,
                stageId
            })

            const insertedLesson = await data.save();
            res.send(insertedLesson);
        }
        catch (err) {
            next(err);
        }
    }
}

module.exports.updateLesson = async function (req, res, next) {
    if (req.body) {
        const id = req.params.id
        try {
            const { name, lessonNumber, stageId } = req.body;
            const data = {
                name,
                lessonNumber,
           
                stageId
            }
            let updateLesson = await lessonModel.findByIdAndUpdate(id, data, {
                new: true
            });
            res.send(updateLesson);
        }
        catch (err) {
            next(err);
        }
    }
}
module.exports.deleteLesson = async function (req, res, next) {

    const id = req.params.id
    try {

        let deletedLesson = await lessonModel.findByIdAndRemove(ObjectId(id));
        res.send(deletedLesson);
    }
    catch (err) {
        next(err);
    }

}

