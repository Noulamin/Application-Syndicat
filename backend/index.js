require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')

//Routers
const authRouter = require('./routes/auth')

mongoose.connect(process.env.DATABASE).then(() =>
  console.log('Database connected.')).catch((e) =>
  console.log('Database not connected.', e)
)

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/auth', authRouter)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`the server is running on port : ${port}`)
})

module.exports = app