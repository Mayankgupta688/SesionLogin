var express = require('express');

var bodyParser = require('body-parser');

var session = require('client-sessions');

var vash = require('vash');

var app = express();

app.use(session({
	cookieName: 'session',
	secret: 'secretkey',
	duration: 2*60*1000,
	activeDuration: 60*1000
}));

app.use(function(req, res, next) {
	res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
})

app.set('view engine', 'vash');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var controller = require('./controller');

controller.init(app);

app.listen(4000);