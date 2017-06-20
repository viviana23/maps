'use strict';

/**
 * @ngdoc function
 * @name proyectoMapsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the proyectoMapsApp
 */
angular.module('viviApp')
    .controller('LoginCtrl', function($scope, $http, $location, loginApi, $httpParamSerializer) {
        $scope.email = "admin";
        $scope.password = "admin";
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer' },

        $scope.doLogin = function() {

            loginApi.auth($httpParamSerializer({ username: $scope.email, password: $scope.password, grant_type: 'password' }), function(data) {
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                localStorage.setItem('accessTokenExpiresAt', data.accessTokenExpiresAt);
                localStorage.setItem('refreshTokenExpiresAt', data.refreshTokenExpiresAt);
                $location.url("/dashboard");
            });
        }
    });
