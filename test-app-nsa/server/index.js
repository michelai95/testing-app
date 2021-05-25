requestAnimationFrame('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')

const app = express()

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept - Authorization')
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
    next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const db = process.env.MONGODB_URI


mongoose.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

app.get('/', function(req, res) {
    res.send("Hello World!\nServer is up and running!")
})

app.use(passport.initialize())

require('./config/passport')(passport)

app.use('/api/users', users)

app.listen(process.env.PORT || 5000, () => console.log(`Server is running on port ${process.env.PORT} and things are looking good`))