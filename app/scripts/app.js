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
      .when('/apps/blue_connect', {
        templateUrl: 'views/simple_app.html',
        controller: 'BlueConnect'
      })
      .when('/apps/decision_maker', {
        templateUrl: 'views/simple_app.html',
        controller: 'DecisionMaker'
      })
      .when('/apps/zero_fill', {
        templateUrl: 'views/simple_app.html',
        controller: 'ZeroFill'
      })
      .when('/apps/htpc_remote', {
        templateUrl: 'views/htpc_remote.html',
        controller: 'HtpcRemote'
      })
      .when('/apps/htpc_remote/htpc_privacy', {
        templateUrl: 'views/privacy_policy.html',
        controller: 'HtpcRemotePrivacyPolicy'
      })
      .when('/apps/ptc/ptc_privacy', {
        templateUrl: 'views/privacy_policy.html',
        controller: 'PtcPrivacyPolicy'
      })
      .otherwise({
        redirectTo: '/apps'
      });
  });
