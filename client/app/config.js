'use strict';

angular.module('riiApp')
  .config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/about', {
        templateUrl: 'app/about/about.html'
      })
      .when('/douglasPark', {
        templateUrl: 'app/douglasPark/douglasPark.html'
      })
      .when('/', {
        templateUrl: 'app/landing/landing.html'
      })
      .when('/opponents', {
        controller: 'OpponentsCtrl',
        controllerAs: 'opponents',
        templateUrl: 'app/opponents/opponents.html'
      })
      .when('/players', {
        controller: 'PlayersCtrl',
        controllerAs: 'players',
        templateUrl: 'app/players/players.html'
      })
      .when('/rules', {
        templateUrl: 'app/rules/rules.html'
      })
      .when('/teamHistory', {
        templateUrl: 'app/teamHistory/teamHistory.html'
      })
      .when('/teamPhotos', {
        templateUrl: 'app/teamPhotos/teamPhotos.html'
      })
      .when('/yearView/:selectedYear', {
        controller: 'YearViewCtrl',
        controllerAs: 'yearView',
        templateUrl: 'app/yearView/yearView.html'
      })

      // .when('/auth', {
      //   controller: 'AuthCtrl',
      //   controllerAs: 'auth',
      //   templateUrl: 'app/auth/admin.html'
      // })
      .otherwise('/')
  }]);