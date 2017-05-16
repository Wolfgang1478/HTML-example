app.controller('mostrarMedicosCtrl',['$scope','indexService',function($scope,indexService){
    
    indexService.leerMedicos($scope);
    

}]);