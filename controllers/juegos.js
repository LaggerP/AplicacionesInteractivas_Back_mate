const Sequelize = require('sequelize');
const juegos = require('../models').juegos;
module.exports = {
	create(req, res) {
		return juegos
			.create({
				name: req.body.name,
				description: req.body.description,
				status: req.body.status
			})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},

	list(_, res) {
		return juegos.findAll({})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},

	find(req, res) {
		return juegos.findAll({
			where: {
				name: req.body.name,
			}
		})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},
};