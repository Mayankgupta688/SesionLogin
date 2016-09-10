define('homeController', [], function(loginController) {

  var homeController = function($scope, $localStorage, $location, $rootScope, $mdDialog, authenticationService) {

    var self = this;

  	var loginController = require('loginController');

  	self.rootScope_ = $rootScope;

    self.location_ = $location;

    self.localStorage_ = $localStorage;

    self.user = self.localStorage_.user.username ? self.localStorage_.user.username: 'Guest';

    $scope.$on('loggingInfo', function() {
      self.user = self.localStorage_.user.username ? self.localStorage_.user.username: 'Guest';
    });

  };

  return homeController;
});
