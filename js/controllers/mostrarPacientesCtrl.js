app.controller('mostrarPacientesCtrl',['$scope','indexService',function($scope,indexService){
    
    indexService.leerPacientes($scope);
    

}]);