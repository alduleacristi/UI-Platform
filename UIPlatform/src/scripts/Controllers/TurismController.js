app.controller("TurismController", ["$scope","$resource", function ($scope, $resource) {
    console.info($resource)
    $scope.$on('$viewContentLoaded', function () {
        console.info("In initialize...");
        console.info($resource)
        /*var city = $resource('http://192.168.209.135:8082/platform-server/api/city', {}, {
            query: { method: 'GET', isArray:true}
        });
        city.get(function (citys) {
            console.info(citys)
        });*/
    });

    $scope.myData = [
   {
       "firstName": "Cox",
       "lastName": "Carney",
       "company": "Enormo",
       "employed": true
   },
   {
       "firstName": "Lorraine",
       "lastName": "Wise",
       "company": "Comveyer",
       "employed": false
   },
   {
       "firstName": "Nancy",
       "lastName": "Waters",
       "company": "Fuelton",
       "employed": false
   }
    ];

    $scope.grid = {
        data: $scope.myData
    };
}]);