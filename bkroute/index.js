const express = require('express');
const router = require('./api');
const _ = express.Router()

// localhost:5100/api/v1/api
_.use('/api', router)

module.exports = _ ;  