'use strict';

angular.module('myApp.kidView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kids/:kidId', {
            templateUrl: 'kid-view/kid-view.html',
            controller: 'KidViewCtrl'
        });
    }])

    .controller('KidViewCtrl', ['$scope', 'Restangular', '$routeParams', '$location', function ($scope, Restangular, $routeParams, $location) {
        $scope.kidId = $routeParams.kidId;

        Restangular.all('kids/' + $scope.kidId + "/updates/").customGET().then(function (updates) {
                $scope.updates = updates;
            }, function (error) {
                alert("There was an error")
            }
        )



    }]);