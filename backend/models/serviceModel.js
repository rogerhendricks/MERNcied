const mongoose = require('mongoose')

const Schema = mongoose.Schema


const serviceSchema = new Schema({
    mdc_idc_sess_type: {
        type: String,
        required: true,
        default: 'In Clinic Periodic',
        enum: ['In Clinic Periodic', 'In Clinic Call Back', 'Remote Periodic', 'Remote Early Detection']
    },
    mdc_idc_sess_comments:{
        type: String,
        maxLength: 500,
        required: false
    }
},{ timestamps: true })

module.exports = mongoose.model('service', serviceSchema);