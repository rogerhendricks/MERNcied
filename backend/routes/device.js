const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const {
    createDevice,
    getDevice, 
    updateDevice, 
    deleteDevice,
    findAll
} = require('../controllers/deviceController')

const router = express.Router()

router.get('/', [auth, admin], findAll);
router.post('/', [auth, admin], createDevice)
router.get('/:_id', [auth, admin], getDevice)
router.patch('/:_id', [auth, admin], updateDevice)
router.delete('/:_id', [auth, admin], deleteDevice)


module.exports = router