'use strict';

const Bird = (sequelize, DataTypes) => sequelize.define('Bird', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wingspan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Bird;
