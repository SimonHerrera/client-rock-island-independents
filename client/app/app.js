'use strict';

angular.module('riiApp', ['ngRoute'])
  .constant('apiUrl', "http://localhost:8000") // localhost line
  // .constant('apiUrl', "http://104.236.6.142:8000") // for server

  .config($httpProvider => {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken'; // adds header
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });

