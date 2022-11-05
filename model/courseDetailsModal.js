const mongoose = require('mongoose');

const courseDetailsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    arrStagesByCourse: { type: Array, require: true },
    currentCourseID: { type: String, require: true }
});

module.exports = mongoose.model('CourseDetails', courseDetailsSchema);