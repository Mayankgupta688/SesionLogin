(function(routeConroller) {

	function requireLogin(req, res, next) {
		if(!req.session.user) {
			console.log("require ");
			res.redirect('/');
		} else {
			next();
		}
	};

	routeConroller.init = function(app) {

		app.post('/authorize', function(req, res) {
			var userDetails = {
				username: req.body.username,
				password: req.body.password
			};


			userDetails.isAuthorised = true;

			req.session.user = userDetails;

			console.log(req.session.user)

			res.send(userDetails);
		});

		app.post('/logout', function(req, res) {
			console.log("Logout")
			req.session.user = null;
			console.log(req.session);
			res.send({logout: true});
		});


		app.get('/', function(req, res) {
		  res.render('layout', {});
		});


		app.use(function(req, res, next) {
			if(!req.session.user) {
				console.log(req.session.user);
				res.redirect('/');
			} else{
				next();
			}
		})


		app.get('/dashboard', function(req, res) {
			res.render('dashboard');
		});

	};

})(module.exports)
