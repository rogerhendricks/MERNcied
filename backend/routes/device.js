const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const {
    createDevice,
    getDevice, 
    updateDevice, 
    deleteDevice
} = require('../controllers/deviceController')

const router = express.Router()

router.post('/:_id', [auth, admin], createDevice)
router.get('/:_id', [auth, admin], getDevice)
router.patch('/:_id', [auth, admin], updateDevice)
router.delete('/:id', [auth, admin], deleteDevice)

module.exports = router