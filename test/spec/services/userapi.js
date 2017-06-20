'use strict';

describe('Service: userApi', function () {

  // load the service's module
  beforeEach(module('proyectoMapsApp'));

  // instantiate service
  var userApi;
  beforeEach(inject(function (_userApi_) {
    userApi = _userApi_;
  }));

  it('should do something', function () {
    expect(!!userApi).toBe(true);
  });

});
