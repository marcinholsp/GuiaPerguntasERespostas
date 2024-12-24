const express = require("express");
const app = express();

//Estou dizendo pro Express usar ejs como view engine
app.set('view-engine', 'ejs');
app.use(express.static("public"));

app.get('/',function (req, res) {
    res.render('index.ejs');
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar.ejs");
})

app.post("/salvarpergunta", (req, res) => {
    res.send("Formulário recebido!");
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})