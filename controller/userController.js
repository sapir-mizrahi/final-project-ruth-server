const { ObjectId } = require("mongodb");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
// const db = require("../db/mongoose")
const userModel = require('../model/userModel')

module.exports.loginUser = async function (req, res, next) {
    if (req.params.email && req.params.password) {
        const email = req.params.email
        const password = req.params.password

        userModel.findOne({ email, password })
            .then((currentUser) => {
                console.log('user already exist');
                res.status(200).json({
                    data: currentUser
                })
            }).catch(err => {
                console.log('user already exist-----------------');
                res.status(500).json({
                    message: err.message
                })
            });
    }
    
}
module.exports.getAllUsers = async function (req, res, next) {
    userModel.find().then((users) => {
        res.status(200).json({
            users
        })
    }).catch(err => {
        res.status(500).json({
            err
        })
    });

}

module.exports.addUser = async function (req, res, next) {
    if (req.body) {
        const { firstName, lastName, email, password, birthDate } = req.body;
        userModel.findOne({ email, password })
            .then((user) => {
                if (user !== null) {
                    console.log('user already exist');
                    res.status(200).json({
                        message: 'user already exist'
                    })
                }
                else {
                    const dataUser = new userModel({
                        firstName,
                        lastName,
                        email,
                        password,
                        birthDate
                    })
                    dataUser.save()
                    .then((user) => {
                        res.status(200).json({
                            message: 'Add new user',
                            data: user
                        })
                    }).catch(err => {
                        res.status(500).json({
                            err
                        })
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            });
    }
}



module.exports.updateUser = async function (req, res, next) {
    if (req.body) {
        const id = req.params.id
        try {
            const { name, password, email, address } = req.body;
            const data = {
                name,
                email,
                password,
                address
            }
            let updateUser = await userModel.findByIdAndUpdate(id, data, {
                new: true
            });
            res.send(updateUser);
        }
        catch (err) {
            next(err);
        }
    }
}
module.exports.deleteUser = async function (req, res, next) {

    const id = req.params.id
    try {

        let deletedUser = await userModel.findByIdAndRemove(ObjectId(id));
        res.send(deletedUser);
    }
    catch (err) {
        next(err);
    }

}

