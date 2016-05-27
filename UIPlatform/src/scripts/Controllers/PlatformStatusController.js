app.controller("PlatformStatusController", function ($scope, Cluster) {
    Cluster.get("info").then(function (result) {
        $scope.clusterInfo = result.plain().clusterInfo;

        console.info("Cluster info: ", $scope.clusterInfo);
    }, function (status) {
        console.error("Failed to get data about cluster");
    });

    Cluster.get("metrics").then(function (result) {
        $scope.clusterMetrics = result.plain().clusterMetrics;

        console.info("Cluster metrics: ", $scope.clusterMetrics);
    }, function (status) {
        console.error("Failed to get data about cluster");
    });

    Cluster.get("nodes").then(function (result) {
        $scope.clusterNodes = result.plain().nodes;

        console.info("Cluster nodes: ", $scope.clusterNodes);
    }, function (status) {
        console.error("Failed to get data about cluster");
    });
});