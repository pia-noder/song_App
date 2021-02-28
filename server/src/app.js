//Fichier où est Définit l'application web

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

//Création de endpoints
app.post('/register', (req, res, next) => {
    res.send({message: 'your user was registered !'});
});

app.get('/posts', (req,res, next) => {
    res.send({message: 'Affichage de touts les posts'});
});

module.exports = app;