'use strict';
module.exports = (sequelize, DataTypes) => {
  const juegos = sequelize.define('juegos', {
    level: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.CHAR,
    success_answer:DataTypes.INTEGER,
    level_point:DataTypes.INTEGER
  }, {});
  juegos.associate = function(models) {
    // associations can be defined here
  };
  return juegos;
};