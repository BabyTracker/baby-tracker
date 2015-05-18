'use strict';

angular.module('myApp.updates', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kids/:kidId/updates', {
            templateUrl: 'updates/updates.html',
            controller: 'UpdatesCtrl'
        });
    }])

    .controller('UpdatesCtrl', ['$scope', 'Restangular', '$location', '$routeParams', function ($scope, Restangular, $location, $routeParams) {
        $scope.update = {};

        $scope.kidId = $routeParams.kidId;

        $scope.kid = {age: {years: null, months: null, days: null}};

        function CalcAge(date1,date2) {
            var diff = Math.floor(date1.getTime() - date2.getTime());
            var day = 1000 * 60 * 60 * 24;

            var diffDays = Math.floor(diff/day);
            //console.log(diffDays);

            var totalMonths = diffDays/30.25; // 16.1983

            var totalYears = Math.floor(diffDays / 364.25); // 1

            var leftoverMonths = Math.floor(totalMonths - (12 * totalYears));

            var leftoverDays = Math.floor(diffDays - (Math.floor(totalMonths)* 30.25));

            this.years = totalYears;
            this.months = leftoverMonths;
            this.days = leftoverDays;
        }


        Restangular.one('/kids/', $scope.kidId).customGET()
            .then(function (kid) {

                var today = new Date();
                var dateOfBirth = new Date(kid.date_of_birth);
                var age = new CalcAge(today, dateOfBirth);

                $scope.kid = kid;
                $scope.update.kid = kid.id;
                $scope.update.date = "";
                $scope.update.fullAge = {
                    years: age.years,
                    months:  age.months,
                    days:  age.days
                };
                $scope.update.age = age.years;

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
            Restangular.all('/kids/' + $scope.kidId + '/save-update/').customPOST($scope.update).then(function () {
                document.getElementById('file').value = null;
                $scope.$apply();
                $scope.update.photo = null;
                $scope.update = {};
                $location.path('/kids/')
            }, function () {
                alert("PROBLEMS");
            });
        };
    }]);