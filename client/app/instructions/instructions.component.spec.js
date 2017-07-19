'use strict';

describe('Component: InstructionsComponent', function() {
  // load the controller's module
  beforeEach(module('summitregistations2018App.instructions'));

  var InstructionsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    InstructionsComponent = $componentController('instructions', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
