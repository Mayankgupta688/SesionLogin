(function(controller) {

	var routeController = require("./routeController");

	controller.init = function(app) {
		routeController.init(app);
	};

})(module.exports)