define('homeController', [], function(loginController) {

  var homeController = function($scope, $localStorage, $location, $rootScope, $mdDialog, $http) {

  	var loginController = require('loginController');

  	this.rootScope_ = $rootScope;

    this.location_ = $location;

    this.sessionStorage_ = $localStorage;

  	this.user = $localStorage.user;
    if(this.user != 'Guest') {
    		$rootScope.loginInfo = "User Is Logged In"
    }

    this.resetUserForm = function() {
    	this.userDetails = {
	    	userName: '',
	    	password: ''
	    };
    }

    this.userDetails = {
    	userName: '',
    	password: ''
    };

    this.showLoginDialog = function(ev) {
    	this.resetUserForm();
	    $mdDialog.show({
	    	controller: loginController,
	      templateUrl: 'content/login.vash',
	      parent: angular.element(document.body),
	      clickOutsideToClose:false,
	    });
    }

  };

  return homeController;
});
