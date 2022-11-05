const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstAndLastName: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    note: { type: String, require: true }
});

module.exports = mongoose.model('Request', requestSchema);
