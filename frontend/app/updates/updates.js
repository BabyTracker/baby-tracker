'use strict';

angular.module('myApp.updates', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kids/:kidId/updates', {
            templateUrl: 'updates/updates.html',
            controller: 'UpdatesCtrl'
        });
    }])

    .controller('UpdatesCtrl', ['$scope', 'Restangular', '$location', '$routeParams', function ($scope, Restangular, $location, $routeParams) {
        $scope.kid = {
            updates: []
        };

        $scope.kidId = $routeParams.kidId;

        Restangular.all('/kids/' + $scope.kidId).getList()
            .then(function (updates) {
                $scope.updates = updates;

            });

        $scope.cancelUpdate = function () {
            var confirmation = confirm("Are you sure that you want to go back to your family view?");
            if (confirmation) {
                $location.path('/kids/')
            }
        };

        $scope.newPhoto = function () {
            var file = document.getElementById('file').files[0],
                reader = new FileReader();
            reader.onload = function (e) {
                $scope.update.photo = 'data:image/png;base64,' + btoa(e.target.result);
                $scope.$apply();
            };
            reader.readAsBinaryString(file);
        };

        $scope.saveUpdate = function () {
            Restangular.all('/kids/' + $scope.kidId + '/save-update/').customPOST($scope.kid).then(function () {
                //toastr.success("Memory made!");
                $scope.kid = {updates: []};
                $scope.update.photo = null;

                document.getElementById('file').value = null;
                $scope.$apply();
            }, function () {
                //toastr.error("This memory had some problems being created.");
            });
        };
    }]);