const { Sequelize } = require('sequelize');
const dbConfig = require('./database');

const sequelize = new Sequelize(dbConfig);

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Models sincronizadas.");
    })
    .catch(err => {
        console.error("Erro ao sincronizar", err);
    });

module.exports = sequelize;
