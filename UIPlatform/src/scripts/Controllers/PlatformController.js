app.controller("PlatformController", ["$scope", "$rootScope", function ($scope, $rootScope) {
    /*$scope.$on('$routeChangeSuccess', function () {
        console.info("gettting geolocation...");
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.curr_coord = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            });
        } else {
            console.info("Geolocation is not available...")
        }
    });*/

    $scope.map = { center: { latitude: 45.65288, longitude: 25.61184 }, zoom: 11 };
}]);