const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const {
    createClient,
    getClient,
    updateClient,
    deleteClient,
    findAll
} = require("../controllers/clientController")

const router = express.Router()

router.get('/', [auth, admin], findAll)
router.post('/', [auth, admin], createClient)
router.get('/:_id', [auth, admin], getClient)
router.patch('/:_id', [auth, admin], updateClient)
router.delete('/:_id', [auth, admin], deleteClient)


module.exports = router