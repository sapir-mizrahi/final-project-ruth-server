
const mongoose = require(`mongoose`);

const stageSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
    },
    stageNumber:{
        type:String
    },

}, { timestamps: true })


module.exports = mongoose.model('stage', stageSchema);
