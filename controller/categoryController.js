const { ObjectId } = require("mongodb");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Category = require('../model/cateoryModel')
const mongoose = require('mongoose');

module.exports = {
    addCategory: (req, res) => {
        const { name, courseId } = req.body;
        const newCategory = new Category({
            _id: new mongoose.Types.ObjectId(),
            name,
            courseId
        });
        newCategory.save().then(() => {
            res.status(200).json({
                message: 'Add new category'
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    },

    getAllCategories: async (req, res, next) => {
        Category.find().then((categories) => {
            res.status(200).json({
                categories
            })
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
    },

    getCategory: async (req, res, next) => {
        const id = req.params.id
        try {
            let currentCategory = await CategorySchema.findOne({ _id: ObjectId(id) })
            // .populate({ path: 'orders', select: 'orderdate orderSum products' });
            res.send(currentCategory);
        }
        catch (err) {
            next(err);
        }
    },

    updateCategory: async (req, res, next) => {
        if (req.body) {
            const id = req.params.id
            try {
                const { categoryName } = req.body;
                const data = {
                    categoryName
                }
                let updateCategory = await categoryModel.findByIdAndUpdate(id, data, {
                    new: true
                });
                res.send(updateCategory);
            }
            catch (err) {
                next(err);
            }
        }
    },
    deleteCategory: async (req, res, next) => {

        const id = req.params.id
        try {

            let deletedCategory = await categoryModel.findByIdAndRemove(ObjectId(id));
            res.send(deletedCategory);
        }
        catch (err) {
            next(err);
        }
    }
}
