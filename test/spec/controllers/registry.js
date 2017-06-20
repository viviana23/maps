'use strict';

describe('Controller: RegistryCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectoMapsApp'));

  var RegistryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistryCtrl = $controller('RegistryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistryCtrl.awesomeThings.length).toBe(3);
  });
});
