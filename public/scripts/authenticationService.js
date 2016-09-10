define('authenticationService', [], function(authenticationService) {

	var authenticationService = function($localStorage, $rootScope, $rootScope, $http) {

		this.localStorage_ = $localStorage;

		var self = this;

		this.rootScope_ = $rootScope;

		this.rootScope_.$on('authenticate', self.authorizeUser)

		this.getUserDetails_ = function() {
			if (this.localStorage_.user) {
				if (this.localStorage_.user.username) {
					this.rootScope_.loginInfo = "User Is Logged In";
					this.rootScope_.user = this.localStorage_.user.username;
					return true;
				} else {
					this.rootScope_.loginInfo = "User Is Signed Out";
					this.rootScope_.user = 'Guest';
					return false;
				}
			} else {
				this.rootScope_.loginInfo = "User Is Signed Out";
				this.rootScope_.user = 'Guest';
				return false;
			}
		};

		this.getUserName = function() {
			if (this.localStorage_.user) {
				if (this.localStorage_.user.username) {
					return this.localStorage_.user.username;
				} else {
					return 'Guest';
				}
			} else {
				return 'Guest';
			}
		}

		this.logout = function() {
      this.localStorage_.$reset();
      this.localStorage_.user = "Guest";
      this.rootScope_.loginInfo = "User Is Signed Out";
      self.rootScope_.$broadcast('loggingInfo');
    }

    this.addUser = function(details, next) {
    	$http.post('/addUser', details).then(function(details) {
    		console.log(details);
    		self.localStorage_.user = details.data.user;
    		next(details);
    		self.getUserDetails_();
    		self.rootScope_.$broadcast('loggingInfo');
    	});
    }

		this.authorizeUser = function(details, next) {
    	$http.post('/authorize', details).then(function(details) {
    		self.localStorage_.user = details.data.user;
    		next(details);
    		self.getUserDetails_();
    		self.rootScope_.$broadcast('loggingInfo');
    	});
    }

		this.getUserDetails_();

		this.isAuthenticated = function() {
			var authenticated = this.localStorage_.user;
			return !(authenticated == undefined || authenticated == 'Guest');
		}
	};

	return authenticationService;

});