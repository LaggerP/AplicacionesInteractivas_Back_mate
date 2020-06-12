const Sequelize = require('sequelize');
const ranking = require('../models').ranking;

module.exports = {
	initialRankSave (userId) {
		console.log(userId)
			return ranking
				.create({
					usuario_id: userId,
					puntaje_billetes: 0,
					puntaje_sumas: 0,
					puntaje_multiplicacion: 0,
					status: 1
				})
				
	},
	
	updateBilletes(req, res) {
		return ranking.update(
			{puntaje_billetes: req.body.puntaje_billetes}, 
			{returning: true, where: {usuario_id: req.body.usuario_id}}
		)
		.then(res => res.status(200).send(res))
		.catch(error => res.status(400).send(error))
	},

	updateSumas(req, res) {
		return ranking.update(
			{puntaje_sumas: req.body.puntaje_sumas}, 
			{returning: true, where: {usuario_id: req.body.usuario_id}}
		)
		.then(res => res.status(200).send(res))
		.catch(error => res.status(400).send(error))
	},

	updateMultiplicacion(req, res) {
		return ranking.update(
			{puntaje_multiplicacion: req.body.puntaje_multiplicacion}, 
			{returning: true, where: {usuario_id: req.body.usuario_id}}
		)
		.then(res => res.status(200).send(res))
		.catch(error => res.status(400).send(error))
	},

	async list(_, res) {
		return ranking.findAll({})
							.then(ranking => res.status(200).send(ranking))
							.catch(error => res.status(400).send(error))
	},

	async findRankingByUsernameId(req, res) {
		return ranking.findOne({where: {username_id: req.body.username_id}})
							.then(ranking => res.status(200).send(ranking))
							.catch(error => res.status(400).send(error))
	},
};