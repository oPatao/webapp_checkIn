const express = require('express');
const router = express.Router();

const checkinController = require('../controllers/checkinController');
const loginController = require('../controllers/loginController');
const queueController = require('../controllers/queueController');

function estaAutenticado(req, res, next) { //autenticacao de que ss, esta logado
    if (req.session.userId) {
      next();
    } else {
      res.redirect('/login');
    }
}

router.get('/', checkinController.indexView);
router.get('/registro', checkinController.telaRegistro);
router.post('/registro', loginController.registro);
router.get('/login', checkinController.telaLogin);
router.post('/login', loginController.login );

router.get('/queue', estaAutenticado, queueController.getQueue);


module.exports = router;