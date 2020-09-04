'use strict'

const db = require('../database/database')
// models
const Product = require('../models/Product')

const getProducts = async(request, response) => {
  response.status(200).send({
    data: db,
    status: 200
  })
}

const insertProduct = async(request, response) => {
  let body = request.body;

  let product = new Product(body.name, body.price, body.brand)
  let inserted = product.save()

  response.status(201).send({
    message: 'Product was inserted!',
    product: inserted,
    status: 201
  })
}

module.exports = {
  getProducts,
  insertProduct
}