/* Controllers */
const usuariosController = require('../controllers/usuarios');
const billetesJuegosController = require('../controllers/billetesjuegos');
const participacionController = require('../controllers/participacion');
const rankingController = require('../controllers/ranking');
const auth = require ('../auth/authToken.js')

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Example project did not give you access to the api web services',
	}));

	// User services
	app.post('/api/auth/login', usuariosController.login)
	app.post('/api/auth/register', usuariosController.register);
	app.get('/api/usuarios/list', auth, usuariosController.list);
	app.get('/api/usuarios/find', auth, usuariosController.findUserByUsername);

	// Billetes juegos services
	app.post('/api/billetesjuegos/create', billetesJuegosController.create);
	app.get('/api/billetesjuegos/list', auth, billetesJuegosController.list);
	app.get('/api/billetesjuegos/find', auth, billetesJuegosController.findGameByName);
	app.get('/api/billetesjuegos/find/:level', auth, billetesJuegosController.findGameByLevel);

	// Participacion services
	app.post('/api/participacion/create', participacionController.create);
	app.get('/api/participacion/list', participacionController.list);
	app.get('/api/participacion/find/:id', participacionController.findParticipacionById);

	// Ranking services
	app.post('/api/ranking/create', rankingController.initialRankSave);
	app.patch('/api/ranking/update_billetes', auth, rankingController.updateBilletes);
	app.patch('/api/ranking/update_sumas', auth, rankingController.updateSumas);
	app.patch('/api/ranking/update_multi', auth, rankingController.updateMultiplicacion);
	app.get('/api/ranking/list', auth, rankingController.list);
	app.get('/api/ranking/find/', auth, rankingController.findRankingByUsername);
};