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

    res.redirect('/');
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
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        req.session.userId = user.id; // salva o ID do usuario na sessao
        res.redirect('/queue'); 
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