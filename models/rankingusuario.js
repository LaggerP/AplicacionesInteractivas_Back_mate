'use strict';
module.exports = (sequelize, DataTypes) => {
	const rankingusuario = sequelize.define('rankingusuario', {
		usuario_id: DataTypes.INTEGER,
		ranking_id: DataTypes.INTEGER,
		status: DataTypes.CHAR
	}, {});
	rankingusuario.associate = function (models) {
		// associations can be defined here

		rankingusuario.belongsTo(models.usuarios,
			{
				as: 'usuario',
				foreignKey: 'usuario_id',
			}
		);
		rankingusuario.belongsTo(models.ranking,
			{
				as: 'ranking',
				foreignKey: 'ranking_id',
			}
		);
	};
	return rankingusuario;
};