const manufacturer = require("./manufacturerModel");

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const leadSchema = new Schema({
    model: {
        type:String,
        required: true
    },
    manufacturer: {
        type: String,
        enum: ['Abbott','Boston Scientific', 'Biotronik', 'Medtronic', 'Sorin'],
        default: undefined
    },
    placement: {
        type: String,
        enum: ['RA', 'RV', 'LV', 'Epi'],
        required: false
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

module.exports = mongoose.model('lead', leadSchema);