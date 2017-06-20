'use strict';

describe('Service: apiRest', function () {

  // load the service's module
  beforeEach(module('proyectoMapsApp'));

  // instantiate service
  var apiRest;
  beforeEach(inject(function (_apiRest_) {
    apiRest = _apiRest_;
  }));

  it('should do something', function () {
    expect(!!apiRest).toBe(true);
  });

});
