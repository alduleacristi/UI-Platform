app.controller("QueryManagerRegionController", function ($scope,$routeParams, Region,Query,UsedQuery, crumble) {
    var params = { regionId: $routeParams.regionId}
    Region.getList(params).then(function (result) {
        var array = result.plain();
        if (array == null || array == undefined || array.length <= 0) {
            $scope.noDataIsAvailable = true;
            crumble.update({ region: $scope.region });
        } else {
            $scope.noDataIsAvailable = false;
            $scope.region = array[0];
            crumble.update({ region: $scope.region });
        }
    }, function (result) {
        console.error("Failed to get data about region.", result);
    });

    $scope.grid = {
        data: $scope.usedQuerys,
        expandableRowTemplate: '<did><h4>Description of query:</h4><div>{{row.entity.query.description}}</div></div>',
        expandableRowHeight: 100,
        columnDefs: [{
            name: 'query.name', displayName: 'Name', width: '45%'
        }, {
            name: 'running', width: '110',
            displayName: 'Running',
            cellTemplate: '/resources/templates/spinnerTemplate.html'
        }]
    }

    $scope.$on('$viewContentLoaded', function () {
        Query.getList().then(function (result) {
            $scope.querys = result.plain();
            //$scope.grid.data = $scope.querys;
            console.info("Query: ", $scope.querys);
        }, function (result) {
            console.error("Failed to get data about region.", result);
        });

        UsedQuery.getList(params).then(function (result) {
            $scope.usedQuerys = result.plain();
            $scope.grid.data = $scope.usedQuerys;
            console.info("UsedQuerys: ", $scope.usedQuerys);
        }, function (result) {
            console.error("Failed to get data about region.", result);
        });
    });
});