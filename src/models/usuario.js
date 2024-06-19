const { Sequelize, DataTypes } = require('sequelize');

// Conecte-se ao banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Definição do modelo Usuário
const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Ningresso: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
});

// Sincronizar os modelos com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Sincronização do banco de dados concluída.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });


module.exports = {
  Usuario,
  sequelize
};