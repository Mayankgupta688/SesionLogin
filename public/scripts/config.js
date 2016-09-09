require.config({
  paths: {
    app: 'app',
    homeController: 'homeController',
    angular: '../lib/angular/angular',
    loginController: 'loginController',
    angularRoute: '../lib/angular-route/angular-route',
    authorization: 'authorization'
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
  require(['app', 'homeController', 'loginController'], function(app, homeController, loginController) {
    app.controller('loginController', ['$scope', loginController]);
    app.controller('homeController', ['$scope', homeController]);
    angular.bootstrap(document, ['app']);
  });
});
