'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const CategoryModel = require('./category');
const ProductModel = require('./product');

let DATABASE_URL = process.env.DATABASE_URL;

const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, options);

const categoryTable = CategoryModel(sequelizeInstance, DataTypes);
const productTable = ProductModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  categories: categoryTable,
  products: productTable,
};
