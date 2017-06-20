'use strict';

/**
 * @ngdoc service
 * @name viviApp.getData
 * @description
 * # getData
 * Factory in the viviApp.
 */
angular.module('viviApp')
  .factory('getData', function () {
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
