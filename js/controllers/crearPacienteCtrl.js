'use strict';
app.controller('crearPacienteCtrl',['$scope','indexService','$log',function($scope, indexService,$log){
    $scope.paciente = {};
    $scope.crearPaciente = function(){
        indexService.crearPaciente($scope.paciente, $scope);
    }

}]);