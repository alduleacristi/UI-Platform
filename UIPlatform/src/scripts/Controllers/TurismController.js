app.controller("TurismController", function ($scope,$uibModal, Region, uiGridConstants) {
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
        rowHeight:45,
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
        }, {
            name: 'map',
            displayName: 'Map',
            cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-primary" ng-click="grid.appScope.openMap(row.entity)">Open</button></div>'
        }]/*,
        enableRowSelection: true,
        expandableRowTemplate: 'resources/templates/UiGridMap.html',
        expandableRowHeight: 500,*/
};

$scope.openMap = function (region) {
    console.log("Open map was called: ",region);

    var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'resources/templates/UiGridMap.html',
        controller: 'ModalMapController',
        size: 'lg',
        resolve: {
            region: region
        }
    });
};

    //$scope.grid.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
});