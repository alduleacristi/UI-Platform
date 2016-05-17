app.controller("TurismController", function ($scope, Region, uiGridConstants) {
    var buildMap = function (minLat, maxLat, minLon, maxLon) {
        var map = {
            center: {
                latitude: (maxLat+minLat) / 2 , longitude: (minLon+maxLon)/2
            },
            zoom: 1,
            bounds: {},
        }

        return map;
    };

    $scope.$on('$viewContentLoaded', function () {
        
        Region.getList().then(function (result) {
            var resultData = result.plain();

            for (var i = 0; i < resultData.length; i++) {
                resultData[i].map = buildMap(resultData[i].minLat, resultData[i].maxLat, resultData[i].minLon, resultData[i].maxLon);
                console.log(resultData[i]);
            }
            $scope.grid.data = resultData;
            //$scope.$apply();
            console.info( $scope.grid.data)
        });
    });

    $scope.grid = {
        data: $scope.regions,
        paginationPageSizes: [10, 15, 20],
        paginationPageSize: 10,
        columnDefs: [{
            name: 'name', displayName: 'Name', width: '20%'
        }, {
            name: 'startYear', displayName: 'First Year', width: '10%'
        }, {
            name: 'endYear', displayName: 'Last Year', width: '10%'
        }, {
            name: 'maxLat',
            displayName: 'Max lat',
        }, {
            name: 'minLat',
            displayName: 'Min lat',
        }, {
            name: 'maxLon',
            displayName: 'Max lon',
        }, {
            name: 'minLon',
            displayName: 'Min lon',
        }],
        enableRowSelection: true,
        expandableRowTemplate: 'resources/templates/UiGridMap.html',
        expandableRowHeight: 500,
};

$scope.grid.onRegisterApi = function(gridApi) {
    // dynamic expandable rows
    gridApi.expandable.on.rowExpandedBeforeStateChanged($scope, function(row) {
        $scope.gridOptions.expandableRowHeight = 30 + row.entity.valueArray.length *130;
    });
};

    //$scope.grid.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
});