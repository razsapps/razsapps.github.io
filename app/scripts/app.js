'use strict';

/**
 * @ngdoc overview
 * @name razsapps
 * @description
 * # razsapps
 *
 * Main module of the application.
 */
angular
  .module('razsapps', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/app_home.html',
        controller: 'AppHome'
      })
      .when('/apps', {
        templateUrl: 'views/app_home.html',
        controller: 'AppHome'
      })
      .when('/blue_connect', {
        templateUrl: 'views/simple_app.html',
        controller: 'BlueConnect'
      })
      .when('/decision_maker', {
        templateUrl: 'views/simple_app.html',
        controller: 'DecisionMaker'
      })
      .when('/zero_fill', {
        templateUrl: 'views/simple_app.html',
        controller: 'ZeroFill'
      })
      .when('/htpc_remote', {
        templateUrl: 'views/htpc_remote.html',
        controller: 'HtpcRemote'
      })
      .otherwise({
        redirectTo: '/apps'
      });
  });
