'use strict';
module.exports = (sequelize, DataTypes) => {
  const multiplicacionjuegos = sequelize.define('multiplicacionjuegos', {
    level: DataTypes.INTEGER,
    name: DataTypes.STRING,
    img:DataTypes.STRING,
  }, {});
  multiplicacionjuegos.associate = function(models) {
    // associations can be defined here
  };
  return multiplicacionjuegos;
};