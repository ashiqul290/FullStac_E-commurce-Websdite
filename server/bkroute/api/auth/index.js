const express = require('express')
const { signupController, loginController, allUserController } = require('../../../controller/auth.controller')
const { meddletoken } = require('../../../middleware/jwtMeddleToken')
const auth = express.Router()

// localhost:5100/api/v1/api/auth/signup
auth.post('/signup', signupController)

// localhost:5100/api/v1/api/auth/login
 auth.post('/login', loginController)
 
// localhost:5100/api/v1/api/auth/login
  auth.get('/allusers',meddletoken, allUserController)


module.exports = auth ;   