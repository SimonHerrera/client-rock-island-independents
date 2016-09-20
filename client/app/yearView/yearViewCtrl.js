'use strict';

angular.module('riiApp')
  .controller('YearViewCtrl', function(apiUrl, $http, $routeParams) {

    const yearView = this;
    yearView.thisYearsGames = null;
    yearView.thisYearsPlayers = [];
    yearView.yearSummary = true;
    yearView.individualGameView = false
    yearView.individualPlayerView = false

  //Get Player


    yearView.heading = 'Season Schedule'

    console.log("selectd year", $routeParams.selectedYear);

    //Get Years
    $http.get (apiUrl+'/years/').then(res => {
      // console.log("res", res);
      yearView.allYears = res.data
    })

    $http.get (`${apiUrl}/years/${$routeParams.selectedYear}/`)
    .then(res => {
      yearView.year = res.data;
      console.log(yearView.year);
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
    ).then(
    () => {
      yearView.allPlayers.forEach(player => {
        player.season.forEach(s => {
          console.log(s, yearView.year.url);
          if (s === yearView.year.url) {
            yearView.thisYearsPlayers.push(player);
          }
        });

        console.log("yearView.thisYearsPlayers", yearView.thisYearsPlayers)


      });
    })

    yearView.selectGame = game => {
      yearView.yearSummary = false;
      yearView.individualGameView = true;
      yearView.individualPlayerView = false;
      yearView.gameSummary = game.gameSummary
    }

    yearView.selectPlayer = player => {
      yearView.yearSummary = false;
      yearView.individualGameView = false;
      yearView.individualPlayerView = true;
      yearView.player = player
    }


  });

