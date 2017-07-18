'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('cities', {
      url: '/cities',
      template: '<cities></cities>'
    });
}
