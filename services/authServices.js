const usuario = require('../models').usuarios
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const DEV_SECRET = require('../config/config').DEV_SECRET

module.exports = {
	async loginUser(user) {
		try {
			// Find the User from database and get all data
			let _details = await usuario.findOne({ where: { username: user.username } });

			// Compare if my text plain pass is equal to encrypted password
			let passwordIsValid = bcrypt.compareSync(user.password, _details.password);
			if (!passwordIsValid) throw Error("Invalid username/password")

			// Create token of existing user
			let token = jwt.sign({
				id: _details.id
			}, process.env.SECRET || DEV_SECRET, {
				expiresIn: 86400 // expires in 24 hours
			});
			return token;
		} catch (e) {
			// return a Error message describing the reason     
			throw Error("Error while Login User")
		}
	},

	async registerUser(user) {
		try {
			// Creating token for new user
			var token = jwt.sign({
				id: user.id
			}, process.env.SECRET || DEV_SECRET, {
				expiresIn: 86400 // expires in 24 hours
			});
			return token;

		} catch (e) {
			// return a Error message describing the reason 
			throw Error("Error while Creating User")
		}
	},
};