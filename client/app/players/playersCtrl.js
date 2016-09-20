'use strict';

angular.module('riiApp')
  .controller('PlayersCtrl', function(apiUrl, $http) {

    const players = this

    players.welcome = 'Rock Island Players'
    players.heading = 'Player Name'
    players.intialView = true;
    players.individualPlayerView = false

    $http.get (apiUrl+'/players/').then(res => {
      console.log("res", res);
      players.riiPlayers = res.data
    })

    players.selectPlayer = player => {
      players.intialView = false;
      players.individualPlayerView = true;
      players.player = player
    }

  });