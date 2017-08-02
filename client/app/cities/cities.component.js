'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './cities.routes';

export class CitiesComponent {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
    this.$http.get('/api/citys').then(res => {
      this.cities = res.data;
      this.cities.sort(function(a,b){return (a.CityName - b.CityName)});
    });
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
