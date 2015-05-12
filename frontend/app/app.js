'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.kids',
    'myApp.updates',
    'myApp.view2',
    'myApp.kidView',
    'myApp.version',
    'restangular'
]).
    config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
        $routeProvider.otherwise({redirectTo: '/kids'});

        RestangularProvider.setBaseUrl('http://localhost:8081');
    }]);
