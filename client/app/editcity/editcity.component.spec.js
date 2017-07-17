'use strict';

describe('Component: EditcityComponent', function() {
  // load the controller's module
  beforeEach(module('summitregistations2018App.editcity'));

  var EditcityComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    EditcityComponent = $componentController('editcity', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
