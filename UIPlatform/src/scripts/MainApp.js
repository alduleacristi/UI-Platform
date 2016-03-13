var app = angular.module('mainApp', ['ngRoute', 'ngResource', 'ui.grid', 'crumble']);

app.config(function ($routeProvider, $locationProvider) {
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
      .otherwise({
          redirectTo: '/'
      });

    //$locationProvider.html5Mode(true);
});

app.run(function ($rootScope, crumble) {
    $rootScope.$on('$routeChangeSuccess', function () {
        crumble.update();
        $rootScope.crumble = crumble
    });
})