var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var apiroute = require('./routes/apiroute');

var App = express();



App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));

App.use(session({
    secret: 'jaredasch',
    saveUninitialized: true,
    resave: false
}));

App.use('/api',apiroute);


module.exports = App;