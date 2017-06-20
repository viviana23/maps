'use strict';

/**
 * @ngdoc service
 * @name proyectoMapsApp.apiRest
 * @description
 * # apiRest
 * Factory in the proyectoMapsApp.
 */
angular.module('viviApp')
  .factory('apiRest', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
