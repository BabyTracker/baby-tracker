'use strict';

angular.module('myApp.updates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/updates', {
    templateUrl: 'updates/updates.html',
    controller: 'UpdatesCtrl'
  });
}])

.controller('UpdatesCtrl', ['$scope','Restangular', function($scope, Restangular){
    Restangular.all('updates').getList()
        .then(function(updates){
          $scope.updates = updates;

        })
}]);