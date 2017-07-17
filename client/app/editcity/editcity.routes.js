'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('editcity', {
      url: '/editcity',
      template: '<editcity></editcity>'
    });
}
