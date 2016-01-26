angular.module("main", [])
    .value("container", {})
    .run(["container", function (container) {

        var proxy = $.connection.chatHub;

        $.connection.hub.start()
        .done(function () { console.log('Now connected, connection ID=' + $.connection.hub.id); })
        .fail(function () { console.log('Could not Connect!'); });

        container.proxy = proxy;
    }])
    .controller("userlogin", ["$http", "$scope", "container", function ($http, $scope, container) {
        $scope.alreadysignin = false;

        $scope.signin = function () {
            container.currentuser = $scope.username;
            $http.post("/api/user", { connectionid: $.connection.hub.id, name: $scope.username });
        }
    }])
    .controller("sendmessage", ["container", "$scope", function (container, $scope) {
        $scope.send = function () {
            container.proxy.server.send("admin", container.currentuser, $scope.message);
            $scope.message = "";
        }
    }])
    .controller("messagectrl", ["$scope", "$http", "container", "$timeout", function ($scope, $http, container, $timeout) {
        var messages = [];

        container.proxy.client.addNewMessage = function (from, message) {
            $timeout(function () {
                messages.push({ from: from, message: message });
                $scope.messageDisplay = ($scope.messageDisplay || "") + (messages.length === 1 ? "" : "\n") + from + ":" + message;
            }, 10, true);
        }
    }]);