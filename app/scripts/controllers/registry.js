'use strict';

/**
 * @ngdoc function
 * @name proyectoMapsApp.controller:RegistryCtrl
 * @description
 * # RegistryCtrl
 * Controller of the proyectoMapsApp
 */
angular.module('viviApp')
    .controller('RegistryCtrl', function($scope, $http, signupApi) {


        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                $scope.pos = { 'latitude': position.coords.latitude, 'longitude': position.coords.longitude };
                console.log("hola si sirvio")

            });
        } else {
            $scope.pos = null;
            console.log("hola no sirvio")
        }

         $scope.check = function() {
        	console.log("click bb")
            var passValue = $scope.password;
            var passValueConfirm = $scope.password2;

            if (passValue === passValueConfirm) {
                /**
                swal({ title: "Desea eliminar esta Zona?", type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Si, Eliminar!", closeOnConfirm: false },
                    function() {
                        eventosApi.destroy({ id: $scope.id, act: 'etapa', id2: $scope.eef.id },
                            function(data) {

                                $scope.eef = {};
                                $scope.buttons.register = "Guardar";
                                swal("Etapa Eliminada!", "", "success");
                            });
                        $scope.myvalue = false;
                    });
				**/
                signupApi.save({ user: $scope.email, password: $scope.password, position: $scope.pos })
            }


        };
    });
