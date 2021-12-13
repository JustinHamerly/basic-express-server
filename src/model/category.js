'use strict';

const Category = (sequelize, DataTypes) => sequelize.define('Category', {
  normalized: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Category;
