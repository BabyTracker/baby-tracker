'use strict';

angular.module('myApp.kids', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kids', {
    templateUrl: 'kids/kids.html',
    controller: 'KidsCtrl'
  });
}])

.controller('KidsCtrl', ['$scope','Restangular', '$location', function($scope, Restangular, $location){
    Restangular.all('kids').getList()
        .then(function(kids){
          $scope.kids = kids;

        });

    $scope.addUpdate = function() {
        var confirmation = confirm("Let's create a new memory!");
        if(confirmation) {
                $location.path('/updates')
        }
    };
    $scope.cancelUpdate = function() {
        var confirmation = confirm("Are you sure that you want to go back to your family view?");
        if(confirmation) {
                $location.path('/updates')
        }
    };
}]);