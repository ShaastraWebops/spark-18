'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('registration', {
      url: '/registration/:city',
      template: "<registration></registration>",
      params: {
      	city : {squash :true}
      }
    });
}
