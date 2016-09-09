define('app', [], function(angular) {

  var angular = require("angular");
  var app = angular.module('app', ['ngRoute']);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'content/home.vash',
      controller: 'homeController',
      controllerAs: 'home'
    }).when('/login', {
      templateUrl: 'content/login.vash',
      controller: 'loginController',
      controllerAs: 'login'
    }).otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);

  app.run(function($rootScope) {
    $rootScope.loginInfo = "User Is Not Logged In"
    //$rootScope.$on("$locationChangeStart", function(event, next, current) {
    //  vra dat = "asdgdakd"
    //});
  })

  return app;

});
