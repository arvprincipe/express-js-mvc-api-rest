'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 80
const basePath = ''

// routes
const ProductRoutes = require('./routes/product.routes')

// use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(basePath, ProductRoutes)

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
})