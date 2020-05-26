/* Controllers */
const usuariosController = require('../controllers/usuarios');
const juegosController = require('../controllers/juegos');
const participacionController = require('../controllers/participacion');
const rankingController = require('../controllers/ranking');

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Example project did not give you access to the api web services',
	}));

	// User services
	app.post('/api/usuarios/create', usuariosController.create);
	app.get('/api/usuarios/list', usuariosController.list);
	app.get('/api/usuarios/find', usuariosController.find);
	app.get('/api/auth/login', usuariosController.login)

	// Juegos services
	app.post('/api/juegos/create', juegosController.create);
	app.get('/api/juegos/list', juegosController.list);
	app.get('/api/juegos/find/:id', juegosController.find);

	// Participacion services
	app.post('/api/participacion/create', participacionController.create);
	app.get('/api/participacion/list', participacionController.list);
	app.get('/api/participacion/find', participacionController.find);

	// Ranking services
	app.post('/api/ranking/create', rankingController.create);
	app.get('/api/ranking/list', rankingController.list);
	app.get('/api/ranking/find', rankingController.find);
};