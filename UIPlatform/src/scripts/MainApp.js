var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
          templateUrl: 'resources/templates/Home.html',
          controller: ''
      })
      .otherwise({
          redirectTo: '/'
      });

    //$locationProvider.html5Mode(true);
});