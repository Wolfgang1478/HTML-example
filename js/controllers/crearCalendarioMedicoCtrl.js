'use strict';
app.controller('crearCalendarioMedicoCtrl',['$scope','indexService','$log',function($scope, indexService,$log){
    $scope.calendarioMedico = {};
    $scope.crearCalendarioMedico = function(){
        indexService.crearCalendarioMedico($scope.calendarioMedico, $scope);
    }

}]);