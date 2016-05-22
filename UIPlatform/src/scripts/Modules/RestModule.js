var restModule = angular.module('restModule', ['restangular']);

restModule.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl(
        'http://192.168.209.139:8082/platform-server/api');
});

restModule.factory('Region', function (Restangular) {
    return Restangular.service('region');
});

restModule.factory('IngestRegion', function (Restangular) {
    return Restangular.service('ingest/region');
});