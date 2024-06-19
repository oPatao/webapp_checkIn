const { Usuario } = require('../models/usuario');
const bcrypt = require('bcrypt');

// Controlador de Registro
exports.registro = async (req, res) => {
  const { nome, telefone, email, password, Ningresso } = req.body;
  console.log('dados recebidos: ', {nome,telefone,email,password,Ningresso});
 

  try {
    const senhaCripto = await bcrypt.hash(password, 10);
    console.log('senha criptografada!');

    await Usuario.create({
      nome,
      telefone,
      email,
      password: senhaCripto,
      Ningresso
    });
    res.send('Registro bem-sucedido!');
  } catch (error) {
    console.error('erro no registro do usuario:', error);
    res.status(400).send('erro no registro do usuario.');
  }
};

// Controlador de Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Tentando fazer login com:', { email, password });

  try {
    const user = await Usuario.findOne({ where: { email } });
    console.log('Usuário encontrado:', user);

    if (user) {
      console.log('Senha no banco de dados:', user.password);
      const match = await bcrypt.compare(password, Usuario.password);

      if (match) {
        res.send(`Bem-vindo, ${user.name}! Seu número de ingresso é ${user.Ningresso}.`); // Exibir número de ingresso
      } else {
        res.status(400).send('Email ou senha incorretos.');
      }
    } else {
      res.status(400).send('Email ou senha incorretos.');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).send('Erro ao fazer login.');
  }
};