var app = angular.module('mainApp', ['ngRoute', 'ngResource', 'ui.grid', 'crumble', 'uiGmapgoogle-maps']);

app.config(['$routeProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
            templateUrl: 'resources/templates/Home.html',
            controller: '',
            label: 'Home',
      })
      .when('/turism', {
          templateUrl: 'resources/templates/Turism.html',
          controller: 'TurismController',
          label: 'Turism',
      })
      .when('/platform', {
            templateUrl: 'resources/templates/Platform.html',
            controller: 'PlatformController',
            label: 'Platform',
      })
      .otherwise({
          redirectTo: '/'
      });
    //$locationProvider.html5Mode(true);
}]);

app.run(function ($rootScope, crumble) {
    $rootScope.$on('$routeChangeSuccess', function () {
        crumble.update();
        $rootScope.crumble = crumble
    });
})