'use strict';
app.controller('crearMedicoCtrl',['$scope','indexService','$log',function($scope, indexService,$log){
    $scope.medico = {};
    $scope.crearMedico = function(){
        indexService.crearMedico($scope.medico, $scope);
    }

}]);