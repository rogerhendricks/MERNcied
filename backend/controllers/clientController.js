const Client = require('../models/clientModel')
const mongoose = require('mongoose')

// get a single client
const getClient = async (req, res) => {
    const { _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such client'})
    }

    const client = await Client.findById(_id).populate(['device', 'lead'])

    if (!client) {
        return res.status(404).json({error: 'No such client'})
    }
    
    res.status(200).json(client)
}

// create new client
const createClient = async (req, res) => {
    const {fname, lname, record, device, lead} = req.body
    let emptyFields = []

    if(!fname) {
        emptyFields.push('fname')
    }
    if(!lname) {
        emptyFields.push('lname')
    }
    if(!record) {
        emptyFields.push('record')
    }
    if(!device) {
        emptyFields.push('device')
    }
    if(!lead){
        emptyFields.push('lead')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const client = await Client.create({fname, lname, record, device, lead})
        res.status(200).json(client)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    }

// update a client
const updateClient = async (req, res) => {
    const { _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such client'})
    }

    const client = await Client.findOneAndUpdate({_id: _id}, {
    ...req.body
    })

    if (!client) {
        return res.status(400).json({error: 'No such client'})
    }
    res.status(200).json(client)
}

// Delete client
const deleteClient = async (req, res) => {
    const {_id} = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such client'})
    }

    const client = await Client.findOneAndDelete({_id:_id})
    
    if (!client){
        return res.status(400).json({error: 'No such client'})
    }
}
// Find all clients
const findAll = (req, res) => {
    Client.find()
    .then(client => {
        res.send(client);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

module.exports = {
    createClient,
    getClient,
    updateClient,
    deleteClient,
    findAll
}