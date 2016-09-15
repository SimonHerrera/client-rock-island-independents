'use strict';

angular.module('riiApp')
  .controller('YearViewCtrl', function(apiUrl, $http, $routeParams) {

    const yearView = this

    yearView.welcome = 'Welcome to the Year View page'

    console.log("rp", $routeParams.selectedYear);

    $http.get (apiUrl+'/years/').then(res => {
      // console.log("res", res);
      yearView.allYears = res.data
    })

    $http.get (`${apiUrl}/years/${$routeParams.selectedYear}/`).then(res => {
      console.log("res", res);
      yearView.years = res.data
    })



  });