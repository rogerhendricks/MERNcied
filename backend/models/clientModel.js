const device =  require('./deviceModel');
const lead  = require('./leadModels');

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    record : {
        type: Number,
        required: true
    },
    
    device:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "device"
    },
    lead: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "lead"
        }
    ],
})

module.exports = mongoose.model('client', clientSchema);