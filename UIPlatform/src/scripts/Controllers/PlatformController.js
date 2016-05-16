app.controller("PlatformController", function ($scope, $rootScope, Region) {
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
                $scope.markers.push(marker)
                $scope.region.coords.points.push(polygonPoint);
                $scope.$apply();
            }
        }
    }
 
    $scope.polygons = [{
        id: 1,
        path: []
    }];
   
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

    $scope.region = {
        name: "",
        coords: {
            points: []
        }
    };
    $scope.alerts = [];

    $scope.saveRegion = function () {
        console.info("Save region was called...");

        if ($scope.region.name == "") {
            /*if ($scope.alerts.filter(function(e){ return e.id == "NameIsEmpty"})){
               $scope.alerts.push(nmeIsEmptyAlert);
            }*/
            $scope.alerts.push(nmeIsEmptyAlert);
            return;
        };

        console.info("Before post...")
        /*Region.post("region", $scope.region).then(function (result) {
            $scope.grid.data = result.plain()
            //$scope.$apply();
            console.info($scope.regions)
        });*/
        $scope.region.id = null;
        console.info("Region: ", $scope.region);
        Region.post($scope.region).then(function (result) {
            //$scope.grid.data = result.plain()
            //$scope.$apply();
            console.info(result.plain())
        });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    var nmeIsEmptyAlert = {
        type: 'danger', msg: "You must give a name to the region.", id:"NameIsEmpty"
    };
});