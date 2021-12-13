'use strict';

const express = require('express');
// const dotenv = require('dotenv').config();
// const PORT = process.env.PORT || 3001;
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const categoryFunctions = require('./routes/categoryRoute');
const productFunctions = require('./routes/productRoute');
const app = express();

app.use(logger);
app.use(express.json());

//category routes
app.get('/category', categoryFunctions.getAllCategories);
app.get('/category/:id', categoryFunctions.getACategory);
app.post('/category', categoryFunctions.addACategory);
app.put('/category/:id', categoryFunctions.updateCategory);
app.delete('/category/:id', categoryFunctions.deleteACategory);

//product routes
app.get('/product', productFunctions.getAllProducts);
app.get('/product/:id', productFunctions.getAProduct);
app.post('/product', productFunctions.addAProduct);
app.put('/product/:id', productFunctions.updateProduct);
app.delete('/product/:id', productFunctions.deleteAProduct);

app.use(error404);
app.use(error500);

module.exports = {
  app,
  // start: app.listen(3001, () => console.log(`Server Running on port ${PORT}`)),
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
  },
};
