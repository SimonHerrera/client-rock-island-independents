'use strict';

angular.module('riiApp')
  .controller('YearViewCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    $anchorScroll.yOffset=200

    const yearView = this;
    yearView.thisYearsGames = null;
    yearView.thisYearsPlayers = [];
    yearView.yearSummary = true;
    yearView.individualGameView = false
    yearView.individualPlayerView = false
    yearView.scheduleHeading = 'Season Schedule'
    yearView.rosterHeading = 'Roster'

    yearView.loading = true;


    //Get Years
    $http.get (apiUrl+'/years/').then(res => {
      yearView.allYears = res.data
    })

    //Select Year and get games and specific game - get players for that year
    $http.get (`${apiUrl}/years/${$routeParams.selectedYear}/`)
    .then(res => {
      yearView.year = res.data;
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
      }
    ).then(() =>
      $http.get (apiUrl+'/players/').then(res => {
        yearView.allPlayers = res.data
      })
    ).then(
    () => {
      yearView.allPlayers.forEach(player => {
        player.season.forEach(s => {
          if (s === yearView.year.url) {
            yearView.thisYearsPlayers.push(player);
          }
        });
        yearView.loading = false;


      });
    })

    // Bring in all games to Show Game View
    yearView.selectGame = game => {
      yearView.yearSummary = false;
      yearView.individualGameView = true;
      yearView.individualPlayerView = false;
      yearView.game = game
      $anchorScroll('top')
    }

    // Bring in all players to Show Player View
    yearView.selectPlayer = player => {
      yearView.yearSummary = false;
      yearView.individualGameView = false;
      yearView.individualPlayerView = true;
      yearView.player = player
      $anchorScroll('top')
    }

  });


