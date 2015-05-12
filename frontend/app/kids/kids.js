'use strict';

angular.module('myApp.kids', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kids', {
    templateUrl: 'kids/kids.html',
    controller: 'KidsCtrl'
  });
}])

.controller('KidsCtrl', ['$scope','Restangular', '$location', function($scope, Restangular, $location){

    Restangular.all('/kids/').getList()
        .then(function(kids){
          $scope.kids = kids;

        });

    $scope.addUpdate = function(kid) {
        var confirmation = confirm("Let's create a new memory!");
        if(confirmation) {
                $location.path('/kids/' + kid.id + '/updates')
        }
    };

}]);