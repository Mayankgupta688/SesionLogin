define('loginController', [], function() {

  var loginController = function($scope, $location, $mdDialog, authenticationService) {

    var self = $scope;

    $scope.location_ = $location;

    $scope.authorizeUser = function() {
      authenticationService.authorizeUser(self.userDetails, self.authorize);
    };

    $scope.signUp = function() {
      authenticationService.addUser(self.userDetails, self.authorize);
    };

    $scope.authorize = function(details) {
      if(details.data.isSuccess) {
        if(details.data.user) {
          self.location_.path('/');
          $scope.cancel();
        } else {
          $scope.authenticationFailure = true;
        }
      } else {
        $scope.isSystemFailure = true;
      }
    };

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
