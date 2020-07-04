'use strict';
module.exports = (sequelize, DataTypes) => {
	const participacion = sequelize.define('participacion', {
		usuario_id: DataTypes.INTEGER,
		juego_id: DataTypes.INTEGER,
		status: DataTypes.CHAR
	}, {});
	participacion.associate = function (models) {
		// associations can be defined here
		participacion.belongsTo(models.usuarios,
			{
				as: 'usuario',
				foreignKey: 'usuario_id',
			}
		);
		participacion.belongsTo(models.billetesjuegos,
			{
				as: 'juego',
				foreignKey: 'juego_id',
			}
		);
	};
	return participacion;
};