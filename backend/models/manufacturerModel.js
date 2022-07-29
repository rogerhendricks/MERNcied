const mongoose = require('mongoose')

const Schema = mongoose.Schema

const representative = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    }
})

const manufacturerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact:[representative],
    service: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('manufacturer', manufacturerSchema);