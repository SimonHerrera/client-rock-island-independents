'use strict';

angular.module('riiApp')
  .controller('OpponentsCtrl', function(apiUrl, $http) {

    const opponents = this

    opponents.welcome = 'All Time Opponents'
    opponents.heading = 'Games 1919 - 1925'

    $http.get (apiUrl+'/opponents/').then(res => {
      console.log("opponent res", res);
      opponents.teamsPlayed = res.data
      addResults()
    });


    function addResults() {
      //opponents-games-result = "W"
      var wins = 0;
      var losses = 0;
      var ties = 0;
      for (let i = 0; i < opponents.teamsPlayed.length; i++) {
          console.log("opp", opponents.teamsPlayed[i]);
        for (let j = 0; j < opponents.teamsPlayed[i].games.length; j++) {
          console.log("game", opponents.teamsPlayed[i].games[j]);
          if (opponents.teamsPlayed[i].games[j].result === "W") {
            wins ++
          } else if (opponents.teamsPlayed[i].games[j].result === "L") {
            losses ++
          }else if (opponents.teamsPlayed[i].games[j].result === "T") {
            ties ++
          }
        }
        console.log("wins", wins );
        opponents.teamsPlayed[i].wins = wins
        wins = 0
        opponents.teamsPlayed[i].losses = losses
        losses = 0
        opponents.teamsPlayed[i].ties = ties
        ties = 0

      }
    }

  });