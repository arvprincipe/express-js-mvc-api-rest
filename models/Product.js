'use strict'

const { v4: uuid } = require('uuid');
const db = require('../database/database')

class Product {
  constructor(name, price, brand) {
    this.productId = uuid()
    this.name = name;
    this.price = price
    this.brand = brand
  }

  save() {
    db.push(this)
    return this
  }
}

module.exports = Product