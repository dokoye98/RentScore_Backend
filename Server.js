const express = require('express')
const { restart } = require('nodemon')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const userRoutes = require('./Routes/user')
const reviewRoutes = require('./Routes/review')
const propertyRoutes = require('./Routes/property')

app.use(bodyParser.json())
app.use(cors())
app.use('/user', userRoutes)
app.use('/review', reviewRoutes)
app.use('/property', propertyRoutes)

app.get('/',async(req,res)=>{
  res.status(200).send('Hello world')
})

mongoose.connect(process.env.DB_CONNECTOR)
  .then(() => console.log('DB connected'))
  .catch(err => console.error('DB connection error', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Renter Grade is live on ${PORT}`)
})
