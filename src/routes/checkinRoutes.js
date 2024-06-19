const express = require('express');
const router = express.Router();

const checkinController = require('../controllers/checkinController');
const loginController = require('../controllers/loginController');

router.get('/', checkinController.indexView);
router.get('/criar_conta', checkinController.criarContaView);
router.get('/acessar', checkinController.acessoView);
router.get('/registro', checkinController.telaRegistro);
router.post('/registro', loginController.registro);
router.get('/login', checkinController.telaLogin);
router.post('/login', loginController.login );


module.exports = router;