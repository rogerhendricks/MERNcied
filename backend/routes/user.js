const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
// controller functions
const { loginUser, signupUser, getUser, staffPortal } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// get user
router.get('/me', auth, getUser)

// staff portal
router.get('/portal', [auth, admin], staffPortal)


module.exports = router