const express = require("express");
const app = express();

//Estou dizendo pro Express usar ejs como view engine
app.set('view-engine', 'ejs');

app.get('/',function (req, res) {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})