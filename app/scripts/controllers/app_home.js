'use strict';

/**
 * @ngdoc function
 * @name razsapps.controller:AppHome
 * @description
 * # AppHome
 * Controller of the razsapps
 */
angular.module('razsapps')
  .controller('AppHome', function ($scope) {
    $scope.currentPageTitle = 'Apps';
      
    $scope.apps = [
        {
            name: 'HTPC Remote',
            icon: 'images/htpc_remote.png',
            site: 'apps/htpc_remote'
        },
        {
            name: 'WiScanifi',
            icon: 'images/wiscanifi.png',
            site: 'apps/wiscanifi'
        },
        {
            name: 'Blue Connect',
            icon: 'images/blue_connect.png',
            site: 'apps/blue_connect'
        },
        {
            name: 'Zero Fill: Permanent Eraser',
            icon: 'images/zerofill_eraser.png',
            site: 'apps/zero_fill'
        },
        {
            name: 'Phone to Computer',
            icon: 'images/phone_to_computer.png',
            site: 'apps/ptc'
        },
        {
            name: 'Decision Maker',
            icon: 'images/decision_maker.png',
            site: 'apps/decision_maker'
        }
    ];
  });
