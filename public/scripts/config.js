require.config({
  paths: {
    app: 'app',
    homeController: 'homeController',
    angular: '../lib/angular/angular',
    loginController: 'loginController',
    angularRoute: '../lib/angular-route/angular-route',
    ngStorage: '../lib/ngstorage/ngStorage'
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
    app.controller('loginController', ['$scope', '$http', '$rootScope', '$location', '$localStorage', loginController]);
    app.controller('homeController', ['$scope', '$localStorage', '$location', '$rootScope', '$mdDialog', homeController]);
    angular.bootstrap(document, ['app']);
  });
});
