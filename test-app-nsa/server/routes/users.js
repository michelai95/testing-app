require('dotenv').config()
const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcrypt.js')
const jwt = ('jsonwebtoken')
const passport = require('passport')

const User = require('../models/User')

router.get('/test', (req, res) => {
    res.json({msg: 'Users endpointworking'})
})

router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (user) {
            return res.status(400).json({email: `Email already exists`})
        } else {
            const avatar = gravatar.url.apply(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                position: req.body.position
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) {
                        res.json({err})
                    }
                    newUser.password = hash
                    newUser.save()
                    .then(user => res.status(207).json(user))
                    .catch(err => console.log(err))
                })
            })
        }
    })
})