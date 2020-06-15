const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const participacion = require('../models').participacion;
const usuario = require('../models').usuarios;
const juego = require('../models').billetesjuegos;

module.exports = {
	async create(req, res) {
		// Usuario
		const responseUsuario = usuario.findOne({
			where: {
				[Op.or]: [{
					username: req.body.usuario
				}, {
					id: req.body.usuario
				}]
			}
		});
		// Juego
		const responseJuego = juego.findOne({
			where: {
				[Op.or]: [{
					name: req.body.juego
				}, {
					id: req.body.juego
				}]
			}
		});
		Promise
			.all([responseUsuario, responseJuego])
			.then(responses => {
				return participacion
					.create({
						usuario_id: responses[0].id,
						juego_id: responses[1].id,
						status: req.body.status,
					})
					.then(participacion => res.status(200).send(participacion))
			})
			.catch(error => res.status(400).send(error));
	},
	async list(_, res) {
		return participacion.findAll({
			include: [{
				model: usuario,
				as: 'usuario'
			}, {
				model: juego,
				as: 'juego'
			}]
		})
			.then(participacion => res.status(200).send(participacion))
			.catch(error => res.status(400).send(error))
	},

	async findParticipacionById(req, res) {
		return participacion.findOne({
			where: {
				id: req.params.id,
			},
			include: [{
				model: usuario,
				as: 'usuario'
			}, {
				model: juego,
				as: 'juego'
			}]
		})
			.then(participacion => res.status(200).send(participacion))
			.catch(error => res.status(400).send(error))
	},
};