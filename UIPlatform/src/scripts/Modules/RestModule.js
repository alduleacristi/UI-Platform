﻿var restModule = angular.module('restModule', ['restangular']);

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

restModule.factory('Query', function (Restangular) {
    return Restangular.service('hive/query');
});
restModule.factory('UsedQuery', function (Restangular) {
    return Restangular.service('hive/usedQuery');
});