'use strict';

angular.module('myApp.newKid', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/new-kid', {
            templateUrl: 'new-kid/new-kid.html',
            controller: 'NewKidCtrl'
        });
    }])

    .controller('NewKidCtrl', ['$scope', 'Restangular', '$location', function ($scope, Restangular, $location) {
        $scope.kid = {};

        $scope.cancelKid = function () {
            var confirmation = confirm("Are you sure that you want to go back to your family view?");
            if (confirmation) {
                $location.path('/kids/')
            }
        };
        
        $scope.addPhoto = function () {
            var file = document.getElementById('file').files[0],
                reader = new FileReader();
            reader.onload = function (e) {
                $scope.kid.photo = 'data:image/png;base64,' + btoa(e.target.result);
                $scope.$apply();
            };
            reader.readAsBinaryString(file);

        };

        $scope.addKid = function () {
            Restangular.all('new-kid/').customPOST($scope.kid).then(function () {
                alert("Mazel-Tov!!!!, your child has been created");
                document.getElementById('file').value = null;
                //$scope.$apply();
                $scope.kid.photo = null;
                $scope.kid = {};
                $location.path('/kids/');


            }, function () {
                alert("There was a problem creating your child. Try again.");

            });
        };
    }]);
