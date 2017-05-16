'use strict';
app.controller('crearCitaMedicaCtrl',['$scope','indexService','$log',function($scope, indexService,$log){
    $scope.citamedica = {};
    $scope.crearCitaMedica = function(){
        indexService.crearCitaMedica($scope.citamedica, $scope);
    }

}]);