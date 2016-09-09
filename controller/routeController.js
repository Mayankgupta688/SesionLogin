(function(routeConroller) {

	routeConroller.init = function(app) {
		app.get('/', function(req, res) {
		  res.render('layout', {});
		})

		app.get('/:name', function(req, res) {
		  res.render('layout', {});
		})

		app.get('/content/:page', function(req, res) {
		  res.render('content/' + req.params.page, {});
		});

	};

})(module.exports)
