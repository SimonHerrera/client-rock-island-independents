'use strict';

angular.module('riiApp', ['ngRoute'])
  .constant('apiUrl', "http://localhost:8000") // could be https in future

  .config($httpProvider => {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken'; // adds header
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });
