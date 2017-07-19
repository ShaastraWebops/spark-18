'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './instructions.routes';

export class InstructionsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('summitregistations2018App.instructions', [uiRouter])
  .config(routes)
  .component('instructions', {
    template: require('./instructions.html'),
    controller: InstructionsComponent,
    controllerAs: 'instructionsCtrl'
  })
  .name;
