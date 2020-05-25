/* Controllers */
const usuariosController = require('../controllers/usuarios');
const juegosController = require('../controllers/juegos');

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Example project did not give you access to the api web services',
	}));

	// User services
	app.post('/api/usuarios/create', usuariosController.create);
	app.get('/api/usuarios/list', usuariosController.list);
	app.get('/api/usuarios/find', usuariosController.find);

	// Juegos services
	app.post('/api/juegos/create', juegosController.create);
	app.get('/api/juegos/list', juegosController.list);
	app.get('/api/juegos/find', juegosController.find);
};