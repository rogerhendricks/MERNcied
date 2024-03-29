require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const deviceRoutes = require('./routes/device')
const leadRoutes = require('./routes/lead')
const clientRoutes = require('./routes/client')
const serviceRoutes = require('./routes/service')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
app.use('/api/device', deviceRoutes)
app.use('/api/lead', leadRoutes)
app.use('/api/client', clientRoutes)
<<<<<<< HEAD
// app.use('api/service', serviceRoutes)
=======
app.use('api/service', serviceRoutes)
>>>>>>> a0cadadfcd2f30de33a896a40f50afb9f319e543

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })