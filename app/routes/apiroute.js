const express = require('express');
const ApiCrtl = require('../controllers/ApiController');

const Router = express.Router();

Router.get('/:key/:value',ApiCrtl.messageid)
    .post('/',ApiCrtl.message)
    .get('/tag/:key/:value',ApiCrtl.messagetag)
    .put('/',ApiCrtl.credential);

module.exports = Router;