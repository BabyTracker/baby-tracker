'use strict';

angular.module('myApp.kidView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kids/:kidId', {
            templateUrl: 'kid-view/kid-view.html',
            controller: 'KidViewCtrl'
        });
    }])

    .controller('KidViewCtrl', ['$scope', 'Restangular', '$routeParams', function ($scope, Restangular, $routeParams) {
        $scope.kidId = $routeParams.kidId;

        Restangular.one('kids', $scope.kidId).getList().then(function (kid) {
            $scope.kid = kid;
        })

    }]);