const { ObjectId } = require("mongodb");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Package = require('../model/packageModel')
const mongoose = require('mongoose');

module.exports = {
    createNewPackage: (req, res) => {
        const { name, description, imgSrc, price, arrCourses } = req.body;
        const newPackage = new Package({
            _id: new mongoose.Types.ObjectId(),
            name,
            description,
            imgSrc,
            price,
            arrCourses
        });
        newPackage.save().then(() => {
            res.status(200).json({
                message: 'Add new package'
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    },
     
     getAllPackages: async (req, res, next) => {
        Package.find().then((packages) => {
            res.status(200).json({
                packages
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    },

    deletePackage: async (req, res, next) => {
        const packageId = req.params.packageId
        Package.findByIdAndRemove(packageId).then((packages) => {
            res.status(200).json({
                packages
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    },
}