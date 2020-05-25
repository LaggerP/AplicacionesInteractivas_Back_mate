const Sequelize = require('sequelize');
const ranking = require('../models').ranking;

module.exports = {
	create(req, res) {
		return ranking
		.create({
			username: req.body.username,
			puntaje: req.body.password,
		})
			.then(ranking => res.status(200).send(ranking))
			.catch(error => res.status(400).send(error))
	},
	list(_, res) {
		return ranking.findAll({})
			.then(ranking => res.status(200).send(ranking))
			.catch(error => res.status(400).send(error))
	},
	find(req, res) {
		return ranking.findOne({
			where: {
				username: req.body.username,
			}
		})
			.then(ranking => res.status(200).send(ranking))
			.catch(error => res.status(400).send(error))
	},
};