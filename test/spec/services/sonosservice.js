'use strict';

describe('Service: sonosService', function () {

  // load the service's module
  beforeEach(module('weatherApp'));

  // instantiate service
  var sonosService;
  beforeEach(inject(function (_sonosService_) {
    sonosService = _sonosService_;
  }));

  it('should do something', function () {
    expect(!!sonosService).toBe(true);
  });

});
