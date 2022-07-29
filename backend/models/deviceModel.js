const manufacturer =  require("./manufacturerModel");

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const deviceSchema = new Schema({
    model: {
        type:String,
        required: true
    },
    manufacturer: {
        type: String,
        enum: ['Abbott','Boston Scientific', 'Biotronik', 'Medtronic', 'Sorin'],
        default: undefined
    },
    deviceType: {
        type: String,
        enum: ['pacemaker', 'defibrillator', 'loop recorder'],
        required: true
    },
    mri: {
        type: Boolean,
        required: true
    },
    hazard: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('device', deviceSchema);