(function () {
    'use strict';

    var app = angular.module('application', []);
    app.controller('demoController', function ($scope) {
        $scope.datas = [];
        $scope.data = {};
        $scope.addData = function (datas) {
            datas.push($scope.data);
            $scope.data = {};
        };
    });

    app.controller('demoController', function ($scope) {
        $scope.datas = [];
        $scope.data1 = {};
        $scope.addData = function (datas) {
            datas.push($scope.data);
            $scope.data = {};
        };
    });

    app.controller('demoController', function ($scope) {
        $scope.datas = [];
        $scope.data2 = {};
        // ฟังก์ชั่น เพิ่มข้อมูลลง datas
        $scope.addData = function (datas) {
            datas.push($scope.data);
            $scope.data = {};
        };
    });

    app.controller('demoController', function ($scope) {
        $scope.datas = [];       // เก็บข้อมูลทั้งหมดที่ถูกส่งจากฟอร์ม
        $scope.data3 = {};        // ข้อมูลที่ผูกกับ form
        // ฟังก์ชั่น เพิ่มข้อมูลลง datas
        $scope.addData = function (datas) {
            datas.push($scope.data);
            $scope.data = {};
        };
    });

})();