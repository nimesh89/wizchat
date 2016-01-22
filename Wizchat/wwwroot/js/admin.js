angular.module("main", []).run(["$http", function ($http) {
    var proxy = $.connection.chatHub;

    proxy.client.addMessage = function (to, from, message) {
        alert("" + from + " " + message);
    }

    proxy.client.addUser = function (name) {
        alert(name);
    }

    $.connection.hub.start()
    .done(function () {
        console.log('Now connected, connection ID=' + $.connection.hub.id);
        $http.post("/api/AdminUser", { connectionid: $.connection.hub.id });
    })
    .fail(function () { console.log('Could not Connect!'); });
}]);