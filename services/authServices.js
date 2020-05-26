const usuario = require('../models').usuarios
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports = {
	loginUser(user) {
		try {
			// Find the User from database and get all data
			var _details = usuario.findOne({ username: user.username });

			// Compare if my text plain pass is equal to encrypted password
			var passwordIsValid = bcrypt.compareSync(user.password, _details.password);
			if (!passwordIsValid) throw Error("Invalid username/password")

			// Create token
			var token = jwt.sign({
				id: _details.id
			}, process.env.SECRET, {
				expiresIn: 86400 // expires in 24 hours
			});
			return token;
		} catch (e) {
			// return a Error message describing the reason     
			throw Error("Error while Login User")
		}
	}
};