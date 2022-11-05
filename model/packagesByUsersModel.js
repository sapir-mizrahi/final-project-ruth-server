const mongoose = require('mongoose');

const packagesByUsersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    packageForBuy: { type: Object, require: true },
    userId: { type: String, require: true }
});

module.exports = mongoose.model('PackagesByUsers', packagesByUsersSchema);
