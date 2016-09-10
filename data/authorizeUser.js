(function(userAuthorize) {

	var database = require('./database');

	userAuthorize.searchUser = function(userDetails, next) {
		database.getDb(function(err, db) {
			if(err) {
				next(err, null);
			} else {
				console.log(userDetails.username);
				db.userDetails.findOne({username: userDetails.username, password: userDetails.password}, function(err, result) {
					if(err) {
						next(err, null);
					} else {
						next(null, result);
					}
				});
			}
		})
	}

})(module.exports)