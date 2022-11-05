const { ObjectId } = require('mongodb');
const mongoose = require(`mongoose`);
const {isEmail} = require('validator');

const { boolean } = require('webidl-conversions');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        min: 2,      
    },
    lastName: {
        type: String,
        min: 2,       
    },
    userName: {
        type: String,
        min: 2,       
    },
    email: {
        type: String,
        required: true,
        validate:[isEmail,'please insert valid email'],
        unique:true,
        required: [true, 'you must insert!, required']
    },
    password: {
        type:String,
        minlength:8,
    },
    
    birthDate:Date,
    isManage:Boolean

},{timestamps:true})


module.exports = mongoose.model('user', userSchema);
