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
    this.manage = 1;
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
  }
}

$onInit() {
    this.manage = 'add';
    this.$http.get('/api/citys').then(res => {
      this.cities = res.data;
      console.log(this.data);
    })
  }

  reset() {
    this.$http.get('/api/citys')
      .then(response => {
        this.cities = response.data;
        this.socket.syncUpdates('cities', this.cities);
      });
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
      this.city = {};
      console.log(data);
    });
  }

toggle(city) {
        city.edit = !city.edit;
   };   

  saveCity(city){
    this.$http.put(`/api/citys/${city._id}`,{
      CityName: this.newCity.CityName,
      Venue: this.newCity.Venue,
      Time: this.newCity.Time,
      Venue_link: this.newCity.Venue_link,
      Capacity: this.newCity.Capacity,
      no_of_registered: this.newCity.no_of_registered,
      active: this.newCity.active
    })
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
