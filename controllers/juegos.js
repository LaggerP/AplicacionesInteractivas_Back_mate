const Sequelize = require('sequelize');
const juegos = require('../models').juegos;
module.exports = {
	async create(req, res) {
		return juegos
			.create({
				level: req.body.level,
				name: req.body.name,
				description: req.body.description,
				successAnswer:req.body.successAnswer,
				levelPoint: req.body.levelPoint,
				status: req.body.status
			})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},

	async list(_, res) {
		return juegos.findAll({})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},

	async findGameByName(req, res) {
		return juegos.findOne({ where: {name: req.body.name} })
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},
};