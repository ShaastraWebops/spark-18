'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('instructions', {
      url: '/instructions',
      template: '<instructions></instructions>'
    });
}
