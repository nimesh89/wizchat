angular.module("main", []).value("container", {}).run(["$http", "container", function ($http, container) {
    var proxy = $.connection.chatHub;
    container.proxy = proxy;
    proxy.client.addNewMessage = function (from, message) {
        alert(from + " " + message);
    }

    //proxy.client.addUser = function (name) {
    //    alert(name);
    //}

    $.connection.hub.start()
    .done(function () {
        console.log('Now connected, connection ID=' + $.connection.hub.id);
        $http.post("/api/AdminUser", { connectionid: $.connection.hub.id });
    })
    .fail(function () { console.log('Could not Connect!'); });
}]).controller("userlist", ["$scope", "$http", "container", "$timeout", function ($scope, $http, container, $timeout) {
    $scope.users = [];

    container.proxy.client.addUser = function (name) {
        $timeout(function () {
            $scope.users.push(name);
        }, 10, true);
    }
}]);