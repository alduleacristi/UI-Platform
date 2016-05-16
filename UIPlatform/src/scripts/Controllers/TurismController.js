app.controller("TurismController", function ($scope, Region) {
    $scope.$on('$viewContentLoaded', function () {
        Region.getList().then(function (result) {
            $scope.grid.data = result.plain()
            //$scope.$apply();
            console.info($scope.regions)
        });
    });

    $scope.grid = {
        data: $scope.regions
    };
});