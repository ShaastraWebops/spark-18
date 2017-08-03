'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './cities.routes';

export class CitiesComponent {
  /*@ngInject*/

  cities = [];



  
  constructor($http) {
    this.$http = $http;
    this.$http.get('/api/citys').then(res => {
      this.cities = res.data;
      this.cities.sort(compare);
    });
  }
}


function compare(a,b) {
  if (a.CityName.toLowerCase() < b.CityName.toLowerCase())
    return -1;
  else if (a.CityName.toLowerCase() > b.CityName.toLowerCase())
    return 1;
  else if (a.CityName.toLowerCase()== b.CityName.toLowerCase())
    return 0;
}


export default angular.module('summitregistations2018App.cities', [uiRouter])
  .config(routes)
  .component('cities', {
    template: require('./cities.html'),
    controller: CitiesComponent,
    controllerAs: 'citiesCtrl'
  })
  .name;
