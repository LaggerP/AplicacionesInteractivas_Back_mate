const Sequelize = require('sequelize');
const billetesJuegos = require('../models').billetesjuegos;

module.exports = {
	async create(req, res) {
		return billetesJuegos
			.create({
				level: req.body.level,
				gameType: req.body.gameType,
				name: req.body.name,
				description: req.body.description,
				success_answer:req.body.successAnswer,
				level_point: req.body.levelPoint,
				status: req.body.status
			})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},

	async list(_, res) {
		return billetesJuegos.findAll({})
							.then(juegos => res.status(200).send(juegos))
							.catch(error => res.status(400).send(error))
	},

	async findGameByName(req, res) {
		return juegos.findOne({ where: {name: req.body.name} })
							.then(juego => res.status(200).send(juego))
							.catch(error => res.status(400).send(error))
	},

	async findGameByLevel(req, res) {
		return billetesJuegos.findAll({ where: {level: req.params.level} })
							.then(juegos => res.status(200).send(juegos))
							.catch(error => res.status(400).send(error))
	},
};