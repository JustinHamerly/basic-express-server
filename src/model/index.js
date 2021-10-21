'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const BirdModel = require('./bird');
const TreeModel = require('./tree');

let DATABASE_URL = process.env.DATABASE_URL  || 'sqlite:memory' ;

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

const birdTable = BirdModel(sequelizeInstance, DataTypes);
const treeTable = TreeModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  birds: birdTable,
  trees: treeTable,
};
