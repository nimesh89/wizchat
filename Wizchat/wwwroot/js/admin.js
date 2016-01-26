angular.module("main", []).value("container", {}).run(["$http", "container", function ($http, container) {
    var proxy = $.connection.chatHub;
    container.proxy = proxy;

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
    $scope.container = container;
    container.proxy.client.addUser = function (name) {
        $timeout(function () {
            $scope.users.push(name);
        }, 10, true);
    }
}]).controller("messagectrl", ["$scope", "$http", "container", "$timeout", function ($scope, $http, container, $timeout) {
    var messages = [];

    container.proxy.client.addNewMessage = function (from, message) {
        $timeout(function () {
            messages.push({ from: from, message: message });
            $scope.messageDisplay = ($scope.messageDisplay || "") + (messages.length === 1 ? "" : "\n") + from + ":" + message;
        }, 10, true);
    }
}]).controller("sendmessage", ["container", "$scope", function (container, $scope) {
    $scope.send = function () {
        container.proxy.server.send(container.selecteduser, "admin", $scope.message);
        $scope.message = "";
    }
}]);