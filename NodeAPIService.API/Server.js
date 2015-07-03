﻿var body_parser = require('body-parser'); 
var path = require('path'); 
var express = require('express'); 
var http = require('http'); 
var porta = 8080;
var operacoes_filme = require('./filme-module.js'); 

var app = express(); 
app.use(body_parser());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:29301'); //Porta do site que vai chamar a API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/Locadora/api/filmes/:id', operacoes_filme.getById);
app.get('/Locadora/api/filmes', operacoes_filme.get);
app.post('/Locadora/api/filmes', operacoes_filme.add);
app.put('/Locadora/api/filmes/:id', operacoes_filme.put);
app.delete('/Locadora/api/filmes/:id', operacoes_filme.delete);

app.listen(porta);