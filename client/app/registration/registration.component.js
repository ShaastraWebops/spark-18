'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './registration.routes';
// const sendgrid = reuqire('sendgrid')('fivune');
export class RegistrationComponent {

  members = [];

  constructor($http,$scope,$stateParams) {
        'ngInject';
    this.$http = $http;
    this.newparticipant = {
      name1: '',
      rollnum1: '',
      school1: '',
      mobile1: '',
      email1: '',
      class1: '',
      city1: '',
      name2: '',
      rollnum2: '',
      school2: '',
      mobile2: '',
      email2: '',
      class2: '',
      city2: ''
    };

    this.submitted = false;
    this.show = false;
    this.select = true;
    if($stateParams.city){
      this.show = true;
      this.select = false;
    }
    this.curCity = "";
    this.$http.get('/api/citys').then(res => {
      this.cities = res.data;
      this.curCity = $stateParams.city;

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
  console.log(this.newparticipant);
  this.$http.post('/api/participants', {
    name1: this.newparticipant.name1,
    school1: this.newparticipant.school1,
    rollnum1: this.newparticipant.rollnum1,
    mobile1: this.newparticipant.mobile1,
    email1: this.newparticipant.email1,
    class1: this.newparticipant.class2,
    name2: this.newparticipant.name2,
    school2: this.newparticipant.school2,
    rollnum2: this.newparticipant.rollnum2,
    mobile2: this.newparticipant.mobile2,
    email2: this.newparticipant.email2,
    class2: this.newparticipant.class2
  }). then(function(){
            alert('Successfully Registered');
            window.location = '/';
  }
          )
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


  /*
then(data => {
        console.log(data.data._id);
        this.$http.get('/api/citys/'+this.curCity._id).then(res =>{
          this.arr = res.data.regs;
          this.arr.push(data.data._id);
          this.$http.put('/api/citys/'+this.curCity._id, {
            regs: this.arr
          })
  */
