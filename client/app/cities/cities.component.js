'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './cities.routes';

export class CitiesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('summitregistations2018App.cities', [uiRouter])
  .config(routes)
  .component('cities', {
    template: require('./cities.html'),
    controller: CitiesComponent,
    controllerAs: 'citiesCtrl'
  })
  .name;
