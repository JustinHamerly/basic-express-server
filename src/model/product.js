'use strict';

const Product = (sequelize, DataTypes) => sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inventory: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Product;
