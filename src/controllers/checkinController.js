const Usuario = require('../models/usuario');
const { login } = require('./loginController');
const queueController = require('../controllers/queueController');



function indexView(req, res){
    res.render('index.html');
}

function criarContaView(req, res){
    res.render('testeCadastro.html');
}

function acessoView(req, res){
    res.render('home.html');
}

function telaRegistro(req, res){
    res.render('registro.html');

}
function telaLogin(req, res){
    res.render('login.html');
}






module.exports = {
    indexView,
    criarContaView,
    acessoView,
    telaRegistro,
    telaLogin
}