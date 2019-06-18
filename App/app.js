(function () {
    'use strict';
     
    var app = angular.module('application', []);
    app.controller('storeController', ['$scope', function ($scope) {
        $scope.sushis = [
            {
                name: 'Maguro',
                price: 200,
                description: "Fat Tuna",
                quantity: 0,
                image:  'home/c-arg-dev-034/Desktop/maguro.jpg'
            },
            {
                name: 'Tamago',
                price: 120,
                description: "Rice With Egg",
                quantity: 0,
                image: '../image/sushi/ebi.jpg'
            },
            {
                name: 'Ebi',
                price: 150,
                description: "Rice With shrimp",
                quantity: 0,
                image: '../image/sushi/ebi.jpg'
            }
        ];
        $scope.purchase = function (item) {
            if (item.quantity > 0) {
                return true;
            } else {
                return false;
            }
        };
        $scope.clickAdd = function (item) {
            item.quantity += 1;
        };
        $scope.clickRemove = function (item) {
            if (item.quantity > 0) {
                item.quantity -= 1;
                return true;
            } else {
                return false;   
            }
        };
    }]);
     
})();

