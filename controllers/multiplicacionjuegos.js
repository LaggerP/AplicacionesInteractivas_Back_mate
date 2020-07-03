const Sequelize = require('sequelize');
const multiplicacionJuegos = require('../models').multiplicacionjuegos;

module.exports = {
	async create(req, res) {
		return multiplicacionJuegos
			.create({
				level: req.body.level,
				name: req.body.name,
				img: req.body.img,
				status: req.body.status
			})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},

	async list(_, res) {
		return multiplicacionJuegos.findAll({})
							.then(juegos => res.status(200).send(juegos))
							.catch(error => res.status(400).send(error))
	},

	async findGameByName(req, res) {
		return multiplicacionJuegos.findOne({ where: {name: req.body.name} })
							.then(juego => res.status(200).send(juego))
							.catch(error => res.status(400).send(error))
	},

	async findGameByLevel(req, res) {
		return multiplicacionJuegos.findAll({ where: {level: req.body.level} })
							.then(juegos => res.status(200).send(juegos))
							.catch(error => res.status(400).send(error))
	},
};