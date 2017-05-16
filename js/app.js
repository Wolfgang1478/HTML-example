'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('hospitalelmilagroso',['ngRoute','ui.bootstrap']);
app.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'partials/index.html',
    controller:'indexCtrl'
  });

  $routeProvider.when('/crearPaciente',{
    templateUrl: 'partials/crearPaciente.html',
    controller:'crearPacienteCtrl'
  });

  $routeProvider.when('/mostrarPacientes',{
    templateUrl: 'partials/mostrarPacientes.html',
    controller:'mostrarPacientesCtrl'
  });

  $routeProvider.when('/mostrarMedicos',{
    templateUrl: 'partials/mostrarMedicos.html',
    controller:'mostrarMedicosCtrl'
  });

  $routeProvider.when('/crearMedico',{
    templateUrl: 'partials/crearMedico.html',
    controller:'crearMedicoCtrl'
  });

  $routeProvider.when('/crearCalendarioMedico',{
    templateUrl: 'partials/crearCalendarioMedico.html',
    controller:'crearCalendarioMedicoCtrl'
  });

  $routeProvider.when('/crearCitaMedica',{
    templateUrl: 'partials/crearCitaMedica.html',
    controller:'crearCitaMedicaCtrl'
  });


  $routeProvider.otherwise({redirectTo:"/"});

}])
