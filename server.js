// Http is used to create Server to take up the requests
var http = require('http');

// Express act as a routing Engine
var express = require('express');

// Used as a templating engine
var vash = require('vash');

// Express is initialized to carry ot routing process
var app = express();

app.set("view engine", "vash");

app.use(express.static(__dirname + '/public'));

var controller = require("./controller");

controller.init(app);

// Server is created and express is used as a middleware to configure the routes
var server = http.createServer(app);

// Apllication is made to listen Http request at port 3000
app.listen(4000);
