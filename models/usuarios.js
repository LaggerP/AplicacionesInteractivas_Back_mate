const bcrypt = require("bcrypt");

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Usuarios = sequelize.define('usuarios', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING
		},
		status: {
			allowNull: true,
			defaultValue: 1,
			type: DataTypes.CHAR
		}
	}, {
		timestamps: false,
		freezeTableName: true,
		tableName: 'usuarios',
		classMethods: {},
		instanceMethods: {},
	});
	Usuarios.associate = function (models) {
		// associations can be defined here
	};

return Usuarios;
};