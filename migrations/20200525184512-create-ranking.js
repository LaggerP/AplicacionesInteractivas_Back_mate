'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('rankings', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			usuario_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'usuarios',
					key: 'id'
				},
			},
			puntaje_total: {
				type: Sequelize.INTEGER
			},
			puntaje_billetes: {
				type: Sequelize.INTEGER
			},
			puntaje_sumas: {
				type: Sequelize.INTEGER
			},
			puntaje_multiplicacion: {
				type: Sequelize.INTEGER
			},
			status: {
				type: Sequelize.CHAR
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('rankings');
	}
};