'use strict';

describe('Component: CitiesComponent', function() {
  // load the controller's module
  beforeEach(module('summitregistations2018App.cities'));

  var CitiesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CitiesComponent = $componentController('cities', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
