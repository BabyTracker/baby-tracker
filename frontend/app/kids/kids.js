'use strict';

angular.module('myApp.kids', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kids', {
    templateUrl: 'kids/kids.html',
    controller: 'KidsCtrl'
  });
}])

.controller('KidsCtrl', ['$scope','Restangular', function($scope, Restangular){
    Restangular.all('kids').getList()
        .then(function(kids){
          $scope.kids = kids;

        })
}]);