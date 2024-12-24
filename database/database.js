const Sequelize  = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", 'Ml011002!', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;