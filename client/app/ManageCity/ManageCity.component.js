'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './ManageCity.routes';

export class ManageCityComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('summitregistations2018App.ManageCity', [uiRouter])
  .config(routes)
  .component('ManageCity', {
    template: require('./ManageCity.html'),
    controller: ManageCityComponent,
    controllerAs: 'cityCtrl'
  })
  .name;
