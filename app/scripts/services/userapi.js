'use strict';

/**
 * @ngdoc service
 * @name proyectoMapsApp.userApi
 * @description
 * # userApi
 * Factory in the proyectoMapsApp.
 */
angular.module('viviApp')
    .factory('signupApi', function($resource, config) {
        var StoreData = $resource(config.url + '/user', {
            id: '@id'
        }, {
            save: {
                method: 'POST',
                isArray: false
            }
        });
        return StoreData; 
    }).factory('loginApi', function($resource, config) {

        var StoreData = $resource(config.url + '/oauth/token', {
            id: '@id'
        }, {
            auth: {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0' },
            }
        });
        return StoreData; 
    }).factory('refreshToken', function($resource, config) {

        var StoreData = $resource(config.url + '/oauth/token', {
            id: '@id'
        }, {
            getNew: {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0' },
            }
        });
        return StoreData; 
    });