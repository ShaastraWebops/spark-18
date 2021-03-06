'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngFilesaver from 'angular-file-saver';

import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import registration from './registration/registration.component';
import main from './main/main.component';
import entries from './entries/entries.component';
import constants from './app.constants';
import navbar from '../components/navbar/navbar.component';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import editcity from './editcity/editcity.component';
import cities from './cities/cities.component';
import instructions from './instructions/instructions.component';

import './app.css';

angular.module('summitregistations2018App', [ngCookies, ngFilesaver, ngResource, ngSanitize, 'btford.socket-io',
  uiRouter, uiBootstrap, _Auth, account, admin, 'validation.match', navbar, main,registration, entries, editcity, cities,
  constants, socket, util, instructions
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['summitregistations2018App'], {
      strictDi: false
    });
  });
