$(function() {
    var proxy = $.connection.chatHub;

    proxy.addMessage = function(to, from, message) {
        alert("" + from + " " + message);
    }

    $.connection.hub.start()
    .done(function () { console.log('Now connected, connection ID=' + $.connection.hub.id); })
    .fail(function () { console.log('Could not Connect!'); });
});

angular.module("main", []).controller("userlogin", ["$http", "$scope", function ($http, $scope) {
    $scope.alreadysignin = false;

    $scope.signin = function() {
        $http.post("/api/user", { connectionid: $.connection.hub.id, name: $scope.username });
    }
}]);