define('app', ['ngStorage'], function(angular) {

  var angular = require("angular");
  var app = angular.module('app', ['ngRoute', 'ngStorage', 'ngMaterial']);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'content/home.vash',
      controller: 'homeController',
      controllerAs: 'home'
    }).otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);

  return app;

});
