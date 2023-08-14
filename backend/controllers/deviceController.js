const Device = require('../models/deviceModel')
const mongoose = require('mongoose')


// get a single device
const getDevice = async (req, res) => {
    const { _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such device'})
    }

    const device = await Device.findById(_id)

    if (!device) {
        return res.status(404).json({error: 'No such device'})
    }
    
    res.status(200).json(device)
}

// create new device
const createDevice = async (req, res) => {
    const {model, manufacturer,deviceType, mri, hazard} = req.body
    let emptyFields = []

    if(!model) {
        emptyFields.push('model')
    }
    if(!manufacturer) {
        emptyFields.push('manufacturer')
    }
    if(!deviceType) {
        emptyFields.push('deviceType')
    }
    if(!mri) {
        emptyFields.push('mri')
    }
    if(!hazard){
        emptyFields.push('hazard')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const device = await Device.create({model, manufacturer, deviceType, mri, hazard})
        res.status(200).json(device)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    }

// update a device
const updateDevice = async (req, res) => {
    const { _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such device'})
    }

    const device = await Device.findOneAndUpdate({_id: _id}, {
    ...req.body
    })

    if (!device) {
        return res.status(400).json({error: 'No such device'})
    }
    res.status(200).json(device)
}

const deleteDevice = async (req, res) => {
    const {_id} = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such device'})
    }

    const device = await Device.findOneAndDelete({_id:_id})
    
    if (!device){
        return res.status(400).json({error: 'No such device'})
    }
}
const findAll = (req, res) => {
    Device.find()
    .then(device => {
        res.send(device);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

module.exports = {
    createDevice, 
    getDevice, 
    updateDevice,
    deleteDevice,
    findAll
}