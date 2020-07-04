'use strict';
module.exports = (sequelize, DataTypes) => {
  const billetesjuegos = sequelize.define('billetesjuegos', {
    level: DataTypes.INTEGER,
    gameType: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.CHAR,
    success_answer:DataTypes.INTEGER,
    level_point:DataTypes.INTEGER
  }, {});
  billetesjuegos.associate = function(models) {
    // associations can be defined here
  };
  return billetesjuegos;
};