(function(apiController) {

	apiController.init = function(app) {
		console.log('Called');
		
		app.post('/authorize', function(req, res) {
			var userDetails = {
				username: req.body.username,
				password: req.body.password
			};

			var authorizeUser = require('../data/authorizeUser');

			authorizeUser.searchUser(userDetails, function(err, details) {
				var responseData = {};
				if(err) {
					responseData = { isSuccess: false, errorMessage: 'Not able to Log In, Internal Error' }
				} else {
				  responseData = { isSuccess: true, user: details }
				}
				res.send(responseData);
			});

		});
	};

})(module.exports);