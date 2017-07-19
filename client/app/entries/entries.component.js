'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './entries.routes';

export class EntriesComponent {
  /*@ngInject*/
  constructor($http, Auth, $scope, FileSaver) {
    this.$http = $http;
    this.isAdmin = Auth.isAdminSync;
    this.curCity = '';
    this.regs = [];
    this.show = false;
  }

  $onInit() {
    this.$http.get('/api/citys').then(res => {
      this.cities = res.data;
    })
  }
 
 getRegistrations(){
    this.show = true;
    this.regs = this.curCity.regs;
    this.regns = [];
    for(var i=0; i<this.regs.length; i++)
    {
      this.$http.get('/api/participants/'+this.regs[i]).then(res =>{
        this.regns.push(res.data);
      });
    }
 }

 initRow(id){
    this.$http.get('/api/participants/'+id).then(res => {
      this.curRegn = res.data;
    })
 }
 
  exp() {
     this.$http.get('/api/participants/export').then(response => {
       var data = new Blob([response.data], { type: 'text/csv;charset=utf-8' });
       this.FileSaver.saveAs(data, 'participants.csv');
     });
   }
}

/*download() {

  var data = new Blob([response.data], { type: 'application/pdf;charset=utf-8' });
        this.FileSaver.saveAs(data, 'resume'+this.mem.team_name);
}*/

export default angular.module('summitregistations2018App.entries', [uiRouter])
  .config(routes)
  .component('entries', {
    template: require('./entries.html'),
    controller: EntriesComponent,
    controllerAs: 'entriesCtrl'
  })
  .name;
