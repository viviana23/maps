'use strict';

/**
 * @ngdoc overview
 * @name viviApp
 * @description
 * # viviApp
 *
 * Main module of the application.
 */
angular
    .module('viviApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMap'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/registry', {
                templateUrl: 'views/registry.html',
                controller: 'RegistryCtrl',
                controllerAs: 'registry'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    .factory('oauthHttpInterceptor', function() {
        return {
            request: function(config, refreshToken) {

                // This is just example logic, you could check the URL (for example)
                var expiresAt = new Date(localStorage.getItem('accessTokenExpiresAt')).getTime();
                var currentTime = new Date().getTime();
                if (config.headers.Authorization === 'Bearer') {
                    if (expiresAt > currentTime) {
                        config.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');

                    } else {
                        console.log("get refresh token")
                        refreshToken.getNew($httpParamSerializer({ refresh_token: localStorage.getItem('refresh_token'), grant_type: 'refresh_token' }), function(data) {
                            localStorage.setItem('access_token', data.access_token);
                            localStorage.setItem('refresh_token', data.refresh_token);
                            localStorage.setItem('accessTokenExpiresAt', data.accessTokenExpiresAt);
                            localStorage.setItem('refreshTokenExpiresAt', data.refreshTokenExpiresAt);
                            config.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
                        });

                    }
                }
                return config;
            }
        };
    }).config(function($httpProvider) {
        $httpProvider.interceptors.push('oauthHttpInterceptor');
    }).constant("config", {
        "url": "http://192.168.0.7:3000",
        "port": "80"
    })
