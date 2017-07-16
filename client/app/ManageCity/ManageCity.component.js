'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './ManageCity.routes';

export class ManageCityComponent {

  $http;
  socket;
  cities = [];
  newCity = '';
  /*@ngInject*/
  constructor($http, Auth, $scope) {
    this.$http = $http;
    this.$scope = $scope;
    this.isAdmin = Auth.isAdminSync;
    this.newCity = {
        CityName: '',
        Venue: '',
        Time: '',
        Venue_link: ' ',
        Capacity: ' ',
        no_of_registered: ' ',
        active:true
  }

  $onInit() {
    this.$http.get('/api/citys').then(res => {
      this.cities = res.data;
      console.log(this.data);
    })
  }

  addCity(){
    this.$http.post('/api/citys',{
      CityName: this.newCity.CityName,
      Venue: this.newCity.Venue,
      Time: this.newCity.Time,
      Venue_link: this.newCity.Venue_link,
      Capacity: this.newCity.Capacity,
      no_of_registered: this.newCity.no_of_registered,
      active: this.newCity.active
    }).then(data => {
      console.log(data);
    });
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
