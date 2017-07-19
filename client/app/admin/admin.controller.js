'use strict';

export default class AdminController {
  users: Object[];

  /*@ngInject*/
  constructor($http) {
    // Use the User $resource to fetch all users
    this.$http = $http;
    this.curCity = '';
    this.registrations = false;
  }

  $onInit(){
    this.$http.get('/api/citys').then(res => {
      this.cities = res.data;
    });
  }


}
