const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/Pergunta");
//Database

connection.authenticate()
.then(() => {
    console.log('Conexão feita com o banco de dados');
})
.catch((msgErro) => {
    console.log(msgErro);
})

//Estou dizendo pro Express usar ejs como view engine
app.set('view-engine', 'ejs');
app.use(express.static("public"));
//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',function (req, res) {
    res.render('index.ejs');
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar.ejs");
})

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send("Formulário recebido! Título: " + titulo + " Descrição: " + descricao);
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})