(function(userAuthorize) {

	var database = require('./database');

	userAuthorize.searchUser = function(userDetails, next) {
		database.getDb(function(err, db) {
			if(err) {
				next(err, null);
			} else {
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

	userAuthorize.addUser = function(userDetails, next) {
		database.getDb(function(err, db) {
			if(err) {
				next(err, null);
			} else {
				db.userDetails.findOne({username: userDetails.username}, function(err, result) {
					if(err) {
						next(err, null);
					} else {
						if(!result) {
							db.userDetails.insert({username: userDetails.username, password: userDetails.password}, function(err, result) {
								next(null, userDetails);
							});
						} else {
							userDetails.alreadyExists = true;
							next(null, userDetails);
						}
					}
				});
			}
		})
	}

})(module.exports)