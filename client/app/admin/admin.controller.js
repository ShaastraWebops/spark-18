'use strict';

export default class AdminController {
  users: Object[];

  /*@ngInject*/
  constructor($http, $scope, FileSaver) {
    // Use the User $resource to fetch all users
    this.$http = $http;
    this.$scope = $scope;
    $scope.curCity = '';
    this.registrations = false;
    this.FileSaver = FileSaver;
    $scope.cities = ['Chennai','Madurai','Coimbatore','Trichy','Thanjavur','Salem','Erode','Trivandrum','Kochi','Thrissur','Kozhikode','Visakhapatnam','Vijayawada','Hyderabad','Hubli','Bengaluru','Delhi','Chandigarh','Mumbai','Pune','Kolkata','Bhubaneswar'];
  }

  $onInit(){
    }

  changeCurCity = function(cityName) {
    var app = this;
    this.$http.get('/api/participants/cityParticipants/' + cityName).then(function(data) {
      app.$scope.displayed = data.data;
    });
  }

  exp = function(cityName) {
    var app = this;
     this.$http.get('/api/participants/export/' + cityName).then(response => {
       var data = new Blob([response.data], { type: 'text/csv;charset=utf-8' });
       app.FileSaver.saveAs(data, 'participants_' + cityName + '.csv');
     });
   }

}
