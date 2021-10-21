'use strict';

const Tree = (sequelize, DataTypes) => sequelize.define('Tree', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Tree;
