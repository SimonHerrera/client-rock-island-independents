'use strict';

angular.module('riiApp')
  .controller('YearViewCtrl', function(apiUrl, $http) {

    const yearView = this

    $http.get (apiUrl+'/coaches/').then(res => {
      console.log("res", res);
      yearView.coaches = res.data
    })

    $http.get (apiUrl+'/coaches/1/').then(res => {
      // console.log("res", res);
      yearView.coach = res.data
    })


    yearView.welcome = 'Welcome to the Year View page'

  });