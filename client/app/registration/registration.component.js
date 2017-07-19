'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './registration.routes';
// const sendgrid = reuqire('sendgrid')('fivune');
export class RegistrationComponent {

  members = [];

  constructor($http,$scope) {
        'ngInject';

    this.$http = $http;
    this.newparticipant = {
      name: '',
      rollnum: '',
      school: '',
      mobile: '',
      email: ''
    };

    this.submitted = false;
    this.show = false;
    this.curCity = '';
    this.$http.get('/api/citys').then(res => {
      this.cities = res.data;
      console.log(this.curCity);
    });
  }

  $onInit() {
  this.step=1;
  }

  changeCurCity(){
    this.$http.get('/api/citys/'+this.curCity._id).then(res => {
      this.show = res.data.active;
    })
  }

 submit(){
  this.submitted = true;
  // console.log(this.newparticipant, this.curCity._id);
  this.$http.post('/api/participants', {
        name: this.newparticipant.name,
        school: this.newparticipant.school,
        rollnum: this.newparticipant.rollnum,
        mobile: this.newparticipant.mobile,
        email: this.newparticipant.email,
        city: this.curCity._id
      }).then(data => {
        console.log(data.data._id);
        this.$http.get('/api/citys/'+this.curCity._id).then(res =>{
          this.arr = res.data.regs;
          this.arr.push(data.data._id);
          this.$http.put('/api/citys/'+this.curCity._id, {
            regs: this.arr
          }).then(res =>{
            alert('Successfully Registered');
          })
        })
        // window.alert('Registered Successfully!');
        // window.location = '/';
      });
  }

}

export default angular.module('summitregistations2018App.registration', [uiRouter])
  .config(routes)
  .component('registration', {
    template: require('./registration.html'),
    controller: RegistrationComponent,
    controllerAs: 'editCtrl'
  })
  .name;
