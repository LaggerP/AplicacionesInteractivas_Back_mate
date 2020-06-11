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
	app.post('/api/auth/login', usuariosController.login)
	app.post('/api/auth/register', usuariosController.register);
	app.post('/api/auth/validateToken', usuariosController.verifyToken);
	app.get('/api/usuarios/list', usuariosController.list);
	app.get('/api/usuarios/find', usuariosController.findUserByUsername);

	// Juegos services
	app.post('/api/juegos/create', juegosController.create);
	app.get('/api/juegos/list', juegosController.list);
	app.get('/api/juegos/find', juegosController.findGameByName);
	app.get('/api/juegos/find/:level', juegosController.findGameByLevel);

	// Participacion services
	app.post('/api/participacion/create', participacionController.create);
	app.get('/api/participacion/list', participacionController.list);
	app.get('/api/participacion/find/:id', participacionController.findParticipacionById);

	// Ranking services
	app.post('/api/ranking/create', rankingController.initialRankSave);
	app.post('/api/ranking/update_total', rankingController.updateTotal);
	app.post('/api/ranking/update_billetes', rankingController.updateBilletes);
	app.post('/api/ranking/update_sumas', rankingController.updateSumas);
	app.post('/api/ranking/update_multi', rankingController.updateMultiplicacion);
	app.get('/api/ranking/list', rankingController.list);
	app.get('/api/ranking/find/:id', rankingController.findRankingByUsernameId);
};