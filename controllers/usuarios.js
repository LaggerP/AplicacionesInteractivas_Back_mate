const Sequelize = require('sequelize');
const users = require('../models').usuarios;
const auth = require('../services/authServices');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const BCRYPT_ROUNDS = require('../config/config.json').BCRYPT_ROUNDS


module.exports = {
	async login(req, res) {
		let user = {
			username: req.body.username,
			password: req.body.password,
		}
		try {
			// get token from user (if exists)
			let loginToken = await auth.loginUser(user);
			
			return res.status(200).json({ token: loginToken, message: "Success login" })
		}
		catch (e) {
			return res.status(400).json({ status: 400, message: "Invalid username or password" })
		}
	},
	async register(req, res) {
		return users
			.findOrCreate({
				where: {
					username: req.body.username,
				},
				defaults: {
					username: req.body.username,
					password: bcrypt.hashSync(req.body.password, BCRYPT_ROUNDS),
					status: req.body.status
				}
			})
			.then(async user => {
				let registerToken = await auth.registerUser(user)

				return res.status(200).json({ token: registerToken, message: "Succesfully Created User" })

			}, (err) => res.send(err))
			.catch(error => res.status(400).send(error))
	},
	async list(_, res) {
		return users.findAll({})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},
	async findUserById(req, res) {
		return users.findOne({ where: { id: req.body.id, } })
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},
};