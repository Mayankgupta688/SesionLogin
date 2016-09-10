define('loginController', [], function() {

  var loginController = function($scope, $http, $rootScope, $location, $localStorage, $mdDialog) {

    var self = $scope;

    $scope.rootScope_ = $rootScope;

    $scope.location_ = $location;

    $scope.sessionStorage_ = $localStorage;

    $scope.authorizeUser = function() {
    	$http.post('/authorize', this.userDetails).then(function(details) {
    		if(details.data.isSuccess) {
    			if(details.data.user) {
    				self.sessionStorage_.user = "Mayank";
    				self.rootScope_.loginInfo = "User Is Logged In"
    				self.location_.path('/');
            $scope.cancel();
    			} else {
            $scope.authenticationFailure = true;
          }
    		} else {
          $scope.isSystemFailure = true;
        }
    	});
    }

    $scope.resetModel = function() {
      $scope.userDetails = {
        userName: '',
        password: ''
      };
      $scope.authenticationFailure = false;
      $scope.isSystemFailure = false;
    }

    $scope.cancel = function() {
      $mdDialog.cancel();

    };

    $scope.resetModel();
  };

  return loginController;
});
