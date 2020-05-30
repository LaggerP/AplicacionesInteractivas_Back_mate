'use strict';
module.exports = (sequelize, DataTypes) => {
	const ranking = sequelize.define('ranking', {
		usuario_id: DataTypes.INTEGER,
		puntajeTotal: DataTypes.INTEGER,
		puntajeBilletes: DataTypes.INTEGER,
		puntajeSumas: DataTypes.INTEGER,
		puntajeMultiplicacion: DataTypes.INTEGER,
		status: DataTypes.CHAR
	}, {});
	ranking.associate = function (models) {
		// associations can be defined here
		ranking.belongsTo(models.usuarios,
			{
				as: 'usuario',
				foreignKey: 'usuario_id',
			}
		);
	};
	return ranking;
};