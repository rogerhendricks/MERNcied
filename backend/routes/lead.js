const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const {
    createLead,
    getLead, 
    updateLead, 
    deleteLead,
    findAll
} = require('../controllers/leadController')

const router = express.Router()

router.get('/', [auth, admin], findAll);
router.post('/', createLead)
router.get('/:_id', getLead)
router.patch('/:_id', [auth, admin], updateLead)
router.delete('/:_id', [auth, admin], deleteLead)

module.exports = router