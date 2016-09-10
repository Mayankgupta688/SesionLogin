var express = require('express');

var bodyParser = require('body-parser');

var vash = require('vash');

var app = express();

app.set('view engine', 'vash');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var controller = require('./controller');

controller.init(app);

app.listen(4000);
