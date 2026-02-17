const express = require('express');
const { addProductcontroller, allProductcontroller, updateProductcontroller, deleteProductcontroller } = require('../../../controller/product.controller');
const upload = require('../../../utils/upload');
const product = express.Router()
// localhost:5100/api/v1/api/product/add-product
product.post('/add-product',upload.array('image'), addProductcontroller)

// localhost:5100/api/v1/api/product/all-product
product.get('/all-product', allProductcontroller)

// localhost:5100/api/v1/api/product/update-product
product.patch('/update-product/:id',upload.array('image'), updateProductcontroller)

// localhost:5100/api/v1/api/product/delete-product
product.delete('/delete-product/:id', deleteProductcontroller)

module.exports = product ;