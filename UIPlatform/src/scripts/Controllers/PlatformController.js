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

    //$scope.map = { center: { latitude: 45.65288, longitude: 25.61184 }, zoom: 11 };
    /*$scope.map = {
        center: {
            latitude: -33.8,
            longitude: 151.2
        },
        zoom: 11,
        draw: null,
        polygons: []
    };

    $scope.startDrawing = function () {
        $scope.map.draw().then(function (path) {
            $scope.map.polygons.push({ path: path, fill: "#ff0000" });
        });
    };*/
    $scope.points = 

    $scope.map = {
        center: {
            latitude: 45.65288, longitude: 25.61184
        },
        zoom: 11,
        bounds: {},
        events: {
            click: function (map, eventName, originalEventArgs) {
                console.info("Click pressed...")
                var e = originalEventArgs[0];
                var lat = e.latLng.lat(), lon = e.latLng.lng();
                var marker = {
                    id: Date.now(),
                    coords: {
                        latitude: lat,
                        longitude: lon
                    }
                };
                var polygonPoint = {
                    latitude: lat,
                    longitude: lon
                };
                $scope.polygons[0].path.push(polygonPoint);
                $scope.markers.push(marker);
                $scope.$apply();
            }
        }
    }
    /*$scope.polygons = [
        {
            id: 1,
            path: [
                {
                    latitude: 50,
                    longitude: -80
                },
                {
                    latitude: 30,
                    longitude: -120
                },
                {
                    latitude: 20,
                    longitude: -95
                }
            ],
            stroke: {
                color: '#6060FB',
                weight: 3
            },
            editable: true,
            draggable: true,
            geodesic: false,
            visible: true,
            fill: {
                color: '#ff0000',
                opacity: 0.8
            }
        }
    ];*/
    $scope.polygons = [{
        id: 1,
        path: []
    }];
    /*$scope.markers = [{
        id: "Id 1",
        coords: {
            latitude: 50,
            longitude: -80
        },
    }];*/
    $scope.markers = [];
    $scope.markerOptions = { draggable: true }
    $scope.markerEvents = {
        drag: function (map, eventName, originalEventArgs) {
            console.info("Marker moved...", originalEventArgs.getGMarker().key, originalEventArgs.getGMarker().position.lat(), originalEventArgs.getGMarker().position.lng())
            $scope.polygons[0].path = [];
            $scope.markers.forEach(function (marker, index, array) {
                console.log(marker.coords);
                $scope.polygons[0].path.push(marker.coords);
            });
            $scope.$apply();
        }
    }
}]);