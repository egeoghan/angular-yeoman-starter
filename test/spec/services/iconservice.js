'use strict';

describe('Service: iconService', function () {

  // load the service's module
  beforeEach(module('weatherApp'));

  // instantiate service
  var iconService;
  beforeEach(inject(function (_iconService_) {
    iconService = _iconService_;
  }));

  it('should do something', function () {
    expect(!!iconService).toBe(true);
  });

});
