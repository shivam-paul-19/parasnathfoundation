const express = require('express');
const app = express();
const path = require('path');

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, (req, res) => {
    console.log("port is listening to 8080");
});

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/about', (req,res) => {
    res.render('about.ejs')
});