(function(database) {

	var mongodb = require('mongodb');
	var mongoUrl = "mongodb://localhost:27017/Login";
	var theDb = null;

	database.getDb = function(next) {
		if (theDb) {
			next(null, theDb)	
		}
		else {
			mongodb.MongoClient.connect(mongoUrl, function(err, db) {
				if(err) {
					next(err, null)
				}
				else {
					theDb = {
						db: db,
						userDetails: db.collection('userDetails')
					};
				}
			})
		}
	}

})(module.exports);
