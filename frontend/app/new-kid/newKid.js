'use strict';

angular.module('myApp.newKid', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new-kid', {
    templateUrl: 'new-kid/new-kid.html',
    controller: 'NewKidCtrl'
  });
}])

.controller('NewKidCtrl', [function() {

}]);