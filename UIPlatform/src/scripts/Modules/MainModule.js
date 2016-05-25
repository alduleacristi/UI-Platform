var app = angular.module('mainApp', ['ngRoute', 'ngResource', 'ui.grid', 'ui.grid.pagination', 'crumble', 'uiGmapgoogle-maps', 'ui.bootstrap', 'highcharts-ng', 'restModule', 'angularSpinner', 'ui.grid.expandable', 'restangular']);

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
      .when('/turism/:regionId', {
             templateUrl: 'resources/templates/TurismRegion.html',
             controller: 'TurismRegionController',
             label: 'Region'
       })
      .when('/platform', {
            templateUrl: 'resources/templates/PlatformStatus.html',
            controller: 'PlatformStatusController',
            label: 'Platform',
      })
      .when('/platform/status', {
            templateUrl: 'resources/templates/PlatformStatus.html',
            controller: 'PlatformStatusController',
            label: 'Status'
      })
      .when('/platform/newRegion', {
          templateUrl: 'resources/templates/PlatformNewRegion.html',
          controller: 'PlatformNewRegionController',
          label: 'Add new region'
      })
      .when('/platform/queryManager', {
             templateUrl: 'resources/templates/QueryManager.html',
             controller: 'QueryManagerController',
             label: 'Query manager'
      })
      .when('/platform/queryManager/:regionId', {
            templateUrl: 'resources/templates/QueryManagerRegion.html',
            controller: 'QueryManagerRegionController',
            label: '{{region.name}}'
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

var DATABASE_NAME = "turism";