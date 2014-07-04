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
      .otherwise({
        redirectTo: '/apps'
      });
  });
