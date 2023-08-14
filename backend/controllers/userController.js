const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = function(_id, role) {
  return jwt.sign({_id, role}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password, role} = req.body

  try {
    const user = await User.login(email, password, role)

    // create a token
    const token = createToken(user._id, user.role)

    res.status(200).header('x-auth-token', token).send({email, token, role})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password, role} = req.body

  try {
    const user = await User.signup(email, password, role)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token, role})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// get a user
const getUser = async (req, res) => {
  const user = await User.findById(res.user._id).select('-password')
  res.send(user)
}

const staffPortal = async(req, res) => {
  res.status(200).json("Staff Portal")
}

module.exports = { signupUser, loginUser, getUser, staffPortal }


