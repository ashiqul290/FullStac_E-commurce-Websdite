const express = require('express');
const product = express.Router()

// localhost:5100/api/v1/api/product/allproduct

product.get('/allproduct',(req,res)=>{
    res.send('kire toi to deki akhono gomac nai')
})


module.exports = product ;  