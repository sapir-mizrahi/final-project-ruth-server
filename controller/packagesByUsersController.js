const { ObjectId } = require("mongodb");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const PackagesByUsers = require('../model/packagesByUsersModel')
const mongoose = require('mongoose');

module.exports = {
    addPackageByUsers: (req, res) => {
        const { packageForBuy, userId } = req.body;
        const newPackage = new PackagesByUsers({
            _id: new mongoose.Types.ObjectId(),
            userId,
            packageForBuy
        });
        newPackage.save().then(() => {
            res.status(200).json({
                message: 'Add new Package by user'
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    },

    getPackagesByUser: async (req, res, next) => {
        let userId = req.params.userId;
        PackagesByUsers.find({ userId: userId }).then((packages) => {
            console.log('~~~~~~~~~~~~~~~~~~~');
            res.status(200).json({
                packages
            })
        }).catch(err => {
            console.log('~!~',err);
            res.status(500).json({
                err
            })
        });
    },
    getAllPackagesByUser: async (req, res, next) => {
        PackagesByUsers.find().then((packages) => {
            res.status(200).json({
                packages
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    }
}
