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
			allowNull: null,
			type: DataTypes.INTEGER
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
		instanceMethods: {
			validPassword: function (password) {
				return bcrypt.compareSync(password, this.local.password);
			}
		},
	});
	Usuarios.associate = function (models) {
		// associations can be defined here
	};

	// Generate hash for password
	Usuarios.beforeCreate(
		(user, options) => {
			return bcrypt.hash(user.password, 10)
				.then(hash => { user.password = hash; })
				.catch(err => { throw new Error(); });
		} 	
	);

return Usuarios;
};