const express = require('express')
const { signupController } = require('../../../controller/auth.controller')
const auth = express.Router()

// localhost:5100/api/v1/api/auth/signup
auth.post('/signup', signupController)

// localhost:5100/api/v1/api/auth/login
auth.post('/login', (req, res)=>{
    res.send('ami parci login korte')
})

module.exports = auth ;   