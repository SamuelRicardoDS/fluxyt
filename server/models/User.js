const sequelize = require('sequelize');
const database = require('./db');

const User = database.define('users', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false
    },  


})

//segue abaixo função que verifica se há alteração na tabela e faz a alteração
//User.sync({ alter: true });

module.exports = User;