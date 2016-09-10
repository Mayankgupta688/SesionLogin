(function(controller) {

	var apiController = require("./apiController");
	var routeController = require("./routeController");


	controller.init = function(app) {
		apiController.init(app);
		routeController.init(app);
	};

})(module.exports)