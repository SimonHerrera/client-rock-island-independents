'use strict';

angular.module('riiApp')
  .controller('LandingCtrl', function(apiUrl, $http) {

    const landing = this

    $http.get (apiUrl+'/coaches/').then(res => {
      console.log("res", res);
      landing.coaches = res.data
    })

    $http.get (apiUrl+'/coaches/1/').then(res => {
      // console.log("res", res);
      landing.coach = res.data
    })


    landing.welcome = 'Welcome to the page'

  });