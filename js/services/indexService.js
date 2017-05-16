'use strict';

app.factory('indexService',function($http,$location){
    return {
        leerPacientes: function(scope){
            var $verificarData = $http.get("http://localhost:8080/elmilagroso/webresources/com.mycompany.elmilagroso.paciente");
            $verificarData.then(function(msg){
                scope.listaPacientes = msg.data;
                   
            });
        },
        crearPaciente: function(pacienteData,scope){

           
           
 // use $.param jQuery function to serialize data from JSON 
            var data = {
                cedula: pacienteData.cedula,
                nombre: pacienteData.nombre,
                apellido:  pacienteData.apellido,
                direccion: pacienteData.direccion,
                telefono: pacienteData.telefono,
            };
        
            $http.post('http://localhost:8080/elmilagroso/webresources/com.mycompany.elmilagroso.paciente', data).then(function (response) {
                scope.mensajePost="Pacinte guardado";
            }, function (response) {
                scope.mensajePost="Error al guardar paciente nuevo";
            });         
          
        },

        leerMedicos: function(scope){
            var $verificarData = $http.get("http://localhost:8080/elmilagroso/webresources/com.mycompany.elmilagroso.medico");
            $verificarData.then(function(msg){
                scope.listaMedicos = msg.data;
                   
            });
        },

        crearMedico: function(medicoData,scope){    
 // use $.param jQuery function to serialize data from JSON 
            var data = {
                idMedico: medicoData.idMedico,
                nombre: medicoData.nombre,
            };
        
            $http.post('http://localhost:8080/elmilagroso/webresources/com.mycompany.elmilagroso.medico', data).then(function (response) {
                scope.mensajePost="Medico guardado";
            }, function (response) {
                scope.mensajePost="Error al guardar medico nuevo";
            });         
          
        },
        crearCalendarioMedico: function(calendarioMedicoData,scope){    
 // use $.param jQuery function to serialize data from JSON 
            var data = {
                FechaYHora_idFechaYHora: calendarioMedicoData.FechaYHora_idFechaYHora,
                Medico_idMedico: calendarioMedicoData.Medico_idMedico,
            };
        
            $http.post('http://localhost:8080/elmilagroso/webresources/com.mycompany.elmilagroso.calendariomedico', data).then(function (response) {
                scope.mensajePost="Calendario Medico guardado";
            }, function (response) {
                scope.mensajePost="Error al guardar calendario medico nuevo";
            });         
          
        },

        crearCitaMedica: function(citaMedicaData,scope){    
 // use $.param jQuery function to serialize data from JSON 
            var data = {
                idCitaMedica: citaMedicaData.idCitaMedica,
                Paciente_cedula: citaMedicaData.Paciente_cedula,
                CalendarioMedico_FechaYHora_idFechaYHora: citaMedicaData.CalendarioMedico_FechaYHora_idFechaYHora,
                CalendarioMedico_Medico_idMedico: citaMedicaData.CalendarioMedico_Medico_idMedico,
                CalendarioConsultorio_Consultorio_idConsultorio: citaMedicaData.CalendarioConsultorio_Consultorio_idConsultorio,
                CalendarioConsultorio_FechaYHora_idFechaYHora: citaMedicaData.CalendarioConsultorio_FechaYHora_idFechaYHora
            };
        
            $http.post('http://localhost:8080/elmilagroso/webresources/com.mycompany.elmilagroso.citamedica', data).then(function (response) {
                scope.mensajePost="Cita medica guardada";
            }, function (response) {
                scope.mensajePost="Error al guardar la nueva cita medica";
            });         
          
        }

    }

});