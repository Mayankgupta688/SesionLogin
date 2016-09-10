define('headerController', [], function() {

	var headerController = function($rootScope, $scope, authenticationService, $mdDialog, $localStorage) {

		var self = $scope;

		var loginController = require('loginController');

		self.rootScope_ = $rootScope;

		var isAuthenticated = authenticationService.isAuthenticated();

		if(isAuthenticated) {
			self.buttonText = 'Log Out';
		} else {
			self.buttonText = 'Log In';
		}

		$scope.$on('loggingInfo', function(event, user) {
      if(authenticationService.isAuthenticated()) {
				self.buttonText = 'Log Out';
			} else {
				self.buttonText = 'Log In';
			}
    });

		self.authenticateUser = function() {
			if(authenticationService.isAuthenticated()) {
				authenticationService.logout();
			} else {
				self.showLoginDialog();
			}
		};

    self.showLoginDialog = function(ev) {
	    $mdDialog.show({
	    	controller: loginController,
	      templateUrl: 'content/login.vash',
	      parent: angular.element(document.body),
	      clickOutsideToClose:false,
	    });
    }

	};

	return headerController;

});