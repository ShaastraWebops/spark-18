'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('ManageCity', {
      url: '/ManageCity',
      template: '<manage-city></manage-city>',
      authenticate: 'admin'
    });
}
