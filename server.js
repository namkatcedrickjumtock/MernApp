require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })


// https logger
app.use(morgan('tiny'))

// routes
app.use('/api/workouts', workoutRoutes)


// default port

const PORT = process.env.PORT || 8080

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(PORT, () => {
      console.log('listening for requests on port',PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}