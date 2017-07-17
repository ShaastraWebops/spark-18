'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './editcity.routes';

export class EditcityComponent {
  /*@ngInject*/

  cities = [];
  newCity = '';

  constructor($http, Auth) {
    this.$http = $http;
    this.manage = 1;
    this.curCity = '';
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

  $onInit() {
    this.$http.get('/api/citys').then(res => {
      this.cities = res.data;
      console.log(this.cities);
    });
  }

  addCity(){
    if(this.newCity){
    this.$http.post('/api/citys',{
      CityName: this.newCity.CityName,
      Venue: this.newCity.Venue,
      Time: this.newCity.Time,
      Venue_link: this.newCity.Venue_link,
      Capacity: this.newCity.Capacity,
      no_of_registered: this.newCity.no_of_registered,
      active: this.newCity.active
    }).then(data => {
      this.newCity = {};
      console.log(data);
    });
    }
  }

  getCurCity(){
    console.log(this.curCity);
  }
  toggle(city) {
        city.edit = !city.edit;
   };   

  saveCity(city){
    this.$http.put(`/api/citys/${city._id}`,{
      CityName: this.city.CityName,
      Venue: this.city.Venue,
      Time: this.city.Time,
      Venue_link: this.city.Venue_link,
      Capacity: this.city.Capacity,
      no_of_registered: this.city.no_of_registered,
      active: this.city.active
    })
  }

  close_Registration(city){
    this.$http.put(`/api/citys/${city._id}`,{
      active: false
    })
  }
}

export default angular.module('summitregistations2018App.editcity', [uiRouter])
  .config(routes)
  .component('editcity', {
    template: require('./editcity.html'),
    controller: EditcityComponent,
    controllerAs: 'editCtrl'
  })
  .name;
