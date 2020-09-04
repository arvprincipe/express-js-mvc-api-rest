'use strict'

const router = require('express').Router()

// controller
const { getProducts, insertProduct } = require('../controller/product.controller')

router.get('/api/products', getProducts)
router.post('/api/products', insertProduct)

module.exports = router 