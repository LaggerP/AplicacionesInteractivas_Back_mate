'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('participacions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			usuario_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'usuarios',
					key: 'id'
				},
			},
			juego_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'billetesjuegos',
					key: 'id'
				},
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
		return queryInterface.dropTable('participacions');
	}
};