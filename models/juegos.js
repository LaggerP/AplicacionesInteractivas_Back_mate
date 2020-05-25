'use strict';
module.exports = (sequelize, DataTypes) => {
  const juegos = sequelize.define('juegos', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.CHAR
  }, {});
  juegos.associate = function(models) {
    // associations can be defined here
  };
  return juegos;
};