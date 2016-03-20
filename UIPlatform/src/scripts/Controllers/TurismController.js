app.controller("TurismController", function ($scope, Region) {
    $scope.$on('$viewContentLoaded', function () {
        Region.getList().then(function (result) {
            $scope.items = result.plain()
            console.info($scope.items)
        });
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
});