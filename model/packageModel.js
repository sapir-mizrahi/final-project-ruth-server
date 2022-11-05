const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    description: { type: String, require: true },
    imgSrc: { type: String, require: true },
    price: { type: Number, require: true },
    arrCourses: { type: Array , require: true },
});

module.exports = mongoose.model('Package', packageSchema);
