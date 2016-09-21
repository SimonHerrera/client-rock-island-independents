'use strict';

angular.module('riiApp')
  .controller('OpponentsCtrl', function(apiUrl, $http) {

    const opponents = this

    opponents.welcome = 'All Time Opponents'
    opponents.heading = 'Games 1919 - 1925'

    $http.get (apiUrl+'/opponents/').then(res => {
      // console.log("opponent res", res);
      opponents.teamsPlayed = res.data
      addResults()
    });


    function addResults() {
      var wins = 0;
      var losses = 0;
      var ties = 0;
      var oppPoints = 0;
      var riiPoints =0;

      for (let i = 0; i < opponents.teamsPlayed.length; i++) {
        for (let j = 0; j < opponents.teamsPlayed[i].games.length; j++) {
          // Tally total points for and againt for that opponent - j is team
          oppPoints += opponents.teamsPlayed[i].games[j].opponentScore;
          riiPoints += opponents.teamsPlayed[i].games[j].rockIslandScore;
          // Tally total W L T vs that opponent
          if (opponents.teamsPlayed[i].games[j].result === "W") {
            wins ++
          } else if (opponents.teamsPlayed[i].games[j].result === "L") {
            losses ++
          } else if (opponents.teamsPlayed[i].games[j].result === "T") {
            ties ++
          }
        }
        // Diplay Results and then set back to 0 for next iteration
        opponents.teamsPlayed[i].wins = wins;
        wins = 0
        opponents.teamsPlayed[i].losses = losses;
        losses = 0
        opponents.teamsPlayed[i].ties = ties;
        ties = 0
        opponents.teamsPlayed[i].pointsFor = riiPoints;
        riiPoints = 0
        opponents.teamsPlayed[i].pointsAgainst = oppPoints;
        oppPoints = 0
      }
    }
  });
