'use strict';

angular.module('riiApp')
  .controller('YearViewCtrl', function(apiUrl, $http, $routeParams) {

    const yearView = this;
    yearView.thisYearsGames = null;
    // yearView.thisYearsPlayers = null;

  //Get Player


    yearView.heading = 'Schedule'

    console.log("selectd year", $routeParams.selectedYear);

    //Get Years
    $http.get (apiUrl+'/years/').then(res => {
      // console.log("res", res);
      yearView.allYears = res.data
    })

    $http.get (`${apiUrl}/years/${$routeParams.selectedYear}/`)
    .then(res => {
      yearView.year = res.data
    }).then(() =>
      $http.get (apiUrl+'/games/').then(res => {
        yearView.allGames = res.data
      })
    ).then(
      () => {
        yearView.thisYearsGames = yearView.allGames.filter(game => {
          var date = new Date(game.date)
          var year = date.getFullYear()
          return year === parseInt(yearView.year.year);
        });
        console.log("yearview", yearView.thisYearsGames );
      }
    ).then(() =>
      $http.get (apiUrl+'/players/').then(res => {
        // console.log("res", res);
        yearView.allPlayers = res.data
      })
    )//.then goes here
    // .then(
    // () => {
    //   yearView.thisYearsPlayers = yearview.allPlayers.filter(player => {
    //     return player ==== yearView.players.seasons
    //   })
    // })




  });

