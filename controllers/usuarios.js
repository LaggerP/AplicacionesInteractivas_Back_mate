const Sequelize = require('sequelize');
const usuarios = require('../models').usuarios;
const auth = require('../services/authServices');

module.exports = {
	create(req, res) {
		return usuarios
			.create({
				username: req.body.username,
				password: req.body.password,
				status: req.body.status
			})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},
	list(_, res) {
		return usuarios.findAll({})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},
	find(req, res) {
		return usuarios.findOne({ where: { id: req.body.id, } })
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},
	login(req, res) {
		var user = {
			username: req.body.username,
			password: req.body.password,
		}
		try {
			var loginUser = auth.loginUser(user);
			return res.status(201).json({ token: loginUser,  message: "Success login"})
		}
		catch (e) {
			return res.status(400).json({ status: 400, message: "Invalid username or password" })
		}
	}

};