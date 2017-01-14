var app = angular.module('example', ['ngRoute', 'angularStyle']);

app.controller('main', ['$scope',
    function($scope) {
        $scope.message = "This is an Angular Style example app";
    }
]);
