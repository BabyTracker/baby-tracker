'use strict';

angular.module('myApp.kidView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kid-view/:kidId', {
            templateUrl: 'kid-view/kid-view.html',
            controller: 'KidViewCtrl'
        });
    }])

    .controller('KidViewCtrl', ['$scope', 'Restangular', '$routeParams', function ($scope, Restangular, $routeParams) {
        $scope.kidId = $routeParams.kidId;

        Restangular.all('kids/'+ $scope.kidId +'/updates').getList().then(function (updates) {
            $scope.updates = updates;
        })

    }]);