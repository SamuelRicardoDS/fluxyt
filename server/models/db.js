const Sequelize = require('sequelize');

const sequelize = new Sequelize("fluxyDB", "root", "Macacorosa?1", {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});
//estas mensagens são só para desenvolvimento e devem ser retiradas em fase de produção
sequelize.authenticate().then(() => {
    console.log("Conexão estabelecida com sucesso! Graças a Deus!");
}).catch(err => {
    console.error("deu pra conectar na base de dados não meu fi:", err);
});

module.exports = sequelize;