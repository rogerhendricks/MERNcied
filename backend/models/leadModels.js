const manufacturer = require("./manufacturerModel");

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const leadSchema = new Schema({
    model: {
        type:String,
        required: true
    },
    manufacturer: [manufacturer],
    type: {
        type: String,
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

module.exports = mongoose.model('lead', leadSchema);