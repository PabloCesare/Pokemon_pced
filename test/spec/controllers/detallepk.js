'use strict';

describe('Controller: DetallepkCtrl', function () {

  // load the controller's module
  beforeEach(module('mipokemonApp'));

  var DetallepkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetallepkCtrl = $controller('DetallepkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetallepkCtrl.awesomeThings.length).toBe(3);
  });
});
