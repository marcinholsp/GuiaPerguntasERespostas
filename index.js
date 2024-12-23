const express = require("express");
const app = express();

//Estou dizendo pro Express usar ejs como view engine
app.set('view-engine', 'ejs');
app.use(express.static("public"));

app.get('/',function (req, res) {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})