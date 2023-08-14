const Lead = require('../models/leadModels')
const mongoose = require('mongoose')


// get a single workout
const getLead = async (req, res) => {
    const { _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such lead'})
    }

    const device = await Lead.findById(_id)

    if (!lead) {
        return res.status(404).json({error: 'No such lead'})
    }
    
    res.status(200).json(lead)
}

// create new workout
const createLead = async (req, res) => {
    const {model, manufacturer, placement, mri, hazard} = req.body
    let emptyFields = []

    if(!model) {
        emptyFields.push('model')
    }
    if(!manufacturer) {
        emptyFields.push('manufacturer')
    }
    if(!placement) {
        emptyFields.push('placement')
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
        const lead = await Lead.create({model, manufacturer, placement, mri, hazard})
        res.status(200).json(lead)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    }

// update a workout
const updateLead = async (req, res) => {
    const { _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such lead'})
    }

    const device = await Device.findOneAndUpdate({_id: _id}, {
    ...req.body
    })

    if (!device) {
        return res.status(400).json({error: 'No such lead'})
    }
    res.status(200).json(lead)
}

const deleteLead = async (req, res) => {
    const {_id} = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such lead'})
    }

    const lead = await Lead.findOneAndDelete({_id:_id})
    
    if (!lead){
        return res.status(400).json({error: 'No such lead'})
    }
}

const findAll = (req, res) => {
    Lead.find()
    .then(lead => {
        res.send(lead);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

module.exports = {
    createLead,
    getLead, 
    updateLead,
    deleteLead,
    findAll
}