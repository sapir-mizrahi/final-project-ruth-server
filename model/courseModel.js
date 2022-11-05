const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    description: { type: String, require: true },
    categoryName: { type: String, require: true }
});

module.exports = mongoose.model('Course', courseSchema);