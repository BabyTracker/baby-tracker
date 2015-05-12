'use strict';

angular.module('myApp.kidView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kid-view', {
            templateUrl: 'kid-view/kid-view.html',
            controller: 'KidViewCtrl'
        });
    }])

    .controller('KidViewCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
        Restangular.all('updates').getList().then(function (updates) {
            $scope.updates = updates;
        })

    }]);