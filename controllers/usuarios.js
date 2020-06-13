const Sequelize = require('sequelize');
const users = require('../models').usuarios;
const auth = require('../services/authServices');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const BCRYPT_ROUNDS = require('../config/config.js').BCRYPT_ROUNDS
const SECRET = require('../config/config.js').DEV_SECRET || process.env.SECRET
const initialRankSave = require('../controllers/ranking').initialRankSave


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

	register(req, res) {
		return users
			.findOrCreate({
				where: {
					username: req.body.username,
				},
				defaults: {
					username: req.body.username,
					password: bcrypt.hashSync(req.body.password, BCRYPT_ROUNDS),
					status: req.body.status
				},
			})
			.then(async user => {
				initialRankSave(req.body.username)
				let registerToken = await auth.registerUser(user)
				return res.status(200).json({ token: registerToken, message: "Succesfully Created User" })
			})
			.catch(error => res.status(400).json({error: error, message: "Register error"}))
	},

	verifyToken (req, res) { 
		let token = req.body.token;

		jwt.verify(token, SECRET, { algorithm: "HS256" }, (err, user) => {

			if (err) {
				// shut them out!
				res.status(500).json({ error: "Not Authorized" });
				throw new Error("Not Authorized");
			}
			return res.status(200).send('Correct token');
		});
	},

	list(_, res) {
		return users.findAll({})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},

	findUserByUsername(req, res) {
		return users.findOne({ where: { username: req.body.username } })
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},
};