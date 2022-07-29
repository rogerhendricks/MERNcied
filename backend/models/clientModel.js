const device =  require('./deviceModel');
const lead  = require('./leadModel');

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
    
    device: [device],
    lead: [lead],
})

module.exports = mongoose.model('client', clientSchema);