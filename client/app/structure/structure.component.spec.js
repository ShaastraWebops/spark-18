'use strict';

describe('Component: StructureComponent', function() {
  // load the controller's module
  beforeEach(module('summitregistations2018App.structure'));

  var StructureComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    StructureComponent = $componentController('structure', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
