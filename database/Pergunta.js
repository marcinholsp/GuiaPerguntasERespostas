const Sequelize = require('sequelize');
const connection = new Sequelize("guiaperguntas", "root", 'Ml011002!', {
    host: "localhost",
    dialect: "mysql"
});

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {
    console.log('Tabela criada');
}).catch((msgErro) => {
    console.log(msgErro);
});