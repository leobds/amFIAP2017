var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');

consign()
    .include('app/routes')
    .into(app);

module.exports = app;