
const mongoose = require(`mongoose`);
// const {objectId}= require ('mongoose');
const stage=require ('./stageModel')
const lessonSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
    },
    lessonNumber:{
        type:Number
    },
    // desc:{
    //     type: String,
    // },
    stageId:{
        type: String  
        // type: mongoose.objectId,
        // ref: 'stage'
    }

}, { timestamps: true })


module.exports = mongoose.model('lesson', lessonSchema);
