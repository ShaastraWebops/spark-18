'use strict';
// @flow

import angular from 'angular';

type User = {
  name: string;
  email: string;
  password: string;
};

export default class SignupController {
  user: User = {
    name: '',
    email: '',
    password: ''
  };
  errors = {};
  submitted = false;
  Auth;
  $state;

  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;
    console.log("1");
    if(true) {
      console.log("2");
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      })
        .then(() => {
          console.log("3");
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          console.log("4");
          console.log(err);
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}
