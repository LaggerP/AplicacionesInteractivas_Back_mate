'use strict';
module.exports = (sequelize, DataTypes) => {
	const ranking = sequelize.define('ranking', {
		username: DataTypes.STRING,
		puntaje_billetes: DataTypes.INTEGER,
		puntaje_sumas: DataTypes.INTEGER,
		puntaje_multiplicacion: DataTypes.INTEGER,
		status: DataTypes.CHAR
	}, {});
	ranking.associate = function (models) {
		// associations can be defined here
		
	};
	return ranking;
};