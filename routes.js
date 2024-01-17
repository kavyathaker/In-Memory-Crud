const express = require('express')
const router = express.Router()
const getProducts  = require('./Controllers/readProduct')
const postProducts = require('./Controllers/createProduct');
const updateProducts = require('./Controllers/updateProduct');
const deleteProducts = require('./Controllers/deleteProduct');
router.get('/getProducts',getProducts);
router.get('/getProducts/:id',getProducts);
router.post('/postProducts', postProducts);
router.patch('/:id', updateProducts);
router.delete('/:id', deleteProducts);

module.exports = router