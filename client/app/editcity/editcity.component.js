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
        date: '',
        Venue_link: ' ',
        Capacity: ' ',
        contact: ' ',
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
      date: this.newCity.date,
      Venue_link: this.newCity.Venue_link,
      Capacity: this.newCity.Capacity,
      contact: this.newCity.contact,
      active: this.newCity.active
    }).then(data => {
      this.newCity = {};
      alert('Successfully added');
    });
    }
  }

  saveCity(){
    this.$http.put(`/api/citys/`+this.curCity._id,{
      CityName: this.curCity.CityName,
      Venue: this.curCity.Venue,
      date: this.curCity.date,
      Time: this.curCity.Time,
      Venue_link: this.curCity.Venue_link,
      Capacity: this.curCity.Capacity,
      no_of_registered: this.curCity.contact,
      active: this.curCity.active
    }).then(res => {
      alert('Updated Successfully!');
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
