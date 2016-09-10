require.config({
  paths: {
    app: 'app',
    homeController: 'homeController',
    angular: '../lib/angular/angular',
    loginController: 'loginController',
    angularRoute: '../lib/angular-route/angular-route',
    ngStorage: '../lib/ngstorage/ngStorage',
    authenticationService: 'authenticationService',
    headerController: 'headerController',
    headerDirective: 'headerDirective'

  },
  shim: {
    angular: {
      exports: 'angular'
    },
    angularRoute: {
      deps: ['angular']
    }
  }
});

require(['angularRoute'], function() {
  require(['app', 'homeController', 'loginController', 'authenticationService', 'headerController', 'headerDirective'],
    function(app, homeController, loginController, authenticationService, headerController, headerDirective) {
      app.service('authenticationService', authenticationService);
      app.controller('loginController', loginController);
      app.controller('homeController', homeController);
      app.controller('headerController', headerController);
      app.directive('header', headerDirective);
      angular.bootstrap(document, ['app']);
    });
});
