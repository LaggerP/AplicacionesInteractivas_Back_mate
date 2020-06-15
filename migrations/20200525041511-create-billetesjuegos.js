'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('billetesjuegos', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			level: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			gameType: {
				type: Sequelize.STRING
			},
			name: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			success_answer: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			level_point: {
				allowNull: false,
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
		return queryInterface.dropTable('billetesjuegos');
	}
};