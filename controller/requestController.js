const { ObjectId } = require("mongodb");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Request = require('../model/requestModal')
const mongoose = require('mongoose');

module.exports = {
    addRequest: (req, res) => {
        const { firstAndLastName, email, phoneNumber, note } = req.body;
        const newRequest = new Request({
            _id: new mongoose.Types.ObjectId(),
            firstAndLastName,
            email,
            phoneNumber,
            note
        });
        newRequest.save().then(() => {
            res.status(200).json({
                message: 'Add new request'
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    },
    getAllRequests: async (req, res, next) => {
        Request.find().then((requests) => {
            res.status(200).json({
                requests
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    }
}

