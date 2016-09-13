var app = angular.module('app', []);

var homeController = function($scope, $http) {

  var self = $scope;

  self.user = "Guest";
  self.details = {};
  self.details.username = "";
  self.details.password = "";


  self.authorizeUser = function() {
    $http.post('/authorize', self.details).then(function(details) {
      if(details.isAuthorised) {
        self.user = details.user;
      }
    });
  };

  self.logout = function() {
    $http.post('/logout').then(function() {
      self.user = "Guest";
    });
  }

};

app.controller('homeController', homeController);

