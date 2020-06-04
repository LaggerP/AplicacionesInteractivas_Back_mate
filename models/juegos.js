'use strict';
module.exports = (sequelize, DataTypes) => {
  const juegos = sequelize.define('juegos', {
    level: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.CHAR,
    successAnswer:DataTypes.INTEGER,
    levelPoint:DataTypes.INTEGER
  }, {});
  juegos.associate = function(models) {
    // associations can be defined here
  };
  return juegos;
};