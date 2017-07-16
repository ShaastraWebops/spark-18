'use strict';

describe('Component: ManageCityComponent', function() {
  // load the controller's module
  beforeEach(module('summitregistations2018App.ManageCity'));

  var ManageCityComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ManageCityComponent = $componentController('ManageCity', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
