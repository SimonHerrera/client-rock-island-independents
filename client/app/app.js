'use strict';

angular.module('riiApp', ['ngRoute'])
  .constant('apiUrl', "http://localhost:8000") // could be https in future

  .config($httpProvider => {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken'; // adds header
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });



// var htmlLinks = document.getElementById('nav-links');
// htmlLinks.innerHTML =
//   "<nav><ul><li><a href='index.html'>Home</a></li>" +
//   "<li><a href='/#/yearView/1'>1919</a></li></ul></nav>" +
//   "<li><a href='/#/yearView/2'>1920</a></li></ul></nav>" +
//   "<li><a href='/#/yearView/3'>1921</a></li></ul></nav>" +
//   "<li><a href='/#/yearView/4'>1922</a></li></ul></nav>" +
//   "<li><a href='/#/yearView/5'>1923</a></li></ul></nav>" +
//   "<li><a href='/#/yearView/6'>1924</a></li></ul></nav>" +
//   "<li><a href='/#/yearView/7'>1925</a></li></ul></nav>" ;
